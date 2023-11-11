Page({
  data: {
    getShowOrNot: true,
    storageDickName: '佚名',
    storageStartGrade: 0,
    progress: 0,
    coins: 0
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
  // 点击游戏1后根据水平不同，跳转到不同页面
  goToGameOne() {
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    if (defaultLevel === '初中') {
      wx.navigateTo({
        url: '/pages/gameone/junior/index'
      });
    } else if (defaultLevel === '高中') {
      wx.navigateTo({
        url: '/pages/gameone/high/index'
      });
    } else if (defaultLevel === '大学英语四级') {
      console.info('---->', '大学英语四级')
    } else if (defaultLevel === '大学英语六级') {
      console.info('---->', '大学英语六级')
    } else if (defaultLevel === '考研') {
      console.info('---->', '考研')
    } else if (defaultLevel === '托福') {
      console.info('---->', '托福')
    } else if (defaultLevel === 'SAT') {
      console.info('---->', 'SAT')
    }
  },
  // 获取昵称数据的公共方法
  getAllData() {
    let self = this;
    // 从缓存中获取昵称数据
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    let startGrade = wx.getStorageSync('startGrade') || 0; // 初始等级
    let getProgress = wx.getStorageSync('progress') || 0;
    let money = wx.getStorageSync('money'); // 总货币数
    // 通过 progress 判断等级
    startGrade = Math.floor(getProgress / 100);
    if (nickname.length > 0) {
      self.setData({
        getShowOrNot: false,
        storageDickName: nickname,
        storageStartGrade: startGrade,
        progress: getProgress,
        coins: money
      })
    } else {
      self.setData({
        getShowOrNot: true,
        storageDickName: '佚名',
        storageStartGrade: 0,
        progress: 0,
        coins: 0
      })
    }
  }
});