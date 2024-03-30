import {
  innerAudioContext
} from '../../../../utils/global';
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
    phonetic: '', // 要展示的音标
    phoneticShow: true, //是否显示音标
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
      phonetic: trueData[randomNum].phonetic == undefined ? "" : trueData[randomNum].phonetic,
      phoneticShow: trueData[randomNum].phonetic == undefined ? false: true,
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
    if (randomList.indexOf(randomNum) == -1) {
      randomList.push(randomNum);
    }
    this.setData({
      word: this.data.listData[randomNum].word,
      phonetic: this.data.listData[randomNum].phonetic == undefined ? "" : this.data.listData[randomNum].phonetic,
      phoneticShow: this.data.listData[randomNum].phonetic == undefined ? false: true,
      translations: this.data.listData[randomNum].translations,
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
  }
});