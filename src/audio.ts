/**
 * Authentic Nigerian Web Audio Synthesizer
 * Zero external audio files — 100% procedurally synthesized via Web Audio API.
 * 
 * Instruments:
 * - Dùndún (Yoruba talking drum with exponential pitch-bend ramp)
 * - Shèkèrè (Gourd rattle simulated via shaped noise burst & bandpass filter)
 * - Agogô (Twin high-pitched metallic bells)
 * - Low Thunk (Pill gravity drop impact)
 * - Cartridge Clack (Mechanical console insert pop)
 */

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let compressor: DynamicsCompressorNode | null = null;

const MUTE_STORAGE_KEY = 'startng-whimsy-muted';

export function isAudioMuted(): boolean {
  if (typeof window === 'undefined') return true;
  return localStorage.getItem(MUTE_STORAGE_KEY) === 'true';
}

export function setAudioMuted(muted: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(MUTE_STORAGE_KEY, muted ? 'true' : 'false');
  if (masterGain && ctx) {
    masterGain.gain.setValueAtTime(muted ? 0 : 0.45, ctx.currentTime);
  }
}

function initAudio(): { ctx: AudioContext; gain: GainNode } | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    ctx = new AudioContextClass();

    compressor = ctx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-18, ctx.currentTime);
    compressor.knee.setValueAtTime(12, ctx.currentTime);
    compressor.ratio.setValueAtTime(8, ctx.currentTime);
    compressor.attack.setValueAtTime(0.003, ctx.currentTime);
    compressor.release.setValueAtTime(0.2, ctx.currentTime);

    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(isAudioMuted() ? 0 : 0.45, ctx.currentTime);

    masterGain.connect(compressor);
    compressor.connect(ctx.destination);
  }

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  return { ctx, gain: masterGain! };
}

/**
 * Synthesizes a Dùndún (Yoruba talking drum strike with pitch bend)
 * @param startFreq Starting pitch in Hz (e.g. 210Hz)
 * @param endFreq Squeeze/bend target in Hz (e.g. 140Hz downwards, or 280Hz rising)
 * @param duration Hit duration in seconds
 */
export function playDundun(startFreq = 220, endFreq = 145, duration = 0.3): void {
  if (isAudioMuted()) return;
  const audio = initAudio();
  if (!audio) return;
  const { ctx, gain: master } = audio;
  const t = ctx.currentTime;

  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(startFreq, t);
  osc.frequency.exponentialRampToValueAtTime(Math.max(endFreq, 30), t + duration);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(650, t);
  filter.frequency.exponentialRampToValueAtTime(180, t + duration);

  oscGain.gain.setValueAtTime(0.001, t);
  oscGain.gain.linearRampToValueAtTime(0.7, t + 0.015);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t + duration);

  osc.connect(filter);
  filter.connect(oscGain);
  oscGain.connect(master);

  osc.start(t);
  osc.stop(t + duration);
}

/**
 * Synthesizes a Shèkèrè shake (beaded gourd rattle noise burst)
 */
export function playShekere(): void {
  if (isAudioMuted()) return;
  const audio = initAudio();
  if (!audio) return;
  const { ctx, gain: master } = audio;
  const t = ctx.currentTime;

  const bufferSize = Math.floor(ctx.sampleRate * 0.07);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.setValueAtTime(3200, t);
  bandpass.Q.setValueAtTime(3.5, t);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.35, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.065);

  noise.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(master);

  noise.start(t);
  noise.stop(t + 0.07);
}

/**
 * Synthesizes an Agogô bell strike
 * @param high High bell tone (880Hz) or low bell tone (587Hz)
 */
export function playAgogo(high = false): void {
  if (isAudioMuted()) return;
  const audio = initAudio();
  if (!audio) return;
  const { ctx, gain: master } = audio;
  const t = ctx.currentTime;

  const baseFreq = high ? 880 : 587.33; // A5 or D5
  const osc = ctx.createOscillator();
  const overtone = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(baseFreq, t);

  overtone.type = 'sine';
  overtone.frequency.setValueAtTime(baseFreq * 2.76, t); // Metallic non-harmonic overtone

  gain.gain.setValueAtTime(0.4, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

  osc.connect(gain);
  overtone.connect(gain);
  gain.connect(master);

  osc.start(t);
  overtone.start(t);
  osc.stop(t + 0.35);
  overtone.stop(t + 0.35);
}

/**
 * Dull gravity thunk when a wrong answer pill falls off the screen
 */
export function playThunk(): void {
  if (isAudioMuted()) return;
  const audio = initAudio();
  if (!audio) return;
  const { ctx, gain: master } = audio;
  const t = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(95, t);
  osc.frequency.exponentialRampToValueAtTime(32, t + 0.14);

  gain.gain.setValueAtTime(0.5, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

  osc.connect(gain);
  gain.connect(master);

  osc.start(t);
  osc.stop(t + 0.15);
}

/**
 * Mechanical cartridge insert "clack" + console power thump
 */
export function playCartridgeInsert(): void {
  if (isAudioMuted()) return;
  playThunk();
  setTimeout(() => playShekere(), 50);
  setTimeout(() => playDundun(320, 180, 0.2), 110);
}

/**
 * Celebration victory fanfare
 */
export function playVictory(): void {
  if (isAudioMuted()) return;
  playAgogo(false);
  setTimeout(() => playAgogo(true), 120);
  setTimeout(() => playDundun(180, 290, 0.22), 240);
  setTimeout(() => playShekere(), 340);
}
