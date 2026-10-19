// The dot field behind the intro. It drifts on its own, lifts around the
// cursor, and with the Play button rises column by column with a short loop;
// a second button swaps the loop for the visitor's mic. The field stays quiet
// behind the text block. Reduced motion or a low-memory device gets one still
// frame and no buttons. No dependencies.
const canvas = document.querySelector('.hero-field');
const play = document.querySelector('.hero-sound');
const mic = document.querySelector('.hero-mic');
const ctx = canvas && canvas.getContext('2d');
if (ctx && play && mic) init();

function init() {
  const GAP = innerWidth < 720 ? 16 : 18;
  const CELL = 12, STEPS = 16;
  const dpr = Math.min(devicePixelRatio || 1, 1.5);
  let still = matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.deviceMemory <= 2;
  let w = 0, h = 0, cols = 0, rows = 0, levels = new Float32Array(0);
  let tx = 0, ty = 0;                 // right and bottom edge of the text block: dots stay quiet inside it
  let mx = -1e4, my = -1e4;
  let raf = 0, visible = true, last = 0, slow = 0;
  let audio = null;                   // { ac, analyser, bins, stop }
  let busy = false;

  // One sprite sheet: STEPS dot sizes in ink, then STEPS in accent.
  const sprite = document.createElement('canvas');
  sprite.width = CELL * STEPS * 2 * dpr; sprite.height = CELL * dpr;
  const sc = sprite.getContext('2d');
  sc.scale(dpr, dpr);
  for (let k = 0; k < STEPS * 2; k++) {
    const v = (k % STEPS) / (STEPS - 1);
    sc.fillStyle = k < STEPS ? `rgba(20,19,17,${0.1 + v * 0.55})` : `rgba(210,58,16,${0.3 + v * 0.6})`;
    sc.beginPath(); sc.arc(k * CELL + CELL / 2, CELL / 2, 0.7 + v * 2.1, 0, Math.PI * 2); sc.fill();
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    if (!w || !h) return;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
    levels = new Float32Array(cols);
    tx = 0; ty = 0;
    for (const el of document.querySelectorAll('.intro h1, .intro p')) {
      const b = el.getBoundingClientRect();
      if (b.width) { tx = Math.max(tx, b.right - r.left); ty = Math.max(ty, b.bottom - r.top); }
    }
    if (still) draw(0);
  }

  function readLevels() {
    const { analyser, bins } = audio;
    analyser.getByteFrequencyData(bins);
    const half = cols / 2;
    for (let i = 0; i < cols; i++) {
      const u = Math.abs(i - half) / half;           // bass in the middle
      const b = Math.min(bins.length - 2, Math.floor(u * u * 56));
      const n = Math.max(0, ((bins[b] + bins[b + 1]) / 510 - 0.2) / 0.8);
      levels[i] = Math.min(0.6, n * n);              // quiet stays quiet, peaks stop short of the top
    }
  }

  const ramp = (a, b, x) => x <= a ? 0 : x >= b ? 1 : (x - a) / (b - a);

  function draw(t) {
    const s = t / 1000;
    ctx.clearRect(0, 0, w, h);
    if (audio) readLevels();
    for (let i = 0; i < cols; i++) {
      const x = i * GAP, lv = levels[i];
      const litFrom = h * (1 - lv);                  // this column is lit below here
      const qx = ramp(tx, tx + 140, x);
      for (let j = 0; j < rows; j++) {
        const y = j * GAP;
        const quiet = 0.35 + 0.65 * Math.max(qx, ramp(ty, ty + 60, y));   // dim inside the text block
        let v = (Math.sin(x * 0.011 + s * 0.8) * Math.sin(y * 0.014 - s * 0.5 + x * 0.002) + 1) * 0.5;
        v = (0.12 + v * 0.4) * quiet;
        const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy;
        let px = x, py = y;
        if (d2 < 40000) {                              // within 200px of the cursor
          const c = Math.exp(-d2 / 9000), push = c * 14 / (Math.sqrt(d2) + 1);
          v += c * 0.6; px += dx * push; py += dy * push;
        }
        let sheet = 0;
        if (lv > 0 && y >= litFrom) {                  // lit column: ink body, accent on the top two rows
          v = (0.3 + lv * 0.7) * quiet;
          if (y < litFrom + GAP * 2) sheet = STEPS;
        }
        const k = sheet + Math.min(STEPS - 1, (v * STEPS) | 0);
        ctx.drawImage(sprite, k * CELL * dpr, 0, CELL * dpr, CELL * dpr, px - CELL / 2, py - CELL / 2, CELL, CELL);
      }
    }
  }

  function frame(t) {
    raf = 0;
    draw(t);
    // 30 frames in a row under 20 fps (not one stall, like a permission prompt): keep the last frame.
    slow = t - last < 50 ? 0 : slow + 1;
    last = t;
    if (slow > 30) { console.info('hero: frames too slow, keeping a still frame'); goStill(); return; }
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  }
  function wake() {
    if (still || raf || !visible || document.hidden) return;
    last = performance.now(); slow = 0;
    raf = requestAnimationFrame(frame);
  }
  function goStill() {
    still = true;
    stopSound();
    if (document.activeElement === play || document.activeElement === mic) document.querySelector('.intro h1').focus({ preventScroll: true });
    play.hidden = mic.hidden = true;
  }

  new ResizeObserver(resize).observe(canvas);
  if (still) return;                                 // one still frame, no buttons
  play.hidden = false;

  new IntersectionObserver(es => { visible = es[es.length - 1].isIntersecting; wake(); }).observe(canvas);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopSound(); else wake(); });
  addEventListener('pagehide', stopSound);
  const point = e => { const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
  addEventListener('pointermove', point, { passive: true });
  addEventListener('pointerdown', point, { passive: true });
  document.addEventListener('pointerleave', () => { mx = my = -1e4; });

  // Sound. The loop starts inside the click (Safari needs the AudioContext made
  // in the gesture); the mic is a second, explicit step and never the first thing
  // a visitor is asked for.
  play.addEventListener('click', () => {
    if (busy) return;
    if (audio) return stopSound();
    const ac = new AudioContext();
    if (ac.state !== 'running') ac.resume();
    startLoop(ac);
    play.textContent = 'Stop';
    mic.hidden = false;
  });
  mic.addEventListener('click', async () => {
    if (busy || !audio) return;
    busy = true; mic.textContent = 'Asking for the mic…';
    let stream;
    try {
      stream = await Promise.race([
        navigator.mediaDevices.getUserMedia({ audio: true }),
        new Promise((_, rej) => setTimeout(() => rej(new DOMException('no answer', 'TimeoutError')), 8000)),
      ]);
      if (!audio || still) throw new DOMException('stopped meanwhile', 'AbortError');
      const { ac, analyser } = audio;
      if (ac.state !== 'running') await ac.resume();
      audio.stop();                                  // the loop source only; the context stays
      ac.createMediaStreamSource(stream).connect(analyser);
      stream.getTracks()[0].addEventListener('ended', stopSound);
      audio = { ac, analyser, bins: audio.bins, stop() { stream.getTracks().forEach(t => t.stop()); ac.close(); } };
      mic.hidden = true;
    } catch (err) {
      if (stream) stream.getTracks().forEach(t => t.stop());
      console.warn('hero: mic not used, loop keeps playing:', err.name, err.message);
      mic.textContent = 'Mic unavailable';
    } finally { busy = false; }
  });
  function startLoop(ac) {
    const analyser = ac.createAnalyser();
    analyser.fftSize = 256; analyser.smoothingTimeConstant = 0.8;
    const src = ac.createBufferSource(), gain = ac.createGain();
    src.buffer = makeLoop(ac); src.loop = true; gain.gain.value = 0.4;
    src.connect(gain).connect(analyser).connect(ac.destination); src.start();
    audio = { ac, analyser, bins: new Uint8Array(analyser.frequencyBinCount), stop() { src.stop(); gain.disconnect(); } };
  }
  function stopSound() {
    if (!audio) return;
    const { ac } = audio;
    audio.stop();
    if (ac.state !== 'closed') ac.close().catch(() => {});
    audio = null; levels.fill(0);
    play.textContent = 'Play a loop';
    mic.hidden = true; mic.textContent = 'Use my mic';
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
