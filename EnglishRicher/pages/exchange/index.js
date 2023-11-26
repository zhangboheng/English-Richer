Page({
  data: {
    moenyTotal: 0,
    inputTitle: "",
    priceArray: {
      lotteryPrice: 0.5,
      lotteryTitle: "彩票",
      levelCardPrice: 1,
      levelCardTitle: "经验卡",
      yasiPrice: 5,
      yasiTitle: "雅思考试资料",
      moviePrice: 10,
      movieTitle: "随机电影字幕",
      telegramPrice: 20,
      telegramTitle: "话费优惠信息",
      gpt4Price: 5,
      gpt4Title: "免费离线GPT4"
    },
    // 彩票
    lotteryShow: true,
    // 经验卡
    levelCardShow: true,
    // 雅思考试资料
    yasiShow: true,
    // 电影字幕资料
    movieShow: true,
    // 手机话费
    telegramShow: true,
    // 离线GPT4
    gpt4Show: true
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
    // 判断彩票是否显示
    if (this.data.priceArray.lotteryTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        lotteryShow: true
      });
    } else {
      this.setData({
        lotteryShow: false
      });
    }
    // 判断经验卡是否显示
    if (this.data.priceArray.levelCardTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        levelCardShow: true
      });
    } else {
      this.setData({
        levelCardShow: false
      });
    }
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
    // 判断免费离线GPT4是否显示
    if (this.data.priceArray.gpt4Title.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        gpt4Show: true
      });
    } else {
      this.setData({
        gpt4Show: false
      });
    }
  },
  // 显示彩票详情信息
  showLotteryInfo() {
    wx.showToast({
      title: '0.01～100钱币，体验一夜暴富的感觉',
      icon: 'none',
      duration: 2000
    });
  },
  // 点击兑换彩票
  exchangeLottery() {
    this.popupPublic(this.data.priceArray.lotteryPrice, this.data.priceArray.lotteryTitle);
  },
  // 显示经验卡详情信息
  showExperienceInfo() {
    wx.showToast({
      title: '0.01～100经验，让你快速变强',
      icon: 'none',
      duration: 2000
    });
  },
  // 点击兑换经验卡
  exchangeLevelCard() {
    this.popupPublic(this.data.priceArray.levelCardPrice, this.data.priceArray.levelCardTitle);
  },
  // 点击兑换雅思按钮
  exchangeYasi() {
    // 从缓存中获取数据
    let yasiGet = wx.getStorageSync('yasiGet');
    if (yasiGet == 0) {
      this.popupPublic(this.data.priceArray.yasiPrice, this.data.priceArray.yasiTitle);
    } else {
      wx.showToast({
        title: '微信公众号行运设计师，发送消息：9527',
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
        title: '微信公众号行运设计师，发送消息：2048',
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
        title: '微信公众号行运设计师，发送消息：13888',
        icon: 'none',
        duration: 2000
      });
    }
  },
  // 点击兑换免费离线GPT4
  exchangeGpt4() {
    // 从缓存中获取数据
    let getGpt4OrNot = wx.getStorageSync('getGpt4OrNot');
    if (getGpt4OrNot == 0) {
      this.popupPublic(this.data.priceArray.gpt4Price, this.data.priceArray.gpt4Title);
    } else {
      wx.showToast({
        title: '微信公众号行运设计师，发送消息：GPT4Free',
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
          if (_publicTitle == "彩票") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 进行彩票抽奖活动
              let lotteryMoney = self.getRandomNumber();
              self.setData({
                moenyTotal: (Number(self.data.moenyTotal) + lotteryMoney).toFixed(2)
              });
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              wx.showToast({
                title: `恭喜你，中奖了，奖金是${lotteryMoney}钱币`,
                icon: 'none',
                duration: 2000
              });
            } else {
              wx.showToast({
                title: '资产不够兑换咯，还不去搬砖！',
                icon: 'none',
                duration: 2000
              });
            }
          } else if (_publicTitle == "经验卡") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 进行经验卡开奖
              let experienceValue = self.getRandomNumber();
              let getProgress = wx.getStorageSync('progress');
              if (typeof getProgress == 'undefined' || getProgress == null || typeof getProgress == "string") {
                getProgress = 0;
                wx.setStorageSync('progress', getProgress);
              }
              getProgress = getProgress + experienceValue;
              wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
              wx.showToast({
                title: `天啊，原地飞升，获得${experienceValue}经验值`,
                icon: 'none',
                duration: 2000
              });
            } else {
              wx.showToast({
                title: '资产不够兑换咯，还不去搬砖！',
                icon: 'none',
                duration: 2000
              });
            }
          } else if (_publicTitle == "雅思考试资料") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('yasiGet', 1);
              wx.showToast({
                title: '微信公众号行运设计师，发送消息：9527',
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
                title: '微信公众号行运设计师，发送消息：2048',
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
                title: '微信公众号行运设计师，发送消息：13888',
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
          } else if (_publicTitle == "免费离线GPT4") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('getGpt4OrNot', 1);
              wx.showToast({
                title: '微信公众号行运设计师，发送消息：GPT4Free',
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
  },
  // 彩票出现的公共方法
  getRandomNumber: function () {
    const probabilities = [0.4, 0.35, 0.1, 0.05, 0.05, 0.03, 0.015, 0.004, 0.001];
    const values = [0.01, 0.1, 0.5, 1, 1.5, 2, 5, 10, 100];
    let sumOfProbabilities = 0;
    for (const probability of probabilities) {
      sumOfProbabilities += probability;
    }
    let randomValue = Math.random() * sumOfProbabilities;
    let cumulativeProbability = 0;
    for (let i = 0; i < values.length; i++) {
      cumulativeProbability += probabilities[i];
      if (randomValue <= cumulativeProbability) {
        return values[i];
      }
    }
    return values[values.length - 1];
  }
});