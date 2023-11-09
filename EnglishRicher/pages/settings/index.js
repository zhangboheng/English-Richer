Page({
  data: {
    username: '佚名',
    getShowOrNot: false
  },
  onLoad: function () {
    // 从缓存中获取昵称数据
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    if (nickname.length > 0) {
      this.setData({
        username: nickname
      })
    } else {
      this.setData({
        username: '佚名',
      })
    }
  },
  // 点击后弹出修改昵称框
  editNickName() {
    this.setData({
      getShowOrNot: true
    })
  },
  // 点击确定后修改昵称
  handleConfirm: function (event) {
    let inputValue = event.detail.inputValue;
    if (inputValue.length != 0 && inputValue.length < 7) {
      this.setData({
        username: inputValue
      });
    }
  },
  // 点击后跳转到知识储备页面
  goToKnowlege: function() {
    wx.navigateTo({
      url: './knowledge/index',
    });
  },
  // 点击后跳转到捐赠打赏页面
  goToDonate: function () {
    wx.navigateTo({
      url: './donate/index',
    });
  },
  // 点击后跳转到更新历史页面
  goToUpdateHistory: function () {
    wx.navigateTo({
      url: './history/index',
    });
  },
  // 点击后跳转到关于我们页面
  goToAboutUs: function () {
    wx.navigateTo({
      url: './about/index',
    });
  }
})