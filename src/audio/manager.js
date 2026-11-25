// src/audio/manager.js
// Master volume, mute, channel.

export class AudioManager {
  constructor() {
    this.volume = 1;
    this.muted = false;
  }

  play(sound) {
    if (this.muted) return;
    // Put suara
  }

  setVolume(v) {
    this.volume = v;
  }

  mute() {
    this.muted = true;
  }

  unmute() {
    this.muted = false;
  }
}

export const audio = new AudioManager();
