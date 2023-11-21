Page({
  data: {
    randomText: 'V2.1.3发布，每个关卡增加了彩蛋哟～～',
    textCollection: [
      '使用小技巧，开启旅途中的小齿轮点击后可以进入策划谋略页面哦～～',
      '想要获取更多的经验和钱币？可以通过关卡和每日任务获取哦～～',
      '兑换市集不定期增加各种有用，有料，有趣的物品，可以用钱币兑换～～',
      '多利用温故知新可以帮助你更快掌握不会的单词哦～～',
    ],
    showComponent: false,
    showTips: "\n英语大富翁主旨是辅佐用户学习英语，通过一个个关卡，寓教于乐，提高了英语水平，收获了财富信息。\n\n1.点击开启旅途后，可以进入正式故事，先设置名字，初始等级和财富都是0，后续随着掌握的单词越多，等级和财富自然就随之变化。\n\n2.等级是通往下一关卡的重要凭据，而财富则是用来在兑换市集用来兑换各种实用情报，比如考试资料，英语字幕，话费优惠信息，优惠电影票，满减商品等。\n\n3.获取经验和钱币的方式除了通过刷单词外，还可以通过每日任务获取。\n\n4.后续随着开发进展会有更多惊喜等待你的挖掘。\n\n5.一切数据都保存在本机，如果清空数据后，所有数据也会清除。\n\n"
  },
  onLoad() {
    this.updateRandomText();
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  // 更新随机展示公告
  updateRandomText() {
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.textCollection.length);
      const randomText = this.data.textCollection[randomIndex];
      this.setData({
        randomText: randomText
      });
    }, 16000);
  },
  // 点击跳转后到首页
  gotoHome: function () {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  // 点击跳转到兑换市集
  gotoExchange: function () {
    wx.redirectTo({
      url: '/pages/exchange/index' // 跳转到目标页面的路径
    });
  },
  // 点击弹出玩法说明
  gotoIntroduce: function () {
    this.setData({
      showComponent: !this.data.showComponent
    })
  },
  // 点击
  closePopup() {
    this.setData({
      showComponent: false,
    });
  },
})