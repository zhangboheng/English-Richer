let videoAd = null
Component({
  data: {
    showOrNot: true,
    showPopupButtons: false
  },
  properties: {
    dataList: {
      type: Array,
      value: []
    },
  },
  lifetimes: {
    created() {
      // 在页面onLoad回调事件中创建激励视频广告实例
      if (wx.createRewardedVideoAd) {
        videoAd = wx.createRewardedVideoAd({
          adUnitId: 'adunit-67cd6ef4b3dd9519'
        })
        videoAd.onLoad(() => {
          console.log('激励视频 广告加载成功')
        })
        videoAd.onError((err) => {
          console.error('激励视频光告加载失败', err)
        });
      }
    }
  },
  methods: {
    toggleAccordion: function (e) {
      const index = e.currentTarget.dataset.index;
      const key = `dataList[${index}].show`
      this.setData({
        [key]: !this.properties.dataList[index].show
      });
    },
    // 删除该条目
    removeWord: function (e) {
      const delWord = e.currentTarget.dataset.id;
      this.triggerEvent('removeWord', delWord);
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
    goToRandomReview: function() {
      if (videoAd) {
        videoAd.show().catch(() => {
          videoAd.load()
            .then(() => videoAd.show())
            .catch(err => {
              console.error('激励视频 广告显示失败', err)
            })
        });
        videoAd.onClose((res) => {
          if (res && res.isEnded) {
            let randomNum = Math.floor(Math.random() * 2);
            let url = ['../../settings/renew/modelone/index', '../../settings/renew/modeltwo/index'];
            wx.navigateTo({
              url: url[randomNum],
            });
          } else {
            // 播放中途退出，不下发游戏奖励
            wx.showToast({
              title: '由于没有看完，无法进入复习',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
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
  }
});