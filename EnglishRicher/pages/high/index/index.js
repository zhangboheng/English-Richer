var database = require('../source/high');
Page({
  data: {
    globalData: [], // 全局获取所有单词列表
    listData: [],
    searchData: '', // 搜索关键词
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 500
    });
    // 初次加载获取数据
    let trueData = database.postData.main.sort(this.shuffleArray);
    trueData = trueData.map(item => ({ ...item, show: false }));
    // 赋值给子组件列表
    this.setData({
      listData: trueData
    });
    // 赋值给全局数据列表
    this.setData({
      globalData: trueData
    });
  },
  // 输入时的方法
  onInput: function (e) {
    const searchData = e.detail.value;
    this.setData({
      searchData: searchData
    });
  },
  // 当点击搜索按钮的时候方法
  onSearch: function () {
    let searchData = this.data.searchData;
    let filterArr = this.data.globalData.filter(item => item.word.toLowerCase().indexOf(searchData.toLowerCase()) > -1 || item.translations.map(x=>x.translation).some(x=>x.indexOf(searchData) > -1));
    this.setData({
      listData: filterArr
    });
  },
  // 点击跳转到速览页面
  quickLook: function () {
    wx.navigateTo({
      url: './quick/index',
    })
  },
  // 公共乱序方法
  shuffleArray: function(_a, _b) {
    return 0.5 - Math.random();
  }
})