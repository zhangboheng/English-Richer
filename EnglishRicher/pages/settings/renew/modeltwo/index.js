const innerAudioContext = wx.createInnerAudioContext();
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 1, // 当前显示单词进度数
    translations: [], // 翻译的集合
    inputValue: '', // 输入框的值
    word: '', // 填写正确的值
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    randomList = [];
    let trueData = wx.getStorageSync('notMasterWords');
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * trueData.length);
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      translations: trueData[randomNum].translations,
      listLength: trueData.length,
    });
  },
  onReady: function() {
    this.setData({
      currentLength: randomList.length
    });
  },
  // 输入框的值
  onInput(event) {
    this.setData({
      inputValue: event.detail.value
    });
  },
  // 点击确认后进行下一个单词
  handleMaster: function () {
    let getInputWord = this.data.inputValue.toLowerCase().trim();
    if (getInputWord == this.data.word.toLowerCase()) {
      wx.showToast({
        title: '哎哟，不错哦，答对了！',
        icon: 'none',
        duration: 1000
      });
      this.getNextWord();
      // 点击掌握后进度条增加
      this.setData({
        currentLength: randomList.length,
      });
    } else {
      wx.showToast({
        title: '哎哟，不好意思，答错了！',
        icon: 'none',
        duration: 1000
      });
    }
  },

  handleNotMaster: function () {
    wx.showToast({
      title: `正确答案是${this.data.word}！`,
      icon: 'none',
      duration: 2000
    });
    this.getNextWord();
  },

  getNextWord: function () {
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * this.data.listData.length);
    // 当 randomList 集合中没有随机数即放进去
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    this.setData({
      inputValue: '', // 输入框的值
      word: this.data.listData[randomNum].word,
      currentLength: randomList.length,
      translations: this.data.listData[randomNum].translations,
    });
  },
  // 语音播放
  playAudio() {
    let speak = [`https://dict.youdao.com/dictvoice?type=0&audio=${this.data.word}`, `https://dds.dui.ai/runtime/v1/synthesize?voiceId=lucyfa&text=${this.data.word}&speed=1&volume=50&audioType=mp3`][Math.floor(Math.random() * 2)];
    innerAudioContext.src = speak;
    innerAudioContext.play();
  },
  // 点击弹出提示
  handleTips() {
    wx.showToast({
      title: `提示：单词长度为${this.data.word.length}，首字母为${this.data.word[0]}`,
      icon: 'none',
      duration: 2000
    }); 
  }
});