import {addMissingNumber,findLongestArray,decodeArrayBuffer} from '../../../utils/algorithm'
import {
  innerAudioContext
} from '../../../utils/global';
var database = require('./source/toelf-third');
var databaseTwo = require('./source/toelf-fourth');
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
    showGrade: '托福(下)',
    showTips: '',
    detailTranslation: false
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    midArray = findLongestArray(wx.getStorageSync('toelfTwoList'),'toelfTwoList', wx.getStorageSync('toelfTwoTwoList'), 'toelfTwoTwoList', wx.getStorageSync('toelfTwoThreeList'), 'toelfTwoThreeList');
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 500
    });
  },
  onReady: function() {
    let trueData = database.postData.main.concat(databaseTwo.postData.main);
    const randomNum = Math.floor(Math.random() * trueData.length);
    randomList = midArray[0]
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      phonetic: trueData[randomNum].phonetic == undefined ? "" : trueData[randomNum].phonetic,
      phoneticShow: trueData[randomNum].phonetic == undefined ? false: true,
      translations: trueData[randomNum].translations,
      showGrade: '托福(下)',
      listLength: trueData.length,
      currentLength: randomList.length
    });
  },
  // AI 建议
  onRememberClicked: function(event) {
    let self = this;
    if (event.detail.message == 'clicked') {
      self.setData({
        itemName: '学习建议',
        showTips: 'AI 思考中……',
        detailTranslation: true,
      });
    const requestTask = wx.request({
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397',
        responseType: "arraybuffer",
        method: 'POST',
        enableChunked: true,
        header: {
          'Content-Type': 'application/json' // 设置请求头为JSON格式
        },
        data: {
          messages: [{
            role: 'user',
            content: `用关联记忆直接写出如何更好记住单词或者词组:${this.data.word}`
          }],
          "top_p": 1,
          "stream": true,
        },
        success: function (res) {
        },
        fail: function (error) {
          wx.hideLoading();
          self.setData({
            itemName: '详情',
            showTips: `AI 傲娇了一下，请稍后再试，或者检查一下网络链接`,
            detailTranslation: true,
          });
        }
      });
      requestTask.onHeadersReceived(function (r) {
        self.setData({
          showTips: '',
        });
      });
      requestTask.onChunkReceived(function (r) {
        if (!self.data.detailTranslation) {
          return;
        }
        let parseString = decodeArrayBuffer(r.data, 'utf-8').split('\n\n');
        for (let i of parseString){
          try {
            const resultValue = JSON.parse(i.slice(5)).result;
            self.data.showTips += resultValue;
            self.setData({
              showTips: self.data.showTips.replaceAll('AI 思考中……', ''),
            });
          } catch (e) {
            self.data.showTips += 'AI 思考中……';
          }
        }
      });
    }
  },
  // AI 详解
  onImageClicked: function (event) {
    let self = this;
    if (event.detail.message == 'clicked') {
      self.setData({
        itemName: 'AI 详解',
        showTips: 'AI 思考中……',
        detailTranslation: true,
      });
      const requestTask = wx.request({
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397',
        responseType: "arraybuffer",
        method: 'POST',
        enableChunked: true,
        header: {
          'Content-Type': 'application/json' // 设置请求头为JSON格式
        },
        data: {
          messages: [{
            role: 'user',
            content: `${this.data.word}, 先给出该英文单词的英文解释，再给出它的中文翻译，再列出三个由它组成的句子和翻译，再列出它的五个以内的同义词和反义词`
          }],
          "top_p": 1,
          "stream": true,
        },
        success: function (res) {},
        fail: function (error) {
          wx.hideLoading();
          self.setData({
            itemName: '详情',
            showTips: `AI 傲娇了一下，请稍后再试，或者检查一下网络链接`,
            detailTranslation: true,
          });
        }
      });
      requestTask.onHeadersReceived(function (r) {
        self.setData({
          showTips: '',
        });
      });
      requestTask.onChunkReceived(function (r) {
        if (!self.data.detailTranslation) {
          return;
        }
        let parseString = decodeArrayBuffer(r.data, 'utf-8').split('\n\n');
        for (let i of parseString){
          try {
            const resultValue = JSON.parse(i.slice(5)).result;
            self.data.showTips += resultValue;
            self.setData({
              showTips: self.data.showTips.replaceAll('AI 思考中……', ''),
            });
          } catch (e) {
            self.data.showTips += 'AI 思考中……';
          }
        }
      });
    }
  },
  // AI 畅聊室
  onChatRoomClicked: function(event) {
    wx.navigateTo({
      url: '../../chatbox/index',
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
      showTips: '',
    });
  },
});