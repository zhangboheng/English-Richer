App({
  // 初次加载获取缓存数据
  onLaunch() {
    // ios端音频不能在静音下播放处理
    wx.setInnerAudioOption({
      obeyMuteSwitch: false,
      success: function (res) {
        console.log("开启静音模式下播放音乐的功能");
      },
      fail: function (err) {
        console.log("静音设置失败");
      },
    });
    // 获得全局分享能力
    this.overShare();
    let money = wx.getStorageSync('money'); // 总货币数
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
    let yasiGet = wx.getStorageSync('yasi'); // 雅思考试资料是否兑换
    let movieSub = wx.getStorageSync('subtitle'); // 电影字幕是否兑换
    let telephoneCredits = wx.getStorageSync('telephoneCredits'); // 电影字幕是否兑换
    let getGpt4OrNot = wx.getStorageSync('getGpt4OrNot'); // 免费离线GPT4是否兑换
    let getEinsteinBrain = wx.getStorageSync('einsteinBrain'); // 爱因斯坦大脑是否兑换
    let getGameTwoTicket = wx.getStorageSync('getGameTwoTicket'); // 轻航填字海体验是否兑换
    let getGameThreeTicket = wx.getStorageSync('getGameThreeTicket'); // 选择知我意验是否兑换
    let getClockTime = wx.getStorageSync('clockTime'); // 获取计时统计
    let getTaobao = wx.getStorageSync('taobao'); // 淘宝商品1分购
    let getReimbursement = wx.getStorageSync('reimbursement'); // 购物报销机
    // 判断是否存在总货币数数据，如果不存在则赋值为 0
    if (typeof money == 'undefined' || money == null || typeof money == "string") {
      money = 0;
      wx.setStorageSync('money', money);
    }
    // 判断是否存在初始水平数据，如果不存在则赋值为初中
    if (typeof defaultLevel == 'undefined' || defaultLevel == null || defaultLevel.length == 0) {
      defaultLevel = "小学";
      wx.setStorageSync('defaultLevel', defaultLevel);
    }
    // 判断是否存在兑换雅思考试资料数据，如果不存在则赋值为 0
    if (typeof yasiGet == 'undefined' || yasiGet == null || typeof yasiGet == "string") {
      yasiGet = 0;
      wx.setStorageSync('yasiGet', yasiGet);
    }
    // 判断是否存在兑换电影字幕数据，如果不存在则赋值为 0
    if (typeof movieSub == 'undefined' || movieSub == null || typeof movieSub == "string") {
      movieSub = 0;
      wx.setStorageSync('movieSub', movieSub);
    }
    // 判断是否存在兑换话费优惠信息数据，如果不存在则赋值为 0
    if (typeof telephoneCredits == 'undefined' || telephoneCredits == null || typeof telephoneCredits == "string") {
      telephoneCredits = 0;
      wx.setStorageSync('telephoneCredits', telephoneCredits);
    }
    // 判断是否存在免费离线GPT4兑换信息数据，如果不存在则赋值为 0
    if (typeof getGpt4OrNot == 'undefined' || getGpt4OrNot == null || typeof getGpt4OrNot == "string") {
      getGpt4OrNot = 0;
      wx.setStorageSync('getGpt4OrNot', getGpt4OrNot);
    }
    // 判断是否存在爱因斯坦大脑数据，如果不存在赋值为 0
    if (typeof getEinsteinBrain == 'undefined' || getEinsteinBrain == null || typeof getEinsteinBrain == "string") {
      getEinsteinBrain = 0;
      wx.setStorageSync('einsteinBrain', getEinsteinBrain);
    }
    // 判断是否存在轻航填字海数据，如果不存在赋值为 0
    if (typeof getGameTwoTicket == 'undefined' || getGameTwoTicket == null || typeof getGameTwoTicket == "string") {
      getGameTwoTicket = 0;
      wx.setStorageSync('getGameTwoTicket', getGameTwoTicket);
    }
    // 判断是否存在选择知我意数据，如果不存在赋值为 0
    if (typeof getGameThreeTicket == 'undefined' || getGameThreeTicket == null || typeof getGameThreeTicket == "string") {
      getGameThreeTicket = 0;
      wx.setStorageSync('getGameThreeTicket', getGameThreeTicket);
    }
    // 判断是否有计时统计
    if (typeof getClockTime == 'undefined' || getClockTime == null || getClockTime.length == 0) {
      getClockTime = '00:00:00';
      wx.setStorageSync('clockTime', getClockTime);
    }
    // 判断是否存在淘宝1分购数据，如果不存在则赋值为 0
    if (typeof getTaobao == 'undefined' || getTaobao == null || typeof getTaobao == "string") {
      getTaobao = 0;
      wx.setStorageSync('taobao', getTaobao);
    }
    // 判断是否存在购物报销机数据，如果不存在则赋值为 0
    if (typeof getReimbursement == 'undefined' || getReimbursement == null || typeof getReimbursement == "string") {
      getReimbursement = 0;
      wx.setStorageSync('reimbursement', getReimbursement);
    }
  },
  // 重写分享方法
  overShare: function () {
    // 监听路由切换
    // 间接实现全局设置分享内容
    wx.onAppRoute(function (res) {
      // 获取加载的页面
      let pages = getCurrentPages(),
        // 获取当前页面的对象
        view = pages[pages.length - 1],
        data;
      if (view) {
        data = view.data;
        if (!data.isOverShare) {
          data.isOverShare = true;
          view.onShareAppMessage = function () {
            // 分享朋友配置
            return {
              title: '英语大富翁——英语知识快速增值',
              path: '/pages/setup/index',
              imageUrl: '/static/source/logos.png',
            };
            // 分享朋友圈配置
            view.onShareTimeline = function () {
              // 你的分享朋友圈配置
              return {
                title: '英语大富翁——英语知识快速增值',
                query: 'key=value',
                path: '/pages/setup/index',
                imageUrl: '/static/source/logos.png',
              };
            };
          };
        }
      }
    });
  },
})