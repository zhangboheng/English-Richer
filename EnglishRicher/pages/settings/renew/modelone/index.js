const innerAudioContext = wx.createInnerAudioContext();
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 1, // 当前显示单词进度数
    word: 'hello', // 要展示的英文单词
    translations: [], // 翻译的集合
    translationShow: false, // 是否显示翻译
  },
  // 页面分享
  onShareAppMessage() { },
  // 页面分享朋友圈
  onShareTimeline() { },
  onLoad: function (options) {
    randomList = [];
    // 初次加载获取数据
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
  onReady: function () {
    this.setData({
      currentLength: randomList.length
    });
  },
  // 显示翻译的动作
  showExplanation: function () {
    this.setData({
      translationShow: !this.data.translationShow, // 是否显示翻译
    });
  },
  // 点击掌握后进行下一个单词
  handleMaster: function () {
    this.getNextWord();
    // 点击掌握后进度条增加
    this.setData({
      currentLength: randomList.length,
    });
  },

  getNextWord: function () {
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * this.data.listData.length);
    // 当 randomList 集合中没有随机数即放进去
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    this.setData({
      translationShow: false,
      word: this.data.listData[randomNum].word,
      translations: this.data.listData[randomNum].translations,
    });
  },
  // 语音播放
  playAudio() {
    let speak = [`https://dict.youdao.com/dictvoice?type=0&audio=${this.data.word}`, `https://dds.dui.ai/runtime/v1/synthesize?voiceId=lucyfa&text=${this.data.word}&speed=1&volume=100&audioType=mp3`][Math.floor(Math.random() * 2)];
    innerAudioContext.src = speak;
    innerAudioContext.play();
  }
});