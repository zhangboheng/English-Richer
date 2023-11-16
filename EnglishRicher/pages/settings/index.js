Page({
  data: {
    username: '佚名',
    getShowOrNot: false, // 修改昵称弹出组件
    showRadioDialog: false, // 修改水平弹出组件
    englishLevels: ['初中', '高中', '大学英语四级', '大学英语六级', '考研', '托福', 'SAT'],
    getDefaultLevel: "初中"
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
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
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    this.setData({
      getDefaultLevel: defaultLevel
    })
  },
  // 点击后弹出修改昵称框
  editNickName() {
    this.setData({
      getShowOrNot: true
    });
  },
  // 点击确定后修改昵称
  handleConfirm: function (event) {
    let inputValue = event.detail.inputValue;
    if (inputValue.length != 0 && inputValue.length < 7) {
      this.setData({
        username: inputValue
      });
      this.setData({
        getShowOrNot: false
      });
    }
  },
  // 点击修改水平
  editLevel: function() {
    this.setData({
      showRadioDialog: true
    });
  },
  // 点击修改水平的确定后运行
  handleConfirmLevel: function (event) {
    const { level } = event.detail;
    this.setData({
      getDefaultLevel: level
    });
    // 修改后保存到缓存方便以后调用
    wx.setStorageSync('defaultLevel', level);
  },
  // 点击关闭修改水平弹窗
  closeRadioDialog: function() {
    this.setData({
      showRadioDialog: false
    });
  },
  // 点击后跳转到每日任务页面
  goToMissions: function() {
    wx.navigateTo({
      url: './missions/index',
    });
  },
  // 点击后跳转到知识储备页面
  goToKnowlege: function() {
    wx.navigateTo({
      url: './knowledge/index',
    });
  },
  // 点击后跳转到温故知新页面
  goToRemmember: function() {
    wx.navigateTo({
      url: './renew/index',
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