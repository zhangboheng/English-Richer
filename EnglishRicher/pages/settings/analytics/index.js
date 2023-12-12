Page({
  data: {
    getDefaultName: '测试',
  },
  onLoad(options) {
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    this.setData({
      getDefaultName: nickname
    });
  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
})