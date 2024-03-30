Page({
  data: {
    videoAd: null,
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
      gpt4Title: "免费离线GPT4",
      infiniteTitle: "解限卡",
      einsteinPrice: 50,
      einsteinTitle: "爱因斯坦大脑",
      ticketPrice: 0.01,
      ticketTitle: "轻航填字海体验",
      ticketTwoPrice: 0.01,
      ticketTwoTitle: "选择知我意体验",
      taobaoPrice: 5,
      taobaoTitle: "淘宝商品1分购",
      reimbursementPrice: 3,
      reimbursementTitle: "购物报销机"
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
    gpt4Show: true,
    // 解限卡
    infiniteShow: true,
    // 爱因斯坦大脑
    einsteinShow: true,
    // 爱因斯坦大脑解锁弹出信息
    einsteinArticle: false,
    showTips: "",
    itemName: '',
    itemImg: '',
    // 轻航填字海体验卡
    ticketShow: true,
    // 选择知我意体验卡
    ticketTwoShow: true,
    // 淘宝一分购
    taobaoShow: true,
    // 购物报销机
    reimbursementShow: true
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
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.data.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-67cd6ef4b3dd9519'
      })
      this.data.videoAd.onLoad(() => {
        console.log('激励视频 广告加载成功')
      })
      this.data.videoAd.onError((err) => {
        console.error('激励视频光告加载失败', err)
      });
    }
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
    // 判断解限卡是否显示
    if (this.data.priceArray.infiniteTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        infiniteShow: true
      });
    } else {
      this.setData({
        infiniteShow: false
      });
    }
    // 判断爱因斯坦大脑是否显示
    if (this.data.priceArray.einsteinTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        einsteinShow: true
      });
    } else {
      this.setData({
        einsteinShow: false
      });
    }
    // 判断轻航填字海体验是否显示
    if (this.data.priceArray.ticketTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        ticketShow: true
      });
    } else {
      this.setData({
        ticketShow: false
      });
    }
    // 判断选择知我意体验是否显示
    if (this.data.priceArray.ticketTwoTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        ticketTwoShow: true
      });
    } else {
      this.setData({
        ticketTwoShow: false
      });
    }
    // 判断淘宝商品1分购是否显示
    if (this.data.priceArray.taobaoTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        taobaoShow: true
      });
    } else {
      this.setData({
        taobaoShow: false
      });
    }
    // 判断购物报销机是否显示
    if (this.data.priceArray.reimbursementTitle.indexOf(this.data.inputTitle) > -1) {
      this.setData({
        reimbursementShow: true
      });
    } else {
      this.setData({
        reimbursementShow: false
      });
    }
  },
  // 显示彩票详情信息
  showLotteryInfo() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n0.10～100钱币，体验一夜暴富。\n\n① 0.10钱币：中奖概率 40%\n\n② 0.50钱币：中奖概率 35%\n\n③ 1.00钱币：中奖概率 10%\n\n④ 1.50钱币：中奖概率 5%\n\n⑤ 2.00钱币：中奖概率 5%\n\n⑥ 5.00钱币：中奖概率 3%\n\n⑦ 10.00钱币：中奖概率 1.5%\n\n⑧ 20.00钱币：中奖概率 0.4%\n\n⑨ 100.00钱币：中奖概率 0.1%\n\n',
      itemName: '彩票中奖概率',
      itemImg: '../../static/source/lottery.png'
    });
  },
  // 点击兑换彩票
  exchangeLottery() {
    this.popupPublic(this.data.priceArray.lotteryPrice, this.data.priceArray.lotteryTitle);
  },
  // 显示经验卡详情信息
  showExperienceInfo() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n0.10～100经验，让你快速变强。\n\n① 0.10经验：中奖概率 40%\n\n② 0.50经验：中奖概率 35%\n\n③ 1.00经验：中奖概率 10%\n\n④ 1.50经验：中奖概率 5%\n\n⑤ 2.00经验：中奖概率 5%\n\n⑥ 5.00经验：中奖概率 3%\n\n⑦ 10.00经验：中奖概率 1.5%\n\n⑧ 20.00经验：中奖概率 0.4%\n\n⑨ 100.00经验：中奖概率 0.1%\n\n',
      itemName: '经验卡开出概率',
      itemImg: '../../static/source/up.png'
    });
  },
  // 点击兑换经验卡
  exchangeLevelCard() {
    this.popupPublic(this.data.priceArray.levelCardPrice, this.data.priceArray.levelCardTitle);
  },
  // 点击兑换雅思按钮
  exchangeYasi() {
    let yasiGet = wx.getStorageSync('yasiGet');
    if (yasiGet == 0) {
      this.popupPublic(this.data.priceArray.yasiPrice, this.data.priceArray.yasiTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：9527，即可获得。\n\n',
        itemName: '雅思考试资料兑换成功',
        itemImg: '../../static/source/exam.png'
      });
    }
  },
  // 点击兑换字幕按钮
  exchangeMovie() {
    let movieSub = wx.getStorageSync('movieSub');
    if (movieSub == 0) {
      this.popupPublic(this.data.priceArray.moviePrice, this.data.priceArray.movieTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：2048，即可获得。\n\n',
        itemName: '随机电影字幕兑换成功',
        itemImg: '../../static/source/ticket.png'
      });
    }
  },
  // 点击兑换话费优惠信息
  exchangeCredits() {
    let telephoneCredits = wx.getStorageSync('telephoneCredits');
    if (telephoneCredits == 0) {
      this.popupPublic(this.data.priceArray.telegramPrice, this.data.priceArray.telegramTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：13888，即可获得。\n\n',
        itemName: '话费优惠信息兑换成功',
        itemImg: '../../static/source/smartphone.png'
      });
    }
  },
  // 点击兑换免费离线GPT4
  exchangeGpt4() {
    let getGpt4OrNot = wx.getStorageSync('getGpt4OrNot');
    if (getGpt4OrNot == 0) {
      this.popupPublic(this.data.priceArray.gpt4Price, this.data.priceArray.gpt4Title);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：GPT4Free，即可获得。\n\n',
        itemName: '离线GPT4兑换成功',
        itemImg: '../../static/source/gpt4.png'
      });
    }
  },
  // 点击显示解限卡说明
  showInfiniteInfo() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n观看广告后，可以永久解锁温故知新容量，从 100 变成 2000，让复习更高效。',
      itemName: '解限卡说明',
      itemImg: '../../static/source/infinite.png'
    });
  },
  // 点击获取解限卡
  unclockAd() {
    if (this.data.videoAd) {
      this.data.videoAd.show().catch(() => {
        this.data.videoAd.load()
          .then(() => this.data.videoAd.show())
          .catch(err => {
            console.error('激励视频 广告显示失败', err)
          })
      });
      this.data.videoAd.onClose((res) => {
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          wx.setStorageSync('getNoLimitCard', 1);
        } else {
          // 播放中途退出，不下发游戏奖励
          console.info('用户放弃了解限卡的获取');
        }
      })
    }
  },
  // 点击显示爱因斯坦大脑说明
  showEinstein() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n兑换后，按照秘籍，在现实中可能获得爱因斯坦般思考能力。',
      itemName: '爱因斯坦大脑兑换说明',
      itemImg: '../../static/source/einstein.png'
    });
  },
  // 点击兑换爱因斯坦大脑
  exchangeEinstein() {
    let getEinsteinBrain = wx.getStorageSync('einsteinBrain'); // 爱因斯坦大脑是否兑换
    if (getEinsteinBrain == 0) {
      this.popupPublic(this.data.priceArray.einsteinPrice, this.data.priceArray.einsteinTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: "\n哎呦，没想到你真的兑换成功了，太强了吧！那么恭喜你，你已经获得了爱因斯坦大脑般思维方式的基础，那就是坚持。\n\n之所以说在现实中可能获得爱因斯坦般思考能力，关键是如何实现，没有一条固定的路径。\n\n以我自己的经验，简单来说，乐观自信，终身学习，形成自己的科学方法论，步入一条没人走过的道路，书写自己的人生传奇。\n\n获得类似爱因斯坦大脑般的思考能力是一个复杂的目标，它涉及到多个方面，包括学习、思维习惯和认知能力：\n\n① 持续学习：不断学习新的知识和技能，从多个领域获取信息。广泛的知识背景可以帮助你建立更多的关联和视角，促进创造性的思考。\n\n② 培养好奇心：保持对世界的好奇心和求知欲。提出问题、追寻答案、挑战常规思维模式，这样可以激发创新和深入思考的能力。请一定要找到自己的兴趣，最好是能够用它为生，这样才能有动力长久做下去。\n\n③ 培养批判性思维：学会质疑和分析信息，不盲从、不轻信。培养批判性思维，可以帮助你更好地理解问题的本质和逻辑，从而提出更深入的观点和解决方案。这也是我十分推崇的，也是能够有伟大创新的基础。\n\n④ 增强问题解决能力：培养解决问题的能力，不断寻找解决方案并进行实践。通过解决各种难题和挑战，你可以锻炼思维的灵活性和创造性。我一般学到某个具体的知识的话就会及时拿去使用，比如学到一个英语单词，我就会用它组成一个句子，或者学到一个编程的知识点，我就会想在实际项目中该如何使用。\n\n⑤ 培养系统思考能力：学会将问题和信息放入更广阔的背景中，观察事物之间的相互关系和影响。系统思考可以帮助你发现更深层次的模式和洞察力。\n\n⑥ 练习思考技巧：例如，概念映射、逆向思考、侧重点转移等思考技巧可以帮助你拓宽思维的范围和深度。\n\n⑦ 培养创造性思维：鼓励自由思考和想象力的发挥。尝试不同的观点、方法和解决方案，挑战传统思维模式，寻找新的创意和创新。这一点是建立在拥有批判性思维上，有了批判性思维，创造性思维就会在不知不觉中诞生。\n\n⑧ 培养耐心和毅力：深入思考和解决复杂问题需要耐心和毅力。不断锻炼这些品质，坚持思考和学习的过程。如果你看到这里，相信你已经具备了这个特质了，恭喜你已经具备了一半达成的可能性了。\n\n最后，请牢记，你是最棒的，找到适合自己的道路，没有标准答案。\n\n",
        itemName: '爱心斯坦大脑',
        itemImg: '../../static/source/einstein.png',
      });
    }
  },
  // 点击关闭弹出内容
  closePopup() {
    this.setData({
      einsteinArticle: false,
    });
  },
  // 点击轻航填字海体验提示
  showTicket() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n仅限进入轻航填字海关卡 1 次，使用后就无法再兑换咯。',
      itemName: '轻航填字海兑换说明',
      itemImg: '../../static/source/twocard.png'
    });
  },
  // 点击兑换轻航填字海体验
  exchangeTicket() {
    let getGameTwoTicket = wx.getStorageSync('getGameTwoTicket');
    if (getGameTwoTicket == 0) {
      this.popupPublic(this.data.priceArray.ticketPrice, this.data.priceArray.ticketTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n已经兑换过了，仅限兑换一次哦～～',
        itemName: '轻航填字海兑换说明',
        itemImg: '../../static/source/twocard.png'
      });
    }
  },
  // 点击选择知我意体验提示
  showTicketTwo() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n仅限进入选择知我意关卡 1 次，使用后就无法再兑换咯。',
      itemName: '选择知我意兑换说明',
      itemImg: '../../static/source/twocard.png'
    });
  },
  // 点击兑换选择知我意体验
  exchangeTicketTwo() {
    let getGameThreeTicket = wx.getStorageSync('getGameThreeTicket');
    if (getGameThreeTicket == 0) {
      this.popupPublic(this.data.priceArray.ticketTwoPrice, this.data.priceArray.ticketTwoTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n已经兑换过了，仅限兑换一次哦～～',
        itemName: '选择知我意兑换说明',
        itemImg: '../../static/source/twocard.png'
      });
    }
  },
  // 点击淘宝商品1分购提示
  showTaobaoOneCent() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n通过兑换，可以获得在淘宝每天1分购1商品资格，部分幸运用户可以至少 5 天。',
      itemName: '淘宝商品1分购兑换说明',
      itemImg: '../../static/source/taobao.png'
    });
  },
  // 点击兑换淘宝商品1分购
  exchangeTaobao() {
    let getTaobao = wx.getStorageSync('taobao');
    if (getTaobao == 0) {
      this.popupPublic(this.data.priceArray.taobaoPrice, this.data.priceArray.taobaoTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：1cent，即可获得。',
        itemName: '淘宝商品1分购兑换成功',
        itemImg: '../../static/source/taobao.png'
      });
    }
  },
  // 点击购物报销机提示
  showReimbursementTips() {
    this.setData({
      einsteinArticle: true,
      showTips: '\n通过兑换，可以获得在日常购物（比如某宝，某东，某猫）后，每日获得一次报销购物款的方法。',
      itemName: '购物报销机兑换说明',
      itemImg: '../../static/source/reimbursement.png'
    });    
  },
  // 点击兑换购物报销机
  exchangeReimbursement() {
    let getReimbursement = wx.getStorageSync('reimbursement');
    if (getReimbursement == 0) {
      this.popupPublic(this.data.priceArray.reimbursementPrice, this.data.priceArray.reimbursementTitle);
    } else {
      this.setData({
        einsteinArticle: true,
        showTips: '\n请关注微信公众号行运设计师，之后发送消息：报销机，即可获得。',
        itemName: '物报销机兑换成功',
        itemImg: '../../static/source/reimbursement.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: `\n恭喜你，中奖了，奖金是${lotteryMoney}钱币！`,
                itemName: '彩票开奖',
                itemImg: '../../static/source/lottery.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: `\n天啊，原地飞升，获得${experienceValue}经验值！`,
                itemName: '经验卡开奖',
                itemImg: '../../static/source/lottery.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：9527，即可获得。\n\n',
                itemName: '雅思考试资料兑换成功',
                itemImg: '../../static/source/exam.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：2048，即可获得。\n\n',
                itemName: '随机电影字幕兑换成功',
                itemImg: '../../static/source/ticket.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：13888，即可获得。\n\n',
                itemName: '话费优惠信息兑换成功',
                itemImg: '../../static/source/smartphone.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：GPT4Free，即可获得。\n\n',
                itemName: '离线GPT4兑换成功',
                itemImg: '../../static/source/gpt4.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
              });
            }
          } else if (_publicTitle == "爱因斯坦大脑") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('einsteinBrain', 1);
              self.setData({
                einsteinArticle: true,
                showTips: "\n哎呦，没想到你真的兑换成功了，太强了吧！那么恭喜你，你已经获得了爱因斯坦大脑般思维方式的基础，那就是坚持。\n\n之所以说在现实中可能获得爱因斯坦般思考能力，关键是如何实现，没有一条固定的路径。\n\n以我自己的经验，简单来说，乐观自信，终身学习，形成自己的科学方法论，步入一条没人走过的道路，书写自己的人生传奇。\n\n获得类似爱因斯坦大脑般的思考能力是一个复杂的目标，它涉及到多个方面，包括学习、思维习惯和认知能力：\n\n① 持续学习：不断学习新的知识和技能，从多个领域获取信息。广泛的知识背景可以帮助你建立更多的关联和视角，促进创造性的思考。\n\n② 培养好奇心：保持对世界的好奇心和求知欲。提出问题、追寻答案、挑战常规思维模式，这样可以激发创新和深入思考的能力。请一定要找到自己的兴趣，最好是能够用它为生，这样才能有动力长久做下去。\n\n③ 培养批判性思维：学会质疑和分析信息，不盲从、不轻信。培养批判性思维，可以帮助你更好地理解问题的本质和逻辑，从而提出更深入的观点和解决方案。这也是我十分推崇的，也是能够有伟大创新的基础。\n\n④ 增强问题解决能力：培养解决问题的能力，不断寻找解决方案并进行实践。通过解决各种难题和挑战，你可以锻炼思维的灵活性和创造性。我一般学到某个具体的知识的话就会及时拿去使用，比如学到一个英语单词，我就会用它组成一个句子，或者学到一个编程的知识点，我就会想在实际项目中该如何使用。\n\n⑤ 培养系统思考能力：学会将问题和信息放入更广阔的背景中，观察事物之间的相互关系和影响。系统思考可以帮助你发现更深层次的模式和洞察力。\n\n⑥ 练习思考技巧：例如，概念映射、逆向思考、侧重点转移等思考技巧可以帮助你拓宽思维的范围和深度。\n\n⑦ 培养创造性思维：鼓励自由思考和想象力的发挥。尝试不同的观点、方法和解决方案，挑战传统思维模式，寻找新的创意和创新。这一点是建立在拥有批判性思维上，有了批判性思维，创造性思维就会在不知不觉中诞生。\n\n⑧ 培养耐心和毅力：深入思考和解决复杂问题需要耐心和毅力。不断锻炼这些品质，坚持思考和学习的过程。如果你看到这里，相信你已经具备了这个特质了，恭喜你已经具备了一半达成的可能性了。\n\n最后，请牢记，你是最棒的，找到适合自己的道路，没有标准答案。\n\n",
                itemName: '爱心斯坦大脑',
                itemImg: '../../static/source/einstein.png',
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
              });
            }
          } else if (_publicTitle == "轻航填字海体验") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('getGameTwoTicket', 1);
              // 将体验权限设置成缓存
              wx.setStorageSync('goToGameTwoLimit', 'Yes')
              self.setData({
                einsteinArticle: true,
                showTips: '\n恭喜你获得轻航填字海关卡体验资格！',
                itemName: '轻航填字海兑换成功',
                itemImg: '../../static/source/twocard.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
              });
            }
          } else if (_publicTitle == "选择知我意体验") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('getGameThreeTicket', 1);
              // 将体验权限设置成缓存
              wx.setStorageSync('goToGameThreeLimit', 'Yes')
              self.setData({
                einsteinArticle: true,
                showTips: '\n恭喜你获得选择知我意关卡体验资格。',
                itemName: '选择知我意兑换成功',
                itemImg: '../../static/source/twocard.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
              });
            }
          } else if (_publicTitle == "淘宝商品1分购") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('taobao', 1);
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：1cent，即可获得。',
                itemName: '淘宝商品1分购兑换成功',
                itemImg: '../../static/source/taobao.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
              });
            }
          } else if (_publicTitle == "购物报销机") {
            if (self.data.moenyTotal >= _publicPrice) {
              self.setData({
                moenyTotal: (self.data.moenyTotal - _publicPrice).toFixed(2)
              });
              // 将剩余钱币数量存储到缓存中
              wx.setStorageSync('money', Number(self.data.moenyTotal));
              // 将兑换成功后资格储存到缓存中
              wx.setStorageSync('reimbursement', 1);
              self.setData({
                einsteinArticle: true,
                showTips: '\n请关注微信公众号行运设计师，之后发送消息：报销机，即可获得。',
                itemName: '购物报销机兑换成功',
                itemImg: '../../static/source/reimbursement.png'
              });
            } else {
              self.setData({
                einsteinArticle: true,
                showTips: `\n① 通过诚实刷单词、轻航填字海、选择知我意中获得\n\n② 通过策略谋划页面中的任务大厅获取\n\n③ 通过兑换市集中的彩票获得，但是也有可能损失钱币`,
                itemName: '钱币不足兑换怎么办',
                itemImg: '../../static/source/coin.png'
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
    const values = [0.1, 0.5, 1, 1.5, 2, 5, 10, 20, 100];
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