var database = require('./source/postgraduate');
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    word: 'hello',  // 要展示的英文单词
    translations: [], // 翻译的集合
    translationShow: false, // 是否显示翻译
    showAnimation: false, // 显示悬浮动画
    showGrade: '考研'
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
    const randomNum = Math.floor(Math.random() * 1991);
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      translations: trueData[randomNum].translations,
      showGrade: defaultLevel
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
    this.getNextWord();
  },

  handleNotMaster: function() {
    // 将单词缓存到本地数据
    let notMasterWords = wx.getStorageSync('notMasterWords') || [];
    // 如果缓存内没有则可以放置
    if (notMasterWords.map(x=>x.word).indexOf(this.data.word)==-1) {
      notMasterWords.push({word:this.data.word, translations:this.data.translations});
    }
    wx.setStorageSync('notMasterWords', notMasterWords);
    this.getNextWord();
  },

  getNextWord: function() {
    // 生成0到1990之间的随机数
    const randomNum = Math.floor(Math.random() * 1991);
    this.setData({
      translationShow: false,
      word: this.data.listData[randomNum].word,
      translations: this.data.listData[randomNum].translations
    });
  }
});