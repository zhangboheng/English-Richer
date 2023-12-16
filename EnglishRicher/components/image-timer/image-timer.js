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
      let getClockTime = wx.getStorageSync('clockTime'); // 获取计时统计
      this.addTime(getClockTime, this.data.formattedTime)
    },

    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(remainingSeconds)}`;
    },
    // 解析时间字符串并转换为秒数
    addTime(time1, time2) {
      var time1Parts = time1.split(':');
      var time2Parts = time2.split(':');
      
      var hours1 = parseInt(time1Parts[0], 10);
      var minutes1 = parseInt(time1Parts[1], 10);
      var seconds1 = parseInt(time1Parts[2], 10);
      
      var hours2 = parseInt(time2Parts[0], 10);
      var minutes2 = parseInt(time2Parts[1], 10);
      var seconds2 = parseInt(time2Parts[2], 10);
      
      // 将时间转换为秒数
      var totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
      var totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;
      
      // 相加得到总秒数
      var totalSeconds = totalSeconds1 + totalSeconds2;
      
      // 将总秒数转换回时间格式
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;
      
      // 格式化为 HH:MM:SS 格式
      var formattedTime = this.padZero(hours) + ':' + this.padZero(minutes) + ':' + this.padZero(seconds);
      wx.setStorageSync('clockTime', formattedTime);
      return formattedTime;
    },
    padZero(number) {
      return number.toString().padStart(2, '0');
    },
  },
});