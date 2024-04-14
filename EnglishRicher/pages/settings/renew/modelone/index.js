import {
  innerAudioContext
} from '../../../../utils/global';
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 1, // 当前显示单词进度数
    word: 'hello', // 要展示的英文单词
    phonetic: '', // 要展示的音标
    phoneticShow: true, //是否显示音标
    translations: [], // 翻译的集合
    translationShow: false, // 是否显示翻译
    detailTranslation: false
  },
  // 页面分享
  onShareAppMessage() { },
  // 页面分享朋友圈
  onShareTimeline() { },
  onLoad: function (options) {
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 1000
    });
  },
  onReady: function () {
    // 初次加载获取数据
    let trueData = wx.getStorageSync('notMasterWords');
    const randomNum = Math.floor(Math.random() * trueData.length);
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
  // AI 建议
  onRememberClicked: function(event) {
    let self = this;
    if (event.detail.message == 'clicked') {
      wx.showLoading({
        title: 'AI生成中...',
        mask: true
      });
      wx.request({
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397',
        method: 'POST',
        header: {
          'Content-Type': 'application/json' // 设置请求头为JSON格式
        },
        data: {
          messages: [{
            role: 'user',
            content: `用关联记忆直接写出如何更好记住单词或者词组:${this.data.word}`
          }],
          "top_p": 1
        },
        success: function (res) {
          wx.hideLoading();
          self.setData({
            itemName: '学习建议',
            showTips: `${res.data.result}`,
            detailTranslation: true,
          });
        },
        fail: function (error) {
          wx.hideLoading();
          self.setData({
            itemName: '详情',
            showTips: `AI 傲娇了一下，请稍后再试`,
            detailTranslation: true,
          });
        }
      });
    }
  },
  // AI 详解
  onImageClicked: function (event) {
    let self = this;
    if (event.detail.message == 'clicked') {
      wx.showLoading({
        title: 'AI生成中...',
        mask: true
      });
      wx.request({
        url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397',
        method: 'POST',
        header: {
          'Content-Type': 'application/json' // 设置请求头为JSON格式
        },
        data: {
          messages: [{
            role: 'user',
            content: `${this.data.word}, 先给出该英文单词的英文解释，再给出它的中文翻译，再列出三个由它组成的句子和翻译，再列出它的五个以内的同义词和反义词`
          }],
          "top_p": 1
        },
        success: function (res) {
          wx.hideLoading();
          self.setData({
            itemName: '详情',
            showTips: `单词：${self.data.word}\n音标：${self.data.phonetic ? self.data.phonetic : ""}\n解释：\n\n${res.data.result}`,
            detailTranslation: true,
          });
        },
        fail: function (error) {
          wx.hideLoading();
          self.setData({
            itemName: '详情',
            showTips: `AI 傲娇了一下，请稍后再试`,
            detailTranslation: true,
          });
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
  showExplanation: function () {
    this.setData({
      translationShow: !this.data.translationShow, // 是否显示翻译
    });
    this.playAudio();
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
  // 点击掌握后进行下一个单词
  handleMaster: function () {
    this.getNextWord();
  },
  // 获取下一个的方法 
  getNextWord: function () {
    if (this.data.listData.length == 0){
      wx.navigateBack({
        delta: 1
      });
      return;
    }
    const randomNum = Math.floor(Math.random() * this.data.listData.length);
    this.setData({
      translationShow: false,
      word: this.data.listData[randomNum].word,
      phonetic: this.data.listData[randomNum].phonetic == undefined ? '' : this.data.listData[randomNum].phonetic,
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
  },
  // 点击关闭弹出内容
  closePopup() {
    this.setData({
      detailTranslation: false,
    });
  },
});