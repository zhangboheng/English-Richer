Page({
  data: {
    subjects: [
      { id: 0, title: '小学', color: '#f5d659', tapMethod: 'goToElementary' },
      { id: 1, title: '初中', color: '#f5d659', tapMethod: 'goToJunior' },
      { id: 2, title: '高中', color: '#f5d659', tapMethod: 'goToHigh' },
      { id: 3, title: '大学英语四级', color: '#f5d659', tapMethod: 'goToCet4' },
      { id: 4, title: '大学英语六级', color: '#f5d659', tapMethod: 'goToCet6' },
      { id: 5, title: '考研', color: '#f5d659', tapMethod: 'goToPostgraduate' },
      { id: 6, title: '托福(上)', color: '#f5d659', tapMethod: 'goToToelf' },
      { id: 7, title: '托福(下)', color: '#f5d659', tapMethod: 'goToToelfs' },
      { id: 8, title: 'SAT', color: '#f5d659', tapMethod: 'goToSat' },
    ],
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  // 点击跳转到小学题库
  goToElementary: function() {
    wx.navigateTo({
      url: '../../elementary/index/index',
    });
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