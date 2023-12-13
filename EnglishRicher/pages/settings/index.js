var plugin = requirePlugin("wxatradecommentplugin");
Page({
  data: {
    username: '佚名',
    getShowOrNot: false, // 修改昵称弹出组件
    showRadioDialog: false, // 修改水平弹出组件
    englishLevels: ['小学', '初中', '高中', '大学英语四级', '大学英语六级', '考研', '托福', 'SAT'],
    wordTotal: [832, 1991, 3753, 4544, 3992, 5057, 10377, 4464],
    getDefaultLevel: "小学",
    currentCount: 0,
    limitCount: 100,
    trueName: "英语小菜鸟"
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function () {
    // 从缓存中获取数据
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let notMasterWords = wx.getStorageSync('notMasterWords'); // 当前不会的单词集合
    let getNoLimitCard = wx.getStorageSync('getNoLimitCard'); // 是否购买了解除限制卡
    let getTrueName = wx.getStorageSync('trueName');
    this.setData({
      getTrueName: getTrueName
    })
    if (nickname.length > 0) {
      this.setData({
        username: nickname
      })
    } else {
      this.setData({
        username: '佚名',
      })
    }
    this.setData({
      getDefaultLevel: defaultLevel
    });
    if (getNoLimitCard == 1) {
        this.setData({
          currentCount: notMasterWords.length,
          limitCount: 2000,
        })
    } else {
      this.setData({
        currentCount: notMasterWords.length
      })
    }
  },
  onShow: function() {
    let notMasterWords = wx.getStorageSync('notMasterWords'); // 当前不会的单词集合
    let getNoLimitCard = wx.getStorageSync('getNoLimitCard'); // 是否购买了解除限制卡
    if (getNoLimitCard == 1) {
        this.setData({
          currentCount: notMasterWords.length,
          limitCount: 2000
        })
    } else {
      this.setData({
        currentCount: notMasterWords.length
      })
    }
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
    wx.setStorageSync('defaultLevel', level);
  },
  // 点击关闭修改水平弹窗
  closeRadioDialog: function() {
    this.setData({
      showRadioDialog: false
    });
  },
  // 点击后跳转到任务大厅页面
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
  // 点击后跳转到数据统计页面
  goToAnalytics: function() {
    wx.navigateTo({
      url: './analytics/index',
    });
  },
  // 点击后打开评价
  goToAdvice: function () {
    plugin.openComment({
      success: (res)=>{
        console.log('plugin.openComment success', res)
      },
      fail: (res) =>{
        console.log('plugin.openComment fail', res)
      }
    })
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