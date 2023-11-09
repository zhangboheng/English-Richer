Page({
  data: {

  },
  // 点击跳转到初中题库
  goToJunior: function(){
    wx.navigateTo({
      url: '../../junior/index/index',
    });
  },
  // 点击跳转到高中题库
  goToHigh: function(){
    wx.navigateTo({
      url: '../../high/index/index',
    });
  },
  // 点击跳转到大学英语四级
  goToCet4: function(){
    wx.navigateTo({
      url: '../../cet4/index/index',
    });
  },
  // 点击跳转到大学英语六级
  goToCet6: function(){
    wx.navigateTo({
      url: '../../cet6/index/index',
    });
  },
  // 点击跳转到考研
  goToPostgraduate: function() {
    wx.navigateTo({
      url: '../../postgraduate/index/index',
    });
  },
  // 点击跳转到托福1
  goToToelf: function() {
    wx.navigateTo({
      url: '../../toelf/index/index',
    });
  },
  // 点击跳转到托福2
  goToToelfs: function() {
    wx.navigateTo({
      url: '../../toelfs/index/index',
    });
  },
  // 点击跳转到 SAT
  goToSat: function() {
    wx.navigateTo({
      url: '../../sat/index/index',
    });
  }
})