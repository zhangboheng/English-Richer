import {findLongestArray} from '../../../utils/algorithm'
const innerAudioContext = wx.createInnerAudioContext();
var database = require('./source/junior');
var midArray = '';
var randomList = [];
// 在对应页面的 js 文件中
Page({
  data: {
    listData: [], // 刷单词所有的词库
    listLength: 0, // 单词所有词库
    currentLength: 0, // 当前显示单词进度数
    translations: [], // 翻译的集合
    word: '', // 填写正确的值
    phonetic: '', // 音标
    showAnimation: false, // 显示悬浮动画
    showGrade: '初中'
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    midArray = findLongestArray(wx.getStorageSync('juniorList'),'juniorList', wx.getStorageSync('juniorTwoList'), 'juniorTwoList', wx.getStorageSync('juniorThreeList'), 'juniorThreeList');
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 500
    });
  },
  onReady: function () {
    // 初次加载获取数据
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let trueData = database.postData.main;
    let sortData = [...trueData.map(x => x.word)];
    // 选出四个随机单词
    const randomElements = this.getRandomElements(sortData, 4);
    const randomOneToFour = Math.floor(Math.random() * 4);
    const randomNum = trueData.map(x => x.word).indexOf(randomElements[randomOneToFour]);
    randomList = midArray[0]
    // 赋值给本轮列表
    this.setData({
      listData: trueData,
      word: trueData[randomNum].word,
      phonetic: trueData[randomNum].phonetic,
      selectA: randomElements[0],
      selectB: randomElements[1],
      selectC: randomElements[2],
      selectD: randomElements[3],
      translations: trueData[randomNum].translations,
      showGrade: defaultLevel,
      listLength: trueData.length,
      currentLength: randomList.length
    });
  },
  // 点击选项后进入下一个单词，正确下一个，错误下一个并放入温故知新
  selectOption(event) {
    const selectedOption = event.currentTarget.dataset.option;
    if (selectedOption == this.data.word) {
      // 掌握一个增加1分钱
      let money = wx.getStorageSync('money');
      money = money + 0.01;
      wx.setStorageSync('money', Number(money.toFixed(2)));
      // 掌握一个增加1经验值
      let getProgress = wx.getStorageSync('progress') || 0;
      getProgress = getProgress + 0.1;
      wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
      wx.setStorageSync('startGrade', Math.floor(getProgress / 100));
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
      wx.showToast({
        title: '哎哟，不错哦，答对了！',
        icon: 'none',
        duration: 1000
      });
      try {
        this.playAudio();
        this.getNextWord();
      } catch(e) {
        this.getNextWord();
      }
      wx.setStorageSync(midArray[1], randomList);
      // 点击掌握后进度条增加
      this.setData({
        currentLength: randomList.length,
      });
    } else {
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
          phonetic: this.data.phonetic,
          translations: this.data.translations
        });
      }
      wx.setStorageSync('notMasterWords', notMasterWords);
      wx.showToast({
        title: `啊哦，正解是${this.data.word}，放入了温故知新`,
        icon: 'none',
        duration: 4000
      });
      try {
        this.playAudio();
        this.getNextWord(false);
      } catch(e) {
        this.getNextWord(false);
      }
    }
  },
  // 获取下一个单词
  getNextWord: function (_info = true) {
    let trueData = this.data.listData;
    let sortData = [...trueData.map(x => x.word)];
    let filteredSortData = [];
    // 选出四个随机单词
    if (randomList.length == trueData.length) {
      filteredSortData = sortData;
    }else{
      // 移除 randomList 中已经包含的单词
      filteredSortData = sortData.filter((_, index) => !randomList.includes(index));
    }
    const randomElements = this.getRandomElements(filteredSortData, 4);
    const randomOneToFour = Math.floor(Math.random() * 4);
    const randomNum = trueData.map(x => x.word).indexOf(randomElements[randomOneToFour]);
    if (randomList.indexOf(randomNum) == -1 && _info) {
      randomList.push(randomNum);
    }
    this.setData({
      word: this.data.listData[randomNum].word,
      phonetic: this.data.listData[randomNum].phonetic,
      selectA: randomElements[0],
      selectB: randomElements[1],
      selectC: randomElements[2],
      selectD: randomElements[3],
      translations: this.data.listData[randomNum].translations,
    });
  },
  // 获取随机四个不同元素的公共方法
  getRandomElements: function (collection, count) {
    const shuffled = collection.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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