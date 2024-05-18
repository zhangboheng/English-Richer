import {decodeArrayBuffer} from '../../../../utils/algorithm';
import {
  innerAudioContext
} from '../../../../utils/global';
import {
  accessTokenGet
} from '../../../../utils/api';
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    translations: [], // 翻译的集合
    inputValue: '', // 输入框的值
    word: '', // 填写正确的值
    phonetic: '', // 要展示的音标
    phoneticShow: false,
    showTips: '',
    detailTranslation: false,
    accessTokenNum: '',
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 1000
    });
  },
  onReady: function() {
    let self = this
    accessTokenGet().then(function(accessToken) {
      self.setData({
        accessTokenNum:accessToken
      })
    }).catch(function(error) {
      console.error(error);
    })
    let trueData = wx.getStorageSync('notMasterWords');
    const randomNum = Math.floor(Math.random() * trueData.length);
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      phonetic: trueData[randomNum].phonetic == undefined ? "" : trueData[randomNum].phonetic,
      translations: trueData[randomNum].translations,
      listLength: trueData.length,
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
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=' + this.data.accessTokenNum,
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
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=' + this.data.accessTokenNum,
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
      url: '../../../chatbox/index',
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
    } else {
      wx.showToast({
        title: '哎哟，不好意思，答错了！',
        icon: 'none',
        duration: 1000
      });
    }
  },
  handleNotMaster: function () {
    this.setData({
      itemName: '详情',
      showTips: `单词：${this.data.word}\n音标：${this.data.phonetic ? this.data.phonetic : ""}\n解释：${this.data.translations.map(item=>item.type + ' ' + item.translation).join('\n')}\n处理：你记住了吗？`,
      detailTranslation: true,
    });
    this.getNextWord();
  },
  // 点击掌握后删除该单词
  handleDelete: function() {
    // 从缓存中获取不会的单词
    let database = wx.getStorageSync('notMasterWords') || [];
    const word = this.data.word;
    // 从缓存中去除该单词
    let newNotMasterWords = database.filter(item => item.word != word);
    wx.setStorageSync('notMasterWords', newNotMasterWords);
    this.setData({
      listData: newNotMasterWords,
      listLength: newNotMasterWords.length,
    });
    this.getNextWord();
  },
  getNextWord: function () {
    if (this.data.listData.length == 0){
      wx.navigateBack({
        delta: 1
      });
      return;
    }
    const randomNum = Math.floor(Math.random() * this.data.listData.length);
    this.setData({
      inputValue: '', // 输入框的值
      word: this.data.listData[randomNum].word,
      phonetic: this.data.listData[randomNum].phonetic == undefined ? '' : this.data.listData[randomNum].phonetic,
      phoneticShow: false,
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
  },
  // 点击弹出提示
  handleTips() {
    wx.showToast({
      title: `提示：单词长度为${this.data.word.length}，首字母为${this.data.word[0]}`,
      icon: 'none',
      duration: 2000
    });
    this.setData({
      phoneticShow: true,
    })
  },
  // 点击关闭弹出内容
  closePopup() {
    this.setData({
      detailTranslation: false,
      showTips: '',
    });
  },
});