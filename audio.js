// Enhanced Kid-Friendly Sound Synthesizer using Web Audio API
class SoundManager {
    constructor() {
        this.ctx = null;
        this.sfxEnabled = true;
        this.bgmEnabled = false;
        this.isPlayingBgm = false;
        this.bgmTimer = null;
    }

    initAudioContext() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
    }

    ensureContext() {
        this.initAudioContext();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playPop() {
        if (!this.sfxEnabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playSlice() {
        if (!this.sfxEnabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.06);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.06);
    }

    playCorrect() {
        if (!this.sfxEnabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, index) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;

            const startTime = this.ctx.currentTime + index * 0.07;
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.22);
        });
    }

    playWrong() {
        if (!this.sfxEnabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(240, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.22);

        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.22);
    }

    playFanfare() {
        if (!this.sfxEnabled) return;
        this.ensureContext();
        if (!this.ctx) return;

        const melody = [
            { f: 523.25, t: 0.0, d: 0.12 }, // C5
            { f: 659.25, t: 0.12, d: 0.12 }, // E5
            { f: 783.99, t: 0.24, d: 0.12 }, // G5
            { f: 1046.50, t: 0.36, d: 0.3 }, // C6
            { f: 880.00, t: 0.52, d: 0.15 }, // A5
            { f: 1046.50, t: 0.70, d: 0.45 } // C6
        ];

        melody.forEach(n => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = n.f;

            const st = this.ctx.currentTime + n.t;
            gain.gain.setValueAtTime(0.25, st);
            gain.gain.exponentialRampToValueAtTime(0.001, st + n.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(st);
            osc.stop(st + n.d);
        });
    }

    toggleBgm() {
        this.ensureContext();
        this.bgmEnabled = !this.bgmEnabled;
        if (this.bgmEnabled) {
            this.startBgm();
        } else {
            this.stopBgm();
        }
        return this.bgmEnabled;
    }

    startBgm() {
        if (!this.ctx || this.isPlayingBgm) return;
        this.isPlayingBgm = true;

        const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 349.23, 329.63];
        let noteIndex = 0;

        const playTick = () => {
            if (!this.bgmEnabled || !this.isPlayingBgm) return;

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = notes[noteIndex % notes.length];
            noteIndex++;

            gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.9);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.9);

            this.bgmTimer = setTimeout(playTick, 700);
        };

        playTick();
    }

    stopBgm() {
        this.isPlayingBgm = false;
        if (this.bgmTimer) {
            clearTimeout(this.bgmTimer);
        }
    }
}

window.soundManager = new SoundManager();
