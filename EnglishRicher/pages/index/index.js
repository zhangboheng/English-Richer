Page({
  data: {
    getShowOrNot: true,
    storageDickName: '佚名',
    userInfo: {
      level: 0,
      progress: 0,
      coins: 0,
    },
  },
  onLoad: function() {
    this.getAllData();
  },
  // 当上一级页面返回后，触发 onShow 生命周期函数
  onShow: function() {
    this.getAllData();
  },
  handleConfirm: function (event) {
    let inputValue = event.detail.inputValue;
    if (inputValue.length > 0 && inputValue.length <= 6){
      this.setData({
        storageDickName: inputValue
      })
    }
  },
  // 点击后跳转到设置页面
  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/index'
    });
  },
  // 获取昵称数据的公共方法
  getAllData() {
    let self = this;
    // 从缓存中获取昵称数据
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    if (nickname.length > 0) {
      self.setData({
        getShowOrNot: false,
        storageDickName: nickname
      })
    } else {
      self.setData({
        getShowOrNot: true,
        storageDickName: '佚名',
      })
    }
  }
});