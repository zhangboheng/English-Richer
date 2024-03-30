import {
  innerAudioContext
} from '../../utils/global';
Component({
  data: {
    showOrNot: true,
    count: 0,
    word: '',
    phonetic: '',
    translations: '',
  },
  properties: {
    dataList: {
      type: Array,
      value: []
    },
  },
  methods: {
    toggleAccordion: function (e) {
      const index = e.currentTarget.dataset.index;
      const key = `dataList[${index}].show`;
      const word = this.properties.dataList[index].word;
      const phonetic = this.properties.dataList[index].phonetic;
      const translations = this.properties.dataList[index].translations;
      this.setData({
        [key]: !this.properties.dataList[index].show,
        word: word,
        phonetic: phonetic,
        translations: translations
      });
      this.playAudio();
    },
    handleNotMaster: function () {
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
      // 显示正在刷新提示框
      wx.showToast({
        title: '已经加入到温故知新',
        duration: 1000
      });
    },
    // 对列表进行排序
    resortList: function() {
      this.data.count++
      this.setData({
        count: this.data.count
      });
      if (this.data.count == 2){
        this.setData({
          count: 0
        });
      }
      let param = this.data.count;
      this.triggerEvent('orderList', {
        param
      });
    },
    // 侦测滚动事件回到顶部
    scrollToTop: function () {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
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
  }
});