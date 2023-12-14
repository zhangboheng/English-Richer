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
    let getTrueName = '';
    let elementaryList = wx.getStorageSync('elementaryList');
    let juniorList = wx.getStorageSync('juniorList');
    let highList = wx.getStorageSync('highList');
    let cet4List = wx.getStorageSync('cet4List');
    let cet6List = wx.getStorageSync('cet6List');
    let postgraduateList = wx.getStorageSync('postgraduateList');
    let toelfOneList = wx.getStorageSync('toelfOneList');
    let toelfTwoList = wx.getStorageSync('toelfTwoList');
    let satList = wx.getStorageSync('satList');
    let elementaryTwoList = wx.getStorageSync('elementaryTwoList');
    let juniorTwoList = wx.getStorageSync('juniorTwoList');
    let highTwoList = wx.getStorageSync('highTwoList');
    let cet4TwoList = wx.getStorageSync('cet4TwoList');
    let cet6TwoList = wx.getStorageSync('cet6TwoList');
    let postgraduateTwoList = wx.getStorageSync('postgraduateTwoList');
    let toelfOneTwoList = wx.getStorageSync('toelfOneTwoList');
    let toelfTwoTwoList = wx.getStorageSync('toelfTwoTwoList');
    let satTwoList = wx.getStorageSync('satTwoList');
    let elementaryThreeList = wx.getStorageSync('elementaryThreeList');
    let juniorThreeList = wx.getStorageSync('juniorThreeList');
    let highThreeList = wx.getStorageSync('highThreeList');
    let cet4ThreeList = wx.getStorageSync('cet4ThreeList');
    let cet6ThreeList = wx.getStorageSync('cet6ThreeList');
    let postgraduateThreeList = wx.getStorageSync('postgraduateThreeList');
    let toelfOneThreeList = wx.getStorageSync('toelfOneThreeList');
    let toelfTwoThreeList = wx.getStorageSync('toelfTwoThreeList');
    let satThreeList = wx.getStorageSync('satThreeList');
    // 每个等级的取最大数
    let elementaryMax = Math.max(elementaryList.length, elementaryTwoList.length, elementaryThreeList.length);
    let juniorMax = Math.max(juniorList.length, juniorTwoList.length, juniorThreeList.length);
    let highMax = Math.max(highList.length, highTwoList.length, highThreeList.length);
    let cet4Max = Math.max(cet4List.length, cet4TwoList.length, cet4ThreeList.length);
    let cet6Max = Math.max(cet6List.length, cet6TwoList.length, cet6ThreeList.length);
    let postgraduateMax = Math.max(postgraduateList.length, postgraduateTwoList.length, postgraduateThreeList.length);
    let toelfOneMax = Math.max(toelfOneList.length, toelfOneTwoList.length, toelfOneThreeList.length);
    let toelfTwoMax = Math.max(toelfTwoList.length, toelfTwoTwoList.length, toelfTwoThreeList.length);
    let satMax = Math.max(satList.length, satTwoList.length, satThreeList.length);
    // 将每个等级的最大数汇总为总数
    let TotalNumber = elementaryMax + juniorMax + highMax + cet4Max + cet6Max + postgraduateMax + toelfOneMax + toelfTwoMax + satMax;
    if (TotalNumber < 500) {
      getTrueName = "英语小菜鸟";
    } else if (TotalNumber < 1000 && TotalNumber >= 500) {
      getTrueName = "学霸掌门人";
    } else if (TotalNumber < 2500 && TotalNumber >= 1000) {
      getTrueName = "语言钻石王老五";
    } else if (TotalNumber < 4500 && TotalNumber >= 2500) {
      getTrueName = "拼写富豪";
    } else if (TotalNumber < 7000 && TotalNumber >= 4500) {
      getTrueName = "口语巨星";
    } else if (TotalNumber < 10000 && TotalNumber >= 7000) {
      getTrueName = "英语财阀继承人";
    } else if (TotalNumber < 14000 && TotalNumber >= 10000) {
      getTrueName = "流利语言达人";
    } else if (TotalNumber < 19000 && TotalNumber >= 14000) {
      getTrueName = "词海泰斗";
    } else if (TotalNumber >= 19000) {
      getTrueName = "英语大富翁";
    }
    console.info(TotalNumber)
    this.setData({
      trueName: getTrueName
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