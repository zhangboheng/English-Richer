const innerAudioContext = wx.createInnerAudioContext({
  useWebAudioImplement: false
});
var videoContext = ''  // 获取视频上下
Page({
  data: {
    randomText: 'V2.3.4 发布，温故知新增加复习模式更多入口～～',
    textCollection: [
      '使用小技巧，开启旅途中的小齿轮点击后可以进入策划谋略页面哦～～',
      '想要获取更多的经验和钱币？可以通过交换市集、关卡和任务大厅获取哦～～',
      '兑换市集不定期增加各种有用，有料，有趣的物品，可以用钱币兑换～～',
      '解限卡可将温故知新容量扩充为2000，可以在兑换市集兑换～～',
      '多利用温故知新可以帮助你更快掌握不会的单词哦～～',
      'V2.3.4 发布，温故知新增加复习模式更多入口～～',
      '伴音彩蛋，首页按住 Logo 顺时针旋转一周，三次即可解锁，点击 Logo 可停止～～'
    ],
    showComponent: false,
    showTips: "\n英语大富翁主旨是辅佐用户学习英语，通过一个个关卡，寓教于乐，提高了英语水平，收获了财富信息。\n\n1.点击开启旅途后，可以进入正式故事，先设置名字，初始等级和财富都是0，后续随着掌握的单词越多，等级和财富自然就随之变化。\n\n2.等级是通往下一关卡的重要凭据，而财富则是用来在兑换市集用来兑换各种实用情报，比如彩票，经验卡，考试资料，英语字幕，话费优惠信息，优惠电影票，满减商品等。\n\n3.获取经验和钱币的方式除了通过刷单词外，还可以通过兑换市集以及任务大厅获取。\n\n4.英语水平目前包括小学、初中、高中、大学英语四级、大学英语六级、考研、托福和 SAT，修改适配水平请前往策划谋略页面。\n\n5.伴音彩蛋，首页按住 Logo 顺时针旋转一周，三次即可解锁，点击 Logo 可停止。\n\n6.一切数据都保存在本机，如果清空数据后，所有数据也会清除。\n\n",
    startX: 0,
    startY: 0,
    rotate: 0,
    rotationCount: 0,
    musicLink:'',
    radioList: [
      'https://lhttp.qtfm.cn/live/5022308/64k.mp3',
      'https://lhttp.qingting.fm/live/4581/64k.mp3',
      'https://lhttp.qtfm.cn/live/20500153/64k.mp3',
      'http://lhttp.qingting.fm/live/273/64k.mp3',
      'https://lhttp.qtfm.cn/live/20500181/64k.mp3',
      'http://lhttp.qingting.fm/live/5021743/64k.mp3',
      'https://lhttp.qtfm.cn/live/21209/64k.mp3'
    ]
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
  // 触摸开始事件
  onTouchStart: function (event) {
    this.setData({
      startX: event.touches[0].clientX,
      startY: event.touches[0].clientY
    });
  },
  // 触摸移动事件
  onTouchMove: function (event) {
    var currentX = event.touches[0].clientX;
    var currentY = event.touches[0].clientY;
    var startX = this.data.startX;
    var startY = this.data.startY;
    // 计算旋转角度
    var rotate = Math.atan2(currentY - startY, currentX - startX) * 180 / Math.PI;
    this.setData({
      rotate: rotate
    });
  },
  // 触摸结束事件
  onTouchEnd: function () {
    // 检查是否完成三圈旋转
    videoContext = wx.createVideoContext('myVideo', this);
    var rotationCount = this.data.rotationCount;
    var rotate = this.data.rotate;
    var that = this;
    if (rotationCount === 2 && rotate >= 0) {
      let getNum = Math.floor(Math.random()*this.data.radioList.length);
      innerAudioContext.src = that.data.radioList[getNum];
      let links = that.data.radioList[getNum];
      wx.getSystemInfo({
        success: function(res) {
          if (res.platform === 'ios') {
            innerAudioContext.stop();
            innerAudioContext.play();
          } else {
            that.setData({
              musicLink: links
            })
            videoContext.pause();
            videoContext.play();
          }
        }
      });
      // 监听播放器播放事件
      this.setData({
        rotationCount: 0
      });
    } else {
      // 更新旋转次数
      this.setData({
        rotationCount: rotationCount + 1
      });
    }
    // 清空旋转角度和计数器
    this.setData({
      rotate: 0
    });
  },
  // 点击停止音乐
  stopMusic: function () {
    wx.getSystemInfo({
      success: function(res) {
        if (res.platform === 'ios') {
          innerAudioContext.stop();
        } else {
          videoContext.pause();
        }
      }
    });
    // 监听播放器播放事件
    this.setData({
      rotationCount: 0
    });
  }
})