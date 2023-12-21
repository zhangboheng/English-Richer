const innerAudioContext = wx.getBackgroundAudioManager();
Page({
  data: {
    randomText: '新版本发布，旋转 Logo 解锁后新增背景播放，即使退出也能听伴音咯～～',
    textCollection: [
      '使用小技巧，开启旅途中的小齿轮点击后可以进入策划谋略页面哦～～',
      '想要获取更多的经验和钱币？可以通过交换市集、关卡和任务大厅获取哦～～',
      '兑换市集不定期增加各种有用，有料，有趣的物品，可以用钱币兑换～～',
      '解限卡可将温故知新容量扩充为2000，可以在兑换市集兑换～～',
      '多利用温故知新可以帮助你更快掌握不会的单词哦～～',
      '新版本发布，旋转 Logo 解锁后新增背景播放，即使退出也能听伴音咯～～',
      '伴音彩蛋，首页按住 Logo 顺时针旋转一周，三次即可解锁，点击 Logo 可停止～～'
    ],
    showComponent: false,
    showTips: "\n英语大富翁主旨是辅佐用户学习英语，通过一个个关卡，寓教于乐，提高了英语水平，收获了人生财富。\n\n1.点击开启旅途后，可以进入正式故事，先设置名字，初始等级和财富都是0，后续随着掌握的单词越多，等级和财富自然就随之变化。\n\n2.等级是通往下一关卡的重要凭据，而财富则是用来在兑换市集用来兑换各种道具或者礼物，比如彩票，经验卡，考试资料，英语字幕，话费优惠信息，优惠电影票，满减商品等。\n\n3.获取经验和钱币的方式除了通过刷单词外，还可以通过兑换市集以及任务大厅获取。\n\n4.英语水平目前包括小学、初中、高中、大学英语四级、大学英语六级、考研、托福和 SAT，修改适配水平请前往策划谋略页面。\n\n5.伴音彩蛋，首页按住 Logo 顺时针旋转一周，三次即可解锁，点击 Logo 可停止。\n\n6.一切数据都保存在本机，如果清空数据后，所有数据也会清除。\n\n",
    startX: 0,
    startY: 0,
    rotate: 0,
    rotationCount: 0,
    radioList: [
      {
        name:'新鸳鸯蝴蝶梦', 
        url:'http://m701.music.126.net/20231222002156/16e6520b2daa28ff848377638f4bb36c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11968787803/3ad5/4d1a/988d/7f0ad472f67fa3b869e447a181540fc3.mp3'
      },
      {
        name:'稻香', 
        url:'http://m701.music.126.net/20231222005657/86989a21ab825270eb1af77fa6e33343/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/31283877685/25c5/8c0f/db9e/316398d3bb1f84c4357bede077c0bd37.mp3'
      },
      {
        name:'Cry On My Shoulder', 
        url:'http://m8.music.126.net/20231222005817/a2b3ab59b4c3d0b9cfbbe4169b405e74/ymusic/1d6a/667b/8881/0c2be58347dcf11f9069a875c1e490e4.mp3'
      },
      {
        name:"Penguin's Game", 
        url:'http://m801.music.126.net/20231222010038/d6992a837e23668b5eb3e34e85e80e61/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12119649638/bb4e/eae4/9b16/72617d4fa9b6492bce9d57acc94bb288.mp3'
      },
      {
        name:"I Love You", 
        url:'http://m801.music.126.net/20231222012114/cff57c182a9a8f8fb806a31debde5625/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1499551634/d641/cfe0/5d21/b0868329320b85f5fa362c2fdcfaf5fa.mp3'
      },
      {
        name:"Baby", 
        url:'http://m7.music.126.net/20231222010210/c7ba3220fbc9b5962268a2a6c5fa9804/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3058623727/8258/fc50/2830/a20f09d344c0f07e92c1c39572bc995a.mp3'
      },
      {
        name:"Butter-Fly", 
        url:'http://m8.music.126.net/20231222010406/7de704598cc65a365f6d4d67b4da42b7/ymusic/788b/07b3/a1f5/ac74a6c66c3269b4a64fa184ffa088c9.mp3'
      },
      {
        name:"Butterfly", 
        url:'http://m801.music.126.net/20231222010702/60291106d31ff02ba167d698aa0385f3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29280687936/a0e3/b604/68ee/d83cb02f87dc660dfb5497242c377286.mp3'
      },
      {
        name:"My Heart Will Go On", 
        url:'http://m701.music.126.net/20231222010851/176f58161d7d503fb03db62f41c79719/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32090772580/6a09/55e3/ce5c/28078fa6de6a9aff0629f6da87935b6a.mp3'
      },
      {
        name:"Big Big World", 
        url:'http://m701.music.126.net/20231222011011/82e88f4d1394c369dec41a2ad556fa3a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/19289263836/9813/b379/e5cf/96789c5637a0a51218ab885e0a59cb13.mp3'
      },
      {
        name:"Because of You", 
        url:'http://m701.music.126.net/20231222011138/e85fef6942ef6b55434df83d20f2f914/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/22259853975/3139/b890/4191/9f60f6a4563be121c789ad1dcb48776c.mp3'
      },
      {
        name:"See You Again", 
        url:'http://m701.music.126.net/20231222011423/771277f60cbf77ed16a5c94d294ef42f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/17311019197/e6bb/ccb7/d3a0/758c57e5684288f9ed9f1a03becf41fd.mp3'
      },
      {
        name:"Take Me To Your Heart", 
        url:'http://m701.music.126.net/20231222011546/7405a6db5dfb5a36009456b06e0e2d7d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/25981401589/ccd6/fe75/2eb7/2d9e99a073226c034c2eca55dcf3014b.mp3'
      },
      {
        name:"Apologize", 
        url:'http://m801.music.126.net/20231222011836/3c96b558783996013131a0bff1a76146/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/18858963379/035f/0241/a738/b7277dbf4471135e26941029e4a726b3.mp3'
      },
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
    var rotationCount = this.data.rotationCount;
    var rotate = this.data.rotate;
    if (rotationCount === 2 && rotate >= 0) {
      this.continue();
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
  // 获得结束后继续播放音乐的公共方法
  continue: function() {
    let getNum = Math.floor(Math.random()*this.data.radioList.length);
    innerAudioContext.title = this.data.radioList[getNum].name;
    innerAudioContext.src = this.data.radioList[getNum].url;
    innerAudioContext.referrerPolicy = "origin";
    innerAudioContext.pause();
    innerAudioContext.play();
    innerAudioContext.onEnded(()=>{
      this.continue();
    })
  },
  // 点击停止音乐
  stopMusic: function () {
    innerAudioContext.pause();
    // 监听播放器播放事件
    this.setData({
      rotationCount: 0
    });
  }
})