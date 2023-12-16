let timerId = null;

Component({
  properties: {
    imageUrl: {
      type: String,
      value: '',
    },
  },

  data: {
    startTime: 0,
    formattedTime: '00:00:00',
  },

  lifetimes: {
    attached() {
      this.startTimer();
    },
    detached() {
      this.stopTimer();
    },
  },

  methods: {
    startTimer() {
      this.setData({ startTime: Date.now() });
      timerId = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - this.data.startTime) / 1000);
        const formattedTime = this.formatTime(elapsedTime);
        this.setData({ formattedTime });
      }, 1000);
    },

    stopTimer() {
      clearInterval(timerId);
      timerId = null;
    },

    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
    },

    padZero(number) {
      return number.toString().padStart(2, '0');
    },
  },
});