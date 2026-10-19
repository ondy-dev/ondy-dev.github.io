// The dot field behind the intro. It drifts on its own, lifts around the
// cursor, and with the Sound button rises column by column with the mic (or
// with a short synthesized loop if the mic is refused). Reduced motion or a
// low-end device gets one still frame and no button. No dependencies.
const canvas = document.querySelector('.hero-field');
const button = document.querySelector('.hero-sound');
const ctx = canvas && canvas.getContext('2d');
if (ctx) init();

function init() {
  const label = button.querySelector('.hs-label');
  const GAP = innerWidth < 720 ? 16 : 18;
  const CELL = 12, STEPS = 16;
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  let still = matchMedia('(prefers-reduced-motion: reduce)').matches
    || navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2;
  let w = 0, h = 0, cols = 0, rows = 0, levels = new Float32Array(0);
  let mx = -1e4, my = -1e4;
  let raf = 0, visible = true;
  let audio = null; // { ac, analyser, bins, stop }

  // One sprite sheet: STEPS dot sizes in ink, then STEPS in accent.
  const sprite = document.createElement('canvas');
  sprite.width = CELL * STEPS * 2 * dpr; sprite.height = CELL * dpr;
  const sc = sprite.getContext('2d');
  sc.scale(dpr, dpr);
  for (let k = 0; k < STEPS * 2; k++) {
    const v = (k % STEPS) / (STEPS - 1);
    sc.fillStyle = k < STEPS ? `rgba(20,19,17,${0.1 + v * 0.55})` : `rgba(210,58,16,${0.2 + v * 0.6})`;
    sc.beginPath(); sc.arc(k * CELL + CELL / 2, CELL / 2, 0.7 + v * 2.1, 0, Math.PI * 2); sc.fill();
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
    levels = new Float32Array(cols);
    if (still) draw(0);
  }

  function readLevels() {
    const { analyser, bins } = audio;
    analyser.getByteFrequencyData(bins);
    const half = cols / 2;
    for (let i = 0; i < cols; i++) {
      const u = Math.abs(i - half) / half;           // bass in the middle
      const b = Math.min(bins.length - 1, Math.floor(u * u * 56));
      const lv = (bins[b] + bins[b + 1]) / 510;
      const n = Math.max(0, (lv - 0.2) / 0.8);
      levels[i] = Math.min(0.75, n * n);              // quiet stays quiet, peaks stop short of the top
    }
  }

  function draw(t) {
    const s = t / 1000;
    ctx.clearRect(0, 0, w, h);
    if (audio) readLevels();
    for (let i = 0; i < cols; i++) {
      const x = i * GAP, lv = levels[i];
      for (let j = 0; j < rows; j++) {
        const y = j * GAP;
        let v = (Math.sin(x * 0.011 + s * 0.8) * Math.sin(y * 0.014 - s * 0.5 + x * 0.002) + 1) * 0.5;
        const depth = 0.35 + 0.65 * y / h;             // quieter up by the headline
        v = (0.1 + v * 0.4) * depth;
        const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy;
        let px = x, py = y;
        if (d2 < 40000) {                              // within 200px of the cursor
          const c = Math.exp(-d2 / 9000), push = c * 14 / (Math.sqrt(d2) + 1);
          v += c * 0.6; px += dx * push; py += dy * push;
        }
        let sheet = 0;
        if (lv > 0 && 1 - y / h < lv) { sheet = STEPS; v = (0.3 + lv * 0.7) * depth; }
        const k = sheet + Math.min(STEPS - 1, (v * STEPS) | 0);
        ctx.drawImage(sprite, k * CELL * dpr, 0, CELL * dpr, CELL * dpr, px - CELL / 2, py - CELL / 2, CELL, CELL);
      }
    }
  }

  let last = 0, slow = 0;
  function frame(t) {
    raf = 0;
    draw(t);
    // 30 slow frames in a row (not one stall, like a permission prompt): keep the last frame.
    slow = t - last < 34 ? 0 : slow + 1;
    last = t;
    if (slow > 30) { still = true; stopSound(); button.hidden = true; return; }
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  }
  function wake() {
    if (still || raf || !visible || document.hidden) return;
    last = performance.now(); slow = 0;
    raf = requestAnimationFrame(frame);
  }

  new ResizeObserver(resize).observe(canvas);
  if (still) return;                                 // one still frame, no button
  button.hidden = false;

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; wake(); }).observe(canvas);
  document.addEventListener('visibilitychange', wake);
  const point = e => { const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
  addEventListener('pointermove', point, { passive: true });
  addEventListener('pointerdown', point, { passive: true });
  document.addEventListener('pointerleave', () => { mx = my = -1e4; });

  // Sound: a mic analyser if the visitor allows it, otherwise a 124 bpm loop.
  button.addEventListener('click', async () => {
    if (audio) return stopSound();
    button.disabled = true;
    try { await startMic(); setLabel('Listening to your mic', true); }
    catch { startLoop(); setLabel('Playing a loop', true); }
    button.disabled = false;
  });
  function setLabel(text, on) { label.textContent = text; button.setAttribute('aria-pressed', String(on)); }
  function analyserFor(ac) {
    const analyser = ac.createAnalyser();
    analyser.fftSize = 256; analyser.smoothingTimeConstant = 0.8;
    return analyser;
  }
  async function startMic() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ac = new AudioContext(), analyser = analyserFor(ac);
    ac.createMediaStreamSource(stream).connect(analyser);
    audio = { analyser, bins: new Uint8Array(analyser.frequencyBinCount), stop() { stream.getTracks().forEach(t => t.stop()); ac.close(); } };
  }
  function startLoop() {
    const ac = new AudioContext(), analyser = analyserFor(ac);
    const src = ac.createBufferSource(), gain = ac.createGain();
    src.buffer = makeLoop(ac); src.loop = true; gain.gain.value = 0.4;
    src.connect(gain).connect(analyser).connect(ac.destination); src.start();
    audio = { analyser, bins: new Uint8Array(analyser.frequencyBinCount), stop() { src.stop(); ac.close(); } };
  }
  function stopSound() {
    if (audio) audio.stop();
    audio = null; levels.fill(0);
    setLabel('Sound off', false);
  }
  // shortcut: a synthesized kick / hat / bass pattern, swap for a real clip from a set via decodeAudioData
  function makeLoop(ac) {
    const sr = ac.sampleRate, beat = 60 / 124, bars = 2, n = Math.floor(sr * beat * 4 * bars);
    const buf = ac.createBuffer(1, n, sr), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) {
      const t = i / sr, tb = t % beat, te = t % (beat / 2), step = Math.floor(t / (beat / 2)) % 8;
      const kick = Math.sin(2 * Math.PI * (50 * tb + 90 * Math.exp(-tb * 18))) * Math.exp(-tb * 7);
      const hat = (Math.random() * 2 - 1) * Math.exp(-te * 60) * (step % 2 ? 0.5 : 0.25);
      const bt = (t + beat / 2) % beat, note = step < 4 ? 55 : 65.4;
      const bass = Math.sign(Math.sin(2 * Math.PI * note * bt)) * Math.exp(-bt * 5) * 0.35;
      d[i] = kick * 0.9 + hat * 0.6 + bass;
    }
    return buf;
  }
}
