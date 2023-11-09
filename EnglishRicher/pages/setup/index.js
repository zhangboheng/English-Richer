Page({
  data: {
    showComponent: false
  },
  // 点击跳转后到首页
  gotoHome: function() {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  // 点击跳转到兑换情报
  gotoExchange: function() {
    wx.redirectTo({
      url: '/pages/exchange/index'  // 跳转到目标页面的路径
    });
  },
  // 点击弹出玩法说明
  gotoIntroduce: function() {
    this.setData({
      showComponent: !this.data.showComponent
    })
  },
  // 点击
  closePopup() {
    this.setData({
      showComponent: false,
    });
  },
})