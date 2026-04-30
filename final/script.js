// Audio
let audioContext = null;
let analyser = null;
let pitchAnalyser = null;

// State
let micSensitivity = 8;
let volume = 0;
let currentMode = 'fillbar';
let holdThreshold = 0.15;
let holdActive = false;
let holdSamples = [];
let holdStartTime = null;
const HOLD_DURATION = 3000;
let holdSubMode = 'loudness';

// DOM
const startBtn      = document.getElementById('start-btn');
const startScreen   = document.getElementById('start-screen');
const controlPanel  = document.getElementById('control-panel');
const volumeNumber  = document.getElementById('volume-number');
const volumeBar     = document.getElementById('volume-bar');
const micBar        = document.getElementById('mic-bar');
const pitchDisplay  = document.getElementById('pitch-display');
const pitchNote     = document.getElementById('pitch-note');
const pitchFreq     = document.getElementById('pitch-freq');
const holdProgress  = document.getElementById('hold-progress');
const holdBar       = document.getElementById('hold-bar');
const holdCountdown = document.getElementById('hold-countdown');
const statusText    = document.getElementById('status-text');
const modeDesc      = document.getElementById('mode-description');
const modeFillbar   = document.getElementById('mode-fillbar');
const modeHold      = document.getElementById('mode-hold');
const subLoudness   = document.getElementById('sub-loudness');
const subPitch      = document.getElementById('sub-pitch');
const holdSubToggle      = document.getElementById('hold-sub-toggle');
const sensitivitySlider  = document.getElementById('sensitivity-slider');
const sensitivityValue   = document.getElementById('sensitivity-value');
const thresholdMarker    = document.getElementById('mic-threshold-marker');
const thresholdLabel     = document.getElementById('threshold-label');

async function initAudio() {
  audioContext = new AudioContext();

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  } catch (err) {
    return false;
  }

  const micSource = audioContext.createMediaStreamSource(stream);

  analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.7;
  micSource.connect(analyser); // Not connected to destination, avoids feedback

  pitchAnalyser = audioContext.createAnalyser();
  pitchAnalyser.fftSize = 4096;
  pitchAnalyser.smoothingTimeConstant = 0.8;
  micSource.connect(pitchAnalyser);

  return true;
}

function getLoudness() {
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteTimeDomainData(dataArray);

  let sum = 0;
  for (let i = 0; i < dataArray.length; i++) {
    const n = (dataArray[i] / 128.0) - 1.0;
    sum += n * n;
  }
  const rms = Math.sqrt(sum / dataArray.length);

  return Math.min(rms * micSensitivity, 1.0);
}

function getPitch() {
  const data = new Uint8Array(pitchAnalyser.frequencyBinCount);
  pitchAnalyser.getByteFrequencyData(data);

  const sr = audioContext.sampleRate;
  const minBin = Math.round(85  * pitchAnalyser.fftSize / sr);
  const maxBin = Math.round(900 * pitchAnalyser.fftSize / sr);

  let maxVal = 0, maxIdx = -1;
  for (let i = minBin; i <= maxBin; i++) {
    if (data[i] > maxVal) { maxVal = data[i]; maxIdx = i; }
  }

  if (maxVal < 40 || maxIdx === -1) return null; // Requires actual singing, not ambient noise

  // Parabolic interpolation for sub-bin accuracy
  const prev = maxIdx > 0              ? data[maxIdx - 1] : 0;
  const next = maxIdx < data.length    ? data[maxIdx + 1] : 0;
  const refined = maxIdx + (next - prev) / (2 * (2 * maxVal - prev - next) || 1);

  return refined * sr / pitchAnalyser.fftSize;
}

function freqToNoteName(freq) {
  const NAMES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  const midi  = Math.round(12 * Math.log2(freq / 440) + 69);
  return NAMES[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1);
}

const PITCH_MIN = 85;  // E2, low end of singing range
const PITCH_MAX = 880; // A5, high end

function showPitch(freq) {
  if (freq !== null) {
    pitchDisplay.classList.remove('hidden');
    pitchNote.textContent = freqToNoteName(freq);
    pitchFreq.textContent = Math.round(freq) + ' Hz';
  } else {
    pitchDisplay.classList.add('hidden');
  }
}

function runFillBar(loudness) {
  const FILL_RATE = 0.40;
  const DRAIN_PER_FRAME = 0.04; // ~2.4 units/second, 100 to 0 in ~42s

  if (loudness > holdThreshold) {
    volume += loudness * FILL_RATE;
  }

  volume = Math.max(0, Math.min(100, volume - DRAIN_PER_FRAME));
  updateVolumeDisplay();

  const net = loudness * FILL_RATE - DRAIN_PER_FRAME;
  if (loudness <= holdThreshold) {
    statusText.textContent = volume > 1 ? "It's draining... make noise!" : 'Make noise to fill the bar.';
  } else if (net < 0) {
    statusText.textContent = "Louder! It's still draining...";
  } else {
    statusText.textContent = 'Volume is rising!';
  }
}

function runHoldMode(loudness) {
  const byPitch = holdSubMode === 'pitch';

  let freq = null, isActive, sample;

  if (byPitch) {
    freq = loudness > holdThreshold ? getPitch() : null;
    showPitch(freq);
    isActive = freq !== null;
    sample   = freq;
  } else {
    showPitch(null);
    isActive = loudness > holdThreshold;
    sample   = loudness;
  }

  if (isActive) {
    if (!holdActive) {
      holdActive = true;
      holdSamples = [];
      holdStartTime = Date.now();
    }

    holdSamples.push(sample);

    const elapsed   = Date.now() - holdStartTime;
    const remaining = Math.max(0, (HOLD_DURATION - elapsed) / 1000);

    holdProgress.classList.remove('hidden');
    holdBar.style.width = (Math.min(elapsed / HOLD_DURATION, 1) * 100) + '%';
    holdCountdown.textContent = remaining.toFixed(1);
    statusText.textContent = byPitch ? 'Hold the note steady...' : 'Hold steady...';

    if (elapsed >= HOLD_DURATION) {
      const avg = holdSamples.reduce((a, b) => a + b, 0) / holdSamples.length;

      if (byPitch) {
        const clamped = Math.max(PITCH_MIN, Math.min(PITCH_MAX, avg));
        // Log scale so each octave covers equal volume distance
        volume = Math.round(Math.log2(clamped / PITCH_MIN) / Math.log2(PITCH_MAX / PITCH_MIN) * 100);
        statusText.textContent = 'Locked in at ' + volume + '! (' + freqToNoteName(avg) + ', ' + Math.round(avg) + ' Hz)';
      } else {
        volume = Math.round(Math.min(avg * 100, 100));
        statusText.textContent = 'Locked in at ' + volume + '! Make noise again to change it.';
      }

      updateVolumeDisplay();
      resetHoldState();
    }

  } else {
    if (holdActive) {
      statusText.textContent = byPitch
        ? 'Pitch lost! Hold the note steady for the full 3 seconds.'
        : 'Too quiet! Hold cancelled. Try again.';
      resetHoldState();
    } else {
      statusText.textContent = byPitch
        ? 'Sing a note and hold it for 3 seconds.'
        : 'Sustain noise for 3 seconds to lock in the volume.';
    }
  }
}

function resetHoldState() {
  holdActive = false;
  holdSamples = [];
  holdStartTime = null;
  holdProgress.classList.add('hidden');
  holdBar.style.width = '0%';
}

function updateVolumeDisplay() {
  volumeNumber.textContent = Math.round(volume);
  volumeBar.style.setProperty('--fill', volume + '%');
}

function loop() {
  requestAnimationFrame(loop);
  const loudness = getLoudness();
  micBar.style.width = (loudness * 100) + '%';
  currentMode === 'fillbar' ? runFillBar(loudness) : runHoldMode(loudness);
}

// Mode switching
function setMode(mode) {
  currentMode = mode;
  resetHoldState();
  showPitch(null);
  volume = 0;
  updateVolumeDisplay();

  modeFillbar.classList.toggle('active', mode === 'fillbar');
  modeHold.classList.toggle('active', mode === 'hold');
  holdSubToggle.classList.toggle('hidden', mode !== 'hold');

  if (mode === 'fillbar') {
    modeDesc.textContent = 'Noise fills the bar. Louder fills it faster. It always slowly drains, so keep making noise to hold the level.';
    statusText.textContent = 'Make noise to fill the bar.';
  } else {
    updateHoldDesc();
  }
}

function setHoldSubMode(sub) {
  holdSubMode = sub;
  subLoudness.classList.toggle('active', sub === 'loudness');
  subPitch.classList.toggle('active', sub === 'pitch');
  resetHoldState();
  showPitch(null);
  updateHoldDesc();
}

function updateHoldDesc() {
  if (holdSubMode === 'pitch') {
    modeDesc.textContent = 'Sing a note and hold it for 3 seconds. Low note = low volume, high note = high volume.';
    statusText.textContent = 'Sing a note and hold it for 3 seconds.';
  } else {
    modeDesc.textContent = 'Sustain a loudness level for 3 full seconds. After the hold, volume locks in based on your average loudness.';
    statusText.textContent = 'Sustain noise for 3 seconds to lock in the volume.';
  }
}

// Draggable threshold marker
function updateThresholdMarker() {
  thresholdMarker.style.left = (holdThreshold * 100) + '%';
  thresholdLabel.textContent = 'hold threshold: ' + Math.round(holdThreshold * 100) + '%';
}

updateThresholdMarker();

function onThresholdDrag(clientX) {
  const rect = micBar.parentElement.getBoundingClientRect();
  holdThreshold = Math.max(0.02, Math.min(0.98, (clientX - rect.left) / rect.width));
  updateThresholdMarker();
}

thresholdMarker.addEventListener('mousedown', function (e) {
  e.preventDefault(); // Prevents text selection while dragging
  const onMove = e => onThresholdDrag(e.clientX);
  const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
});

thresholdMarker.addEventListener('touchstart', function (e) {
  e.preventDefault();
  const onMove = e => onThresholdDrag(e.touches[0].clientX);
  const onEnd  = () => { document.removeEventListener('touchmove', onMove); document.removeEventListener('touchend', onEnd); };
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('touchend', onEnd);
});

// Sensitivity slider
sensitivitySlider.addEventListener('input', function () {
  micSensitivity = parseInt(this.value) * 1.6;
  sensitivityValue.textContent = this.value;
});

// Event listeners
startBtn.addEventListener('click', async function () {
  startBtn.textContent = 'Requesting access...';
  startBtn.disabled = true;

  const ok = await initAudio();

  if (ok) {
    startScreen.classList.add('hidden');
    controlPanel.classList.remove('hidden');
    loop();
  } else {
    startBtn.textContent = 'Microphone denied. Reload and try again.';
    startBtn.disabled = false;
  }
});

modeFillbar.addEventListener('click', function () { setMode('fillbar'); });
modeHold.addEventListener('click', function () { setMode('hold'); });
subLoudness.addEventListener('click', function () { setHoldSubMode('loudness'); });
subPitch.addEventListener('click', function () { setHoldSubMode('pitch'); });
