// Synthesizes a page-turn "whoosh + flick" with the Web Audio API so the
// site doesn't need to ship or license an audio file. Only ever called from
// a user-initiated navigation (click, key press, swipe release), never on
// load, so it satisfies browser autoplay policy and the "no autoplay" rule.

let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;
  if (!ctx) ctx = new AudioCtx();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function whiteNoiseBuffer(audioCtx: AudioContext, duration: number, shape: (t: number) => number) {
  const size = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
  const buffer = audioCtx.createBuffer(1, size, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i++) {
    data[i] = (Math.random() * 2 - 1) * shape(i / size);
  }
  return buffer;
}

export function playPageTurn() {
  const audioCtx = getContext();
  if (!audioCtx) return;
  const now = audioCtx.currentTime;

  // The "whoosh": broadband paper noise swept through a moving bandpass
  // filter, mimicking a sheet dragging past the ear as it lifts and falls.
  const whooshDuration = 0.4;
  const whoosh = audioCtx.createBufferSource();
  whoosh.buffer = whiteNoiseBuffer(audioCtx, whooshDuration, () => 1);

  const sweep = audioCtx.createBiquadFilter();
  sweep.type = "bandpass";
  sweep.Q.value = 0.9;
  sweep.frequency.setValueAtTime(600, now);
  sweep.frequency.exponentialRampToValueAtTime(4200, now + 0.15);
  sweep.frequency.exponentialRampToValueAtTime(900, now + whooshDuration);

  const whooshGain = audioCtx.createGain();
  whooshGain.gain.setValueAtTime(0.0001, now);
  whooshGain.gain.exponentialRampToValueAtTime(0.5, now + 0.05);
  whooshGain.gain.exponentialRampToValueAtTime(0.0001, now + whooshDuration);

  whoosh.connect(sweep).connect(whooshGain).connect(audioCtx.destination);
  whoosh.start(now);
  whoosh.stop(now + whooshDuration);

  // The "flick": a brief high-frequency crackle as the page snaps down,
  // layered slightly after the whoosh starts.
  const flickDelay = 0.17;
  const flickDuration = 0.1;
  const flick = audioCtx.createBufferSource();
  flick.buffer = whiteNoiseBuffer(audioCtx, flickDuration, (t) => Math.pow(1 - t, 3));

  const flickFilter = audioCtx.createBiquadFilter();
  flickFilter.type = "highpass";
  flickFilter.frequency.value = 3200;

  const flickGain = audioCtx.createGain();
  flickGain.gain.value = 0.3;

  flick.connect(flickFilter).connect(flickGain).connect(audioCtx.destination);
  flick.start(now + flickDelay);
}
