const innerAudioContext = wx.createInnerAudioContext();
Component({
  data: {
    showOrNot: true,
    word: ''
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
      this.setData({
        [key]: !this.properties.dataList[index].show,
        word: word,
      });
      this.playAudio();
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