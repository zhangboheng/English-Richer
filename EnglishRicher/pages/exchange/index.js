Page({
  data: {
    moenyTotal: 0,
    inputTitle: "",
    priceArray: {
      yasiPrice: 5,
      yasiTitle: "雅思考试资料",
      moviePrice: 10,
      movieTitle: "随机电影字幕",
      telegramPrice: 20,
      telegramTitle: "话费优惠信息"
    },
    // 雅思考试资料
    yasiShow: true,
    // 电影字幕资料
    movieShow: true,
    // 手机话费
    telegramShow: true,
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  // 初次加载后加载数据
  onLoad: function (options) {
    // 从缓存中获取数据
    let money = wx.getStorageSync('money');
    // 将数据赋值给页面的数据变量
    this.setData({
      moenyTotal: money
    });
  },
  onInput(event) {
    // 处理输入事件的逻辑
    const searchValue = event.detail.value; // 获取用户输入的搜索内容
    this.setData({
      inputTitle: searchValue
    });
  },
  // 点击搜索按钮事件
  onSearch() {
    // 判断雅思考试资料是否显示
    if (this.data.priceArray.yasiTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        yasiShow: true
      });
    } else {
      this.setData({
        yasiShow: false
      });
    }
    // 判断随机电影字幕是否显示
    if (this.data.priceArray.movieTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        movieShow: true
      });
    } else {
      this.setData({
        movieShow: false
      });
    }
    // 判断话费优惠信息是否显示
    if (this.data.priceArray.telegramTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        telegramShow: true
      });
    } else {
      this.setData({
        telegramShow: false
      });
    }
  },
  // 点击兑换雅思按钮
  exchangeYasi() {
    // 从缓存中获取数据
    let yasiGet = wx.getStorageSync('yasiGet');
    if (yasiGet == 0) {
      this.popupPublic(this.data.priceArray.yasiPrice, this.data.priceArray.yasiTitle);
    } else {
      wx.showToast({
        title: '前往微信公众号行运设计师，发送消息：9527',
        icon: 'none',
        duration: 2000
      });
    }
  },
  // 点击兑换字幕按钮
  exchangeMovie() {
    // 从缓存中获取数据
    let movieSub = wx.getStorageSync('movieSub');
    if (movieSub == 0) {
      this.popupPublic(this.data.priceArray.moviePrice, this.data.priceArray.movieTitle);
    } else {
      wx.showToast({
        title: '前往微信公众号行运设计师，发送消息：2048',
        icon: 'none',
        duration: 2000
      });      
    }
  },
  // 点击兑换话费优惠信息
  exchangeCredits() {
    // 从缓存中获取数据
    let telephoneCredits = wx.getStorageSync('telephoneCredits');
    if (telephoneCredits == 0) {
      this.popupPublic(this.data.priceArray.telegramPrice, this.data.priceArray.telegramTitle);
    } else {
      wx.showToast({
        title: '前往微信公众号行运设计师，发送消息：13888',
        icon: 'none',
        duration: 2000
      });      
    }    
  },
  // 下拉
  onPullDownRefresh() {
    // 显示正在刷新提示框
    wx.showToast({
      title: '正在刷新',
      icon: 'loading',
      duration: 1000
    });
    // 刷新完成后，调用停止下拉刷新的方法
    wx.stopPullDownRefresh();
  },
  // 提示公共方法
  popupPublic(_publicPrice, _publicTitle) {
    let self = this;
    wx.showModal({
      title: '兑换提示',
      content: `确定要用${_publicPrice}钱币兑换${_publicTitle}？`,
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      success: function (res) {
        if (res.confirm) {
          // 用户点击了确定按钮
          if (_publicTitle == "雅思考试资料") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('yasiGet', 1);
              wx.showToast({
                title: '前往微信公众号行运设计师，发送消息：9527',
                icon: 'none',
                duration: 10000
              });
            } else {
              wx.showToast({
                title: '资产不够兑换咯，还不去搬砖！',
                icon: 'none',
                duration: 2000
              });
            }
          } else if (_publicTitle == "随机电影字幕") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('movieSub', 1);
              wx.showToast({
                title: '前往微信公众号行运设计师，发送消息：2048',
                icon: 'none',
                duration: 10000
              });
            } else {
              wx.showToast({
                title: '资产不够兑换咯，还不去搬砖！',
                icon: 'none',
                duration: 2000
              });
            }
          } else if (_publicTitle == "话费优惠信息") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('telephoneCredits', 1);
              wx.showToast({
                title: '前往微信公众号行运设计师，发送消息：13888',
                icon: 'none',
                duration: 10000
              });
            } else {
              wx.showToast({
                title: '资产不够兑换咯，还不去搬砖！',
                icon: 'none',
                duration: 2000
              });
            }
          }
        } else if (res.cancel) {
          // 用户点击了取消按钮
          console.log('用户点击取消');
        }
      }
    });
  }
});