const innerAudioContext = wx.createInnerAudioContext();
var database = require('../../source/toelf-first');
var databaseTwo = require('../../source/toelf-second');
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 1, // 当前显示单词进度数
    word: 'hello', // 要展示的英文单词
    translations: [], // 翻译的集合
  },
  // 页面分享
  onShareAppMessage() { },
  // 页面分享朋友圈
  onShareTimeline() { },
  onLoad: function (options) {
    randomList = [];
    // 初次加载获取数据
    let trueData = database.postData.main.concat(databaseTwo.postData.main);
    // 初始为第1个单词
    const randomNum = 0;
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
  // 点击掌握后进行下一个单词
  handleMaster: function () {
    this.getNextWord();
    // 点击掌握后进度条增加
    this.setData({
      currentLength: randomList.length,
    });
  },

  getNextWord: function () {
    let randomNum = 0;
    if (randomList.length == database.postData.main.concat(databaseTwo.postData.main).length) {
      randomNum = 0;
      randomList = [];
    } else {
      randomNum = randomList.length
    }
    // 当 randomList 集合中没有随机数即放进去
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    this.setData({
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