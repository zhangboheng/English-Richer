// app.js
App({
  // 初次加载获取缓存数据
  onLaunch() {
    let money = wx.getStorageSync('money'); // 总货币数
    let yasiGet = wx.getStorageSync('yasi'); // 雅思考试资料是否兑换
    let movieSub = wx.getStorageSync('subtitle'); // 电影字幕是否兑换
    let telephoneCredits = wx.getStorageSync('telephoneCredits'); // 电影字幕是否兑换
    // 判断是否存在数据，如果不存在则赋值为 0
    if (typeof money == 'undefined' || money == null || typeof money == "string") {
      money = 0;
      // 将默认值 0 存储到缓存中
      wx.setStorageSync('money', money);
    }
    // 判断是否存在兑换雅思考试资料数据，如果不存在则赋值为 0
    if (typeof yasiGet == 'undefined' || yasiGet == null || typeof yasiGet == "string") {
      yasiGet = 0;
      // 将默认值 0 存储到缓存中
      wx.setStorageSync('yasiGet', yasiGet);
    }
    // 判断是否存在兑换电影字幕数据，如果不存在则赋值为 0
    if (typeof movieSub == 'undefined' || movieSub == null || typeof movieSub == "string") {
      movieSub = 0;
      // 将默认值 0 存储到缓存中
      wx.setStorageSync('movieSub', movieSub);
    }
    // 判断是否存在兑换话费优惠信息数据，如果不存在则赋值为 0
    if (typeof telephoneCredits == 'undefined' || telephoneCredits == null || typeof telephoneCredits == "string") {
      telephoneCredits = 0;
      // 将默认值 0 存储到缓存中
      wx.setStorageSync('telephoneCredits', telephoneCredits);
    }
  },
  globalData: {
    userInfo: null,
  }
})
