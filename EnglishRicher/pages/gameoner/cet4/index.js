import {addMissingNumber,findLongestArray} from '../../../utils/algorithm'
import {
  innerAudioContext
} from '../../../utils/global';
var database = require('./source/cet4');
var midArray = '';
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 0, // 当前显示单词进度数
    word: 'hello',  // 要展示的英文单词
    phonetic: '', // 要展示的音标
    phoneticShow: true, //是否显示音标
    translations: [], // 翻译的集合
    translationShow: false, // 是否显示翻译
    showAnimation: false, // 显示悬浮动画
    showGrade: '大学英语四级',
    detailTranslation: false
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    midArray = findLongestArray(wx.getStorageSync('cet4List'),'cet4List', wx.getStorageSync('cet4TwoList'), 'cet4TwoList', wx.getStorageSync('cet4ThreeList'), 'cet4ThreeList');
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 500
    });
  },
  onReady: function() {
    // 初次加载获取数据
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let trueData = database.postData.main;
    const randomNum = Math.floor(Math.random() * trueData.length);
    randomList = midArray[0]
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      phonetic: trueData[randomNum].phonetic == undefined ? "" : trueData[randomNum].phonetic,
      phoneticShow: trueData[randomNum].phonetic == undefined ? false: true,
      translations: trueData[randomNum].translations,
      showGrade: defaultLevel,
      listLength: trueData.length,
      currentLength: randomList.length
    });
  },
  // 显示翻译的动作
  showExplanation: function() {
    this.setData({
      translationShow: !this.data.translationShow, // 是否显示翻译
    });
    this.playAudio();
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
    wx.setStorageSync(midArray[1], randomList);
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
        phonetic: this.data.phonetic ? this.data.phonetic : "",
        translations: this.data.translations
      });
    }
    wx.setStorageSync('notMasterWords', notMasterWords);
    this.setData({
      itemName: '详情',
      showTips: `单词：${this.data.word}\n音标：${this.data.phonetic ? this.data.phonetic : ""}\n解释：${this.data.translations.map(item=>item.type + ' ' + item.translation).join('\n')}\n处理：已经加入到温故知新`,
      detailTranslation: true,
    });
    this.getNextWord(false);
  },

  getNextWord: function(_info = true) {
    let randomNum = 0;
    let condition = addMissingNumber(randomList, this.data.listData.length, _info);
    if (!condition){
      randomNum = Math.floor(Math.random() * this.data.listData.length)
    }else{
      randomNum = condition
    }
    this.setData({
      translationShow: false,
      word: this.data.listData[randomNum].word,
      phonetic: this.data.listData[randomNum].phonetic == undefined ? '' : this.data.listData[randomNum].phonetic,
      phoneticShow: this.data.listData[randomNum].phonetic == undefined ? false: true,
      translations: this.data.listData[randomNum].translations
    });
  },
  // 语音播放
  playAudio() {
    let trueWord = this.data.word.indexOf(' ') > -1 ? this.data.word.replaceAll(' ', '-') : this.data.word;
    wx.request({
      url: `https://dict-co.iciba.com/api/dictionary.php?key=AA6C7429C3884C9E766C51187BD1D86F&type=json&w=${trueWord}`,
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.statusCode === 200) {
          let speak = null;
          if (res.data.symbols[0].ph_en_mp3.length > 0) {
            speak = res.data.symbols[0].ph_en_mp3
          }else if(res.data.symbols[0].ph_tts_mp3.length > 0){
            speak = res.data.symbols[0].ph_tts_mp3;
          }else{
            speak = `https://dict.youdao.com/dictvoice?type=0&audio=${trueWord}`;
          }
          innerAudioContext.src = speak;
          innerAudioContext.play();
        } else {
          // 处理错误情况
          let speak = `https://dict.youdao.com/dictvoice?type=0&audio=${trueWord}`;
          innerAudioContext.src = speak;
          innerAudioContext.play();
        }
      },
      fail(error) {
        // 处理错误情况
        let speak = `https://dict.youdao.com/dictvoice?type=0&audio=${trueWord}`;
        innerAudioContext.src = speak;
        innerAudioContext.play();
      }
    });
  },
  // 点击关闭弹出内容
  closePopup() {
    this.setData({
      detailTranslation: false,
    });
  },
});