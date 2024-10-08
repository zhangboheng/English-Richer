import {
  innerAudioContext
} from '../../utils/global';
Component({
  data: {
    showOrNot: true,
    showPopupButtons: false,
    count: 0,
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
    // 删除该条目
    removeWord: function (e) {
      const delWord = e.currentTarget.dataset.id;
      this.triggerEvent('removeWord', delWord);
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
    // 跳出或者隐藏复习按钮
    popupMenu: function () {
      this.setData({
        showPopupButtons: !this.data.showPopupButtons
      })
    },
    // 点击跳转到复习模式一
    goToReviewOne: function () {
      this.popupPublic(1, "复习模式一")
    },
    // 点击跳转到复习模式二
    goToReviewTwo: function () {
      this.popupPublic(1, "复习模式二")
    },
    // 点击跳转到随机复习模式
    goToRandomReview() {
      let randomNum = Math.floor(Math.random() * 2);
      let url = ['../../settings/renew/modelone/index', '../../settings/renew/modeltwo/index'][randomNum];
      this.triggerEvent('chooseOneOrTwo', {
        url
      });
    },
    // 提示公共方法
    popupPublic(_publicPrice, _publicTitle) {
      // 从缓存中获取数据
      let money = wx.getStorageSync('money');
      wx.showModal({
        title: '兑换提示',
        content: `确定要用${_publicPrice}钱币开启${_publicTitle}？`,
        showCancel: true,
        cancelText: '取消',
        confirmText: '确定',
        success: function (res) {
          if (res.confirm) {
            // 用户点击了确定按钮
            if (money >= _publicPrice) {
              if (_publicTitle == "复习模式一") {
                // 将剩余钱币数量存储到缓存中
                wx.setStorageSync('money', Number((money - _publicPrice).toFixed(2)));
                wx.navigateTo({
                  url: '../../settings/renew/modelone/index',
                });
              } else if (_publicTitle == "复习模式二") {
                wx.setStorageSync('money', Number((money - _publicPrice).toFixed(2)));
                wx.navigateTo({
                  url: '../../settings/renew/modeltwo/index',
                });
              }
            } else {
              wx.showToast({
                title: '钱币不足，攒够再来～～',
                icon: 'none',
                duration: 2000
              });
            }
          } else if (res.cancel) {
            // 用户点击了取消按钮
            console.log('用户点击取消');
          }
        }
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
            } else if (res.data.symbols[0].ph_tts_mp3.length > 0) {
              speak = res.data.symbols[0].ph_tts_mp3;
            } else {
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
  }
});