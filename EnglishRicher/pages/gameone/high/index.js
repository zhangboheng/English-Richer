const innerAudioContext = wx.createInnerAudioContext();
var database = require('./source/high');
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 1, // 当前显示单词进度数
    word: 'hello',  // 要展示的英文单词
    translations: [], // 翻译的集合
    translationShow: false, // 是否显示翻译
    showAnimation: false, // 显示悬浮动画
    showGrade: '高中'
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    // 初次加载获取数据
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let trueData = database.postData.main;
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * trueData.length);
    // 当 randomList 集合中没有随机数即放进去
    randomList = wx.getStorageSync('highList')
    if (typeof randomList == 'string') {
      randomList = [];
      wx.setStorageSync('highList', [])
    }
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      translations: trueData[randomNum].translations,
      showGrade: defaultLevel,
      listLength: trueData.length,
    });
  },
  onReady: function() {
    this.setData({
      currentLength: randomList.length
    });
  },
  // 显示翻译的动作
  showExplanation: function() {
    this.setData({
      translationShow: !this.data.translationShow, // 是否显示翻译
    });
  },
  // 点击掌握后进行下一个单词
  handleMaster: function() {
    // 掌握一个增加1分钱
    let money = wx.getStorageSync('money');
    money = money + 0.01;
    wx.setStorageSync('money', Number(money.toFixed(2)));
    // 掌握一个增加1经验值
    let getProgress = wx.getStorageSync('progress') || 0;
    getProgress = getProgress + 0.1;
    wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
    wx.setStorageSync('startGrade', Math.floor(getProgress/100));
    // 显示增加分数的悬浮动画
    this.setData({
      showAnimation: true,
    });
    const that = this;
    setTimeout(function () {
      that.setData({
        showAnimation: false,
      });
    }, 1000);
    wx.setStorageSync('highList', randomList);
    this.getNextWord();
    // 点击掌握后进度条增加
    this.setData({
      currentLength: randomList.length, // 是否显示翻译
    });
  },

  handleNotMaster: function() {
    // 将单词缓存到本地数据
    let notMasterWords = wx.getStorageSync('notMasterWords') || [];
    let limitNumber = 100;
    // 从缓存获取解限卡是否获得
    let getNoLimitCard = wx.getStorageSync('getNoLimitCard');
    if (getNoLimitCard == 1) {
        limitNumber = 2000;
    }
    // 如果缓存内没有则可以放置
    if (notMasterWords.map(x => x.word).indexOf(this.data.word) == -1 && notMasterWords.length < limitNumber) {
      notMasterWords.push({
        word: this.data.word,
        translations: this.data.translations
      });
    }
    wx.setStorageSync('notMasterWords', notMasterWords);
    // 重新赋值给随机数字集合
    randomList = randomList.slice(0, -1);
    wx.setStorageSync('highList', randomList);
    this.getNextWord();
  },

  getNextWord: function() {
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * this.data.listData.length);
    // 当 randomList 集合中没有随机数即放进去
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    this.setData({
      translationShow: false,
      word: this.data.listData[randomNum].word,
      translations: this.data.listData[randomNum].translations
    });
  },
  // 语音播放
  playAudio() {
    let speak = [`https://dict.youdao.com/dictvoice?type=0&audio=${this.data.word}`, `https://dds.dui.ai/runtime/v1/synthesize?voiceId=lucyfa&text=${this.data.word}&speed=1&volume=100&audioType=mp3`][Math.floor(Math.random() * 2)];
    innerAudioContext.src = speak;
    innerAudioContext.play();
  }
});