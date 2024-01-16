Page({
  data: {
    getShowOrNot: true,
    storageDickName: '佚名',
    showRadioDialog: false,
    englishLevels: ['小学', '初中', '高中', '大学英语四级', '大学英语六级', '考研', '托福', 'SAT'],
    wordTotal: [832, 1991, 3753, 4544, 3992, 5057, 10377, 4464],
    getDefaultLevel: "小学",
    storageStartGrade: 0,
    progress: 0,
    coins: 0,
    einsteinArticle: false,
    showTips: "",
    itemName: '',
    itemImg: '',
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function () {
    this.getAllData();
  },
  // 当上一级页面返回后，触发 onShow 生命周期函数
  onShow: function () {
    this.getAllData();
  },
  // 输入昵称后点击确定操作
  handleConfirm: function (event) {
    let inputValue = event.detail.inputValue;
    if (inputValue.length > 0 && inputValue.length <= 6) {
      // 输入昵称框关闭，选择水平框开启
      this.setData({
        storageDickName: inputValue,
        showRadioDialog: true
      })
    }
  },
  // 点击修改水平的确定后运行
  handleConfirmLevel: function (event) {
    const {
      level
    } = event.detail;
    this.setData({
      getDefaultLevel: level
    });
    wx.setStorageSync('defaultLevel', level);
  },
  // 点击关闭修改水平弹窗
  closeRadioDialog: function () {
    this.setData({
      showRadioDialog: false
    });
  },
  // 点击后跳转到经验学堂页面
  goToArticles() {
    wx.navigateTo({
      url: '/pages/articles/index'
    });
  },
  // 点击后跳转到策划谋略页面
  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/index'
    });
  },
  // 点击游戏1后根据水平不同，跳转到不同页面
  goToGameOne() {
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    if (defaultLevel === '小学') {
      wx.navigateTo({
        url: '/pages/gameone/elementary/index'
      });
    } else if (defaultLevel === '初中') {
      wx.navigateTo({
        url: '/pages/gameone/junior/index'
      });
    } else if (defaultLevel === '高中') {
      wx.navigateTo({
        url: '/pages/gameone/high/index'
      });
    } else if (defaultLevel === '大学英语四级') {
      wx.navigateTo({
        url: '/pages/gameoner/cet4/index'
      });
    } else if (defaultLevel === '大学英语六级') {
      wx.navigateTo({
        url: '/pages/gameoner/cet6/index'
      });
    } else if (defaultLevel === '考研') {
      wx.navigateTo({
        url: '/pages/gameones/postgraduate/index'
      });
    } else if (defaultLevel === '托福') {
      let index = Math.round(Math.random());
      if (index == 0) {
        wx.navigateTo({
          url: '/pages/gameones/toelf/index'
        });
      } else {
        wx.navigateTo({
          url: '/pages/gameones/toelfs/index'
        });
      }
    } else if (defaultLevel === 'SAT') {
      wx.navigateTo({
        url: '/pages/gameoness/sat/index'
      });
    }
  },
  // 点击游戏2后根据水平不同，跳转到不同页面
  goToGameTwo() {
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let goToGameTwoLimit = wx.getStorageSync('goToGameTwoLimit'); // 轻航填字海体验资格
    let startGrade = this.data.storageStartGrade;
    if (startGrade >= 3 || goToGameTwoLimit == "Yes") {
      if (defaultLevel === '小学') {
        wx.navigateTo({
          url: '/pages/gametwo/elementary/index'
        });
      } else if (defaultLevel === '初中') {
        wx.navigateTo({
          url: '/pages/gametwo/junior/index'
        });
      } else if (defaultLevel === '高中') {
        wx.navigateTo({
          url: '/pages/gametwo/high/index'
        });
      } else if (defaultLevel === '大学英语四级') {
        wx.navigateTo({
          url: '/pages/gametwor/cet4/index'
        });
      } else if (defaultLevel === '大学英语六级') {
        wx.navigateTo({
          url: '/pages/gametwor/cet6/index'
        });
      } else if (defaultLevel === '考研') {
        wx.navigateTo({
          url: '/pages/gametwos/postgraduate/index'
        });
      } else if (defaultLevel === '托福') {
        let index = Math.round(Math.random());
        if (index == 0) {
          wx.navigateTo({
            url: '/pages/gametwos/toelf/index'
          });
        } else {
          wx.navigateTo({
            url: '/pages/gametwos/toelfs/index'
          });
        }
      } else if (defaultLevel === 'SAT') {
        wx.navigateTo({
          url: '/pages/gametwoss/sat/index'
        });
      }
      wx.removeStorageSync('goToGameTwoLimit');
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n哎哟，菜鸟，等级没到 3 级无法进入哦！如何提升呢？\n\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的经验卡获得\n\n',
        itemName: '等级不足进入，如何提升',
        itemImg: '../../static/source/level.png'
      });
    }
  },
  // 点击游戏3后根据水平不同，跳转到不同页面
  goToGameThree() {
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let goToGameThreeLimit = wx.getStorageSync('goToGameThreeLimit'); // 选择知我意体验资格
    let startGrade = this.data.storageStartGrade;
    if (startGrade >= 6 || goToGameThreeLimit == "Yes") {
      if (defaultLevel === '小学') {
        wx.navigateTo({
          url: '/pages/gamethree/elementary/index'
        });
      } else if (defaultLevel === '初中') {
        wx.navigateTo({
          url: '/pages/gamethree/junior/index'
        });
      } else if (defaultLevel === '高中') {
        wx.navigateTo({
          url: '/pages/gamethree/high/index'
        });
      } else if (defaultLevel === '大学英语四级') {
        wx.navigateTo({
          url: '/pages/gamethree/cet4/index'
        });
      } else if (defaultLevel === '大学英语六级') {
        wx.navigateTo({
          url: '/pages/gamethree/cet6/index'
        });
      } else if (defaultLevel === '考研') {
        wx.navigateTo({
          url: '/pages/gamethrees/postgraduate/index'
        });
      } else if (defaultLevel === '托福') {
        let index = Math.round(Math.random());
        if (index == 0) {
          wx.navigateTo({
            url: '/pages/gamethrees/toelf/index'
          });
        } else {
          wx.navigateTo({
            url: '/pages/gamethrees/toelfs/index'
          });
        }
      } else if (defaultLevel === 'SAT') {
        wx.navigateTo({
          url: '/pages/gamethreess/sat/index'
        });
      }
      wx.removeStorageSync('goToGameThreeLimit');
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n奋斗者，等级没到 6 级无法进入哦！如何提升呢？\n\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的经验卡获得\n\n',
        itemName: '等级不足进入，如何提升',
        itemImg: '../../static/source/level.png'
      });
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
        progress: getProgress % 100,
        coins: money.toFixed(2)
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
  },
  // 点击等级不足提示弹出框
  closePopup() {
    this.setData({
      einsteinArticle: false,
    });
  },
});