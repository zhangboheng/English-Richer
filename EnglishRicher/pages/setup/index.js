import {
  removeNegativeOneFromList
} from '../../utils/algorithm'
import {
  backgroundAudio
} from '../../utils/global'
var database = require('./source/radio');
Page({
  data: {
    randomText: '新版本 V 2.6.2 发布，新增单词 AI 学习建议功能，在各个关卡中点击左上角的图标可以召唤～～',
    textCollection: [
      '伯衡君制作的微信小游戏小恐龙不要停已经上架，欢迎试玩～～',
      '使用小技巧，开启旅途中的小齿轮点击后可以进入策划谋略页面哦～～',
      '想要获取更多的经验和钱币？可以通过交换市集、关卡和任务大厅获取哦～～',
      '兑换市集不定期增加各种有用，有料，有趣的物品，可以用钱币兑换～～',
      '解限卡可将温故知新容量扩充为2000，可以在兑换市集兑换～～',
      '多利用温故知新可以帮助你更快掌握不会的单词哦～～',
      '伴音彩蛋可以支持背景播放啦，操作有所变化，请看使用说明解释～～'
    ],
    showComponent: false,
    showAlbum: false,
    showTips: "\n英语大富翁主旨是辅佐用户学习英语，通过一个个关卡，寓教于乐，提高了英语水平，收获了人生财富。\n\n1.点击开启旅途后，可以进入正式故事，先设置昵称，初始等级和财富都是0，后续随着掌握的单词越多，等级和财富自然就随之变化。\n\n2.等级是通往下一关卡的重要凭据，而虚拟钱币则是用来在兑换市集用来兑换各种实用情报、道具或者实物商品，比如彩票，经验卡，考试资料，英语字幕，话费优惠信息，优惠电影票，满减商品等。\n\n3.获取经验和虚拟钱币的方式除了通过刷单词外，还可以通过兑换市集以及任务大厅获取。\n\n4.英语水平目前包括小学、初中、高中、大学英语四级、大学英语六级、考研、托福和 SAT，修改适配水平请前往策划谋略页面。\n\n5.不会的单词可以前往策划谋略页面中的温故知新进行复习。\n\n6.伴音彩蛋，在初始页面按住 Logo 顺时针旋转一圈，依此三次，即可解锁，之后点击 Logo 是进行切换，长按 Logo 是停止播放。\n\n7.一切数据都保存在本机，如果清空数据后，所有数据也会清除。\n\n",
    startX: 0,
    startY: 0,
    rotate: 0,
    rotationCount: 0,
    radioList: database.postData.main,
    radioListTwo: database.postDataTwo.main,
    options: '',
  },
  onLoad() {
    this.updateRandomText();
    try{
      let elementaryList = wx.getStorageSync('elementaryList');
      if (elementaryList && Array.isArray(elementaryList)) {
        elementaryList = removeNegativeOneFromList(elementaryList);
        wx.setStorageSync('elementaryList', elementaryList);
      }
      let juniorList = wx.getStorageSync('juniorList');
      if (juniorList && Array.isArray(juniorList)) {
        juniorList = removeNegativeOneFromList(juniorList);
        wx.setStorageSync('juniorList', juniorList);
      }
      let highList = wx.getStorageSync('highList');
      if (highList && Array.isArray(highList)) {
        highList = removeNegativeOneFromList(highList);
        wx.setStorageSync('highList', highList);
      }
      let cet4List = wx.getStorageSync('cet4List');
      if (cet4List && Array.isArray(cet4List)) {
        cet4List = removeNegativeOneFromList(cet4List);
        wx.setStorageSync('cet4List', cet4List);
      }
      let cet6List = wx.getStorageSync('cet6List');
      if (cet6List && Array.isArray(cet6List)) {
        cet6List = removeNegativeOneFromList(cet6List);
        wx.setStorageSync('cet6List', cet6List);
      }
      let postgraduateList = wx.getStorageSync('postgraduateList');
      if (postgraduateList && Array.isArray(postgraduateList)) {
        postgraduateList = removeNegativeOneFromList(postgraduateList);
        wx.setStorageSync('postgraduateList', postgraduateList);
      }
      let toelfOneList = wx.getStorageSync('toelfOneList');
      if (toelfOneList && Array.isArray(toelfOneList)) {
        toelfOneList = removeNegativeOneFromList(toelfOneList);
        wx.setStorageSync('toelfOneList', toelfOneList);
      }
      let toelfTwoList = wx.getStorageSync('toelfTwoList');
      if (toelfTwoList && Array.isArray(toelfTwoList)) {
        toelfTwoList = removeNegativeOneFromList(toelfTwoList);
        wx.setStorageSync('toelfTwoList', toelfTwoList);
      }
      let satList = wx.getStorageSync('satList');
      if (satList && Array.isArray(satList)) {
        satList = removeNegativeOneFromList(satList);
        wx.setStorageSync('satList', satList);
      }
      let elementaryTwoList = wx.getStorageSync('elementaryTwoList');
      if (elementaryTwoList && Array.isArray(elementaryTwoList)) {
        elementaryTwoList = removeNegativeOneFromList(elementaryTwoList);
        wx.setStorageSync('elementaryTwoList', elementaryTwoList);
      }
      let juniorTwoList = wx.getStorageSync('juniorTwoList');
      if (juniorTwoList && Array.isArray(juniorTwoList)) {
        juniorTwoList = removeNegativeOneFromList(juniorTwoList);
        wx.setStorageSync('juniorTwoList', juniorTwoList);
      }
      let highTwoList = wx.getStorageSync('highTwoList');
      if (highTwoList && Array.isArray(highTwoList)) {
        highTwoList = removeNegativeOneFromList(highTwoList);
        wx.setStorageSync('highTwoList', highTwoList);
      }
      let cet4TwoList = wx.getStorageSync('cet4TwoList');
      if (cet4TwoList && Array.isArray(cet4TwoList)) {
        cet4TwoList = removeNegativeOneFromList(cet4TwoList);
        wx.setStorageSync('cet4TwoList', cet4TwoList);
      }
      let cet6TwoList = wx.getStorageSync('cet6TwoList');
      if (cet6TwoList && Array.isArray(cet6TwoList)) {
        cet6TwoList = removeNegativeOneFromList(cet6TwoList);
        wx.setStorageSync('cet6TwoList', cet6TwoList);
      }
      let postgraduateTwoList = wx.getStorageSync('postgraduateTwoList');
      if (postgraduateTwoList && Array.isArray(postgraduateTwoList)) {
        postgraduateTwoList = removeNegativeOneFromList(postgraduateTwoList);
        wx.setStorageSync('postgraduateTwoList', postgraduateTwoList);
      }
      let toelfOneTwoList = wx.getStorageSync('toelfOneTwoList');
      if (toelfOneTwoList && Array.isArray(toelfOneTwoList)) {
        toelfOneTwoList = removeNegativeOneFromList(toelfOneTwoList);
        wx.setStorageSync('toelfOneTwoList', toelfOneTwoList);
      }
      let toelfTwoTwoList = wx.getStorageSync('toelfTwoTwoList');
      if (toelfTwoTwoList && Array.isArray(toelfTwoTwoList)) {
        toelfTwoTwoList = removeNegativeOneFromList(toelfTwoTwoList);
        wx.setStorageSync('toelfTwoTwoList', toelfTwoTwoList);
      }
      let satTwoList = wx.getStorageSync('satTwoList');
      if (satTwoList && Array.isArray(satTwoList)) {
        satTwoList = removeNegativeOneFromList(satTwoList);
        wx.setStorageSync('satTwoList', satTwoList);
      }
      let elementaryThreeList = wx.getStorageSync('elementaryThreeList');
      if (elementaryThreeList && Array.isArray(elementaryThreeList)) {
        elementaryThreeList = removeNegativeOneFromList(elementaryThreeList);
        wx.setStorageSync('elementaryThreeList', elementaryThreeList);
      }
      let juniorThreeList = wx.getStorageSync('juniorThreeList');
      if (juniorThreeList && Array.isArray(juniorThreeList)) {
        juniorThreeList = removeNegativeOneFromList(juniorThreeList);
        wx.setStorageSync('juniorThreeList', juniorThreeList);
      }
      let highThreeList = wx.getStorageSync('highThreeList');
      if (highThreeList && Array.isArray(highThreeList)) {
        highThreeList = removeNegativeOneFromList(highThreeList);
        wx.setStorageSync('highThreeList', highThreeList);
      }
      let cet4ThreeList = wx.getStorageSync('cet4ThreeList');
      if (cet4ThreeList && Array.isArray(cet4ThreeList)) {
        cet4ThreeList = removeNegativeOneFromList(cet4ThreeList);
        wx.setStorageSync('cet4ThreeList', cet4ThreeList);
      }
      let cet6ThreeList = wx.getStorageSync('cet6ThreeList');
      if (cet6ThreeList && Array.isArray(cet6ThreeList)) {
        cet6ThreeList = removeNegativeOneFromList(cet6ThreeList);
        wx.setStorageSync('cet6ThreeList', cet6ThreeList);
      }
      let postgraduateThreeList = wx.getStorageSync('postgraduateThreeList');
      if (postgraduateThreeList && Array.isArray(postgraduateThreeList)) {
        postgraduateThreeList = removeNegativeOneFromList(postgraduateThreeList);
        wx.setStorageSync('postgraduateThreeList', postgraduateThreeList);
      }
      let toelfOneThreeList = wx.getStorageSync('toelfOneThreeList');
      if (toelfOneThreeList && Array.isArray(toelfOneThreeList)) {
        toelfOneThreeList = removeNegativeOneFromList(toelfOneThreeList);
        wx.setStorageSync('toelfOneThreeList', toelfOneThreeList);
      }
      let toelfTwoThreeList = wx.getStorageSync('toelfTwoThreeList');
      if (toelfTwoThreeList && Array.isArray(toelfTwoThreeList)) {
        toelfTwoThreeList = removeNegativeOneFromList(toelfTwoThreeList);
        wx.setStorageSync('toelfTwoThreeList', toelfTwoThreeList);
      }
      let satThreeList = wx.getStorageSync('satThreeList');
      if (satThreeList && Array.isArray(satThreeList)) {
        satThreeList = removeNegativeOneFromList(satThreeList);
        wx.setStorageSync('satThreeList', satThreeList);
      }
    }catch(e){
      console.info('启动页出现问题，请注意～～')
    }
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
  // 点击弹出使用说明
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
    var rotationCount = this.data.rotationCount;
    var rotate = this.data.rotate;
    if (rotationCount === 2 && rotate >= 0) {
      try {
        const res = wx.getSystemInfoSync();
        if (res.platform == "windows" || res.platform == "mac" || res.platform == "devtools") {
          // PC端
          let getNum = Math.floor(Math.random()*this.data.radioListTwo.length);
          backgroundAudio.title = this.data.radioListTwo[getNum].label;
          backgroundAudio.protocol = "hls";
          backgroundAudio.src = this.data.radioListTwo[getNum].url;
          this.setData({
            options: this.data.radioListTwo.map(x=>x.label),
          });
        } else {
          // 移动端
          let getNum = Math.floor(Math.random()*this.data.radioList.length);
          backgroundAudio.title = this.data.radioList[getNum].label;
          backgroundAudio.protocol = "hls";
          backgroundAudio.src = this.data.radioList[getNum].url;
          this.setData({
            options: this.data.radioList.map(x=>x.label),
          });
        }
        backgroundAudio.play();
      } catch (e) {
        // 获取系统信息失败
        let getNum = Math.floor(Math.random()*this.data.radioList.length);
        backgroundAudio.title = this.data.radioList[getNum].label;
        backgroundAudio.protocol = "hls";
        backgroundAudio.src = this.data.radioList[getNum].url;
        backgroundAudio.play();
      }
      // 监听播放器播放事件
      this.setData({
        rotationCount: 3,
        showAlbum: true
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
  // 点击播放其他随机音乐
  randomMusicNext: function () {
    if (this.data.rotationCount >= 3) {
      try {
        const res = wx.getSystemInfoSync();
        if (res.platform == "windows" || res.platform == "mac" || res.platform == "devtools") {
          let getNum = Math.floor(Math.random()*this.data.radioListTwo.length);
          backgroundAudio.title = this.data.radioListTwo[getNum].label;
          backgroundAudio.protocol = "hls";
          backgroundAudio.src = this.data.radioListTwo[getNum].url;
        } else {
          // 移动端
          let getNum = Math.floor(Math.random()*this.data.radioList.length);
          backgroundAudio.title = this.data.radioList[getNum].label;
          backgroundAudio.protocol = "hls";
          backgroundAudio.src = this.data.radioList[getNum].url;
        }
        backgroundAudio.play();
      } catch (e) {
        // 获取系统信息失败
        let getNum = Math.floor(Math.random()*this.data.radioList.length);
        backgroundAudio.title = this.data.radioList[getNum].label;
        backgroundAudio.protocol = "hls";
        backgroundAudio.src = this.data.radioList[getNum].url;
        backgroundAudio.play();
      }
      this.setData({
        showAlbum: true
      });
    }
  },
  // 长按关闭音乐
  stopMusic: function() {
    backgroundAudio.pause();
    backgroundAudio.stop();
    this.setData({
      showAlbum: false
    });
  },
  // 广播电台选择后更改
  onPickerChange: function(e) {
    const index = e.detail.value;
    const selectedOption = this.data.options[index];
    try {
      const res = wx.getSystemInfoSync();
      if (res.platform == "windows" || res.platform == "mac" || res.platform == "devtools") {
        let getItem = this.data.radioListTwo.filter(item=>item.label == selectedOption)
        backgroundAudio.title = getItem[0].label;
        backgroundAudio.protocol = "hls";
        backgroundAudio.src = getItem[0].url;
      } else {
        // 移动端
        let getItem = this.data.radioList.filter(item=>item.label == selectedOption);
        backgroundAudio.title = getItem[0].label;
        backgroundAudio.protocol = "hls";
        backgroundAudio.src = getItem[0].url;
      }
      backgroundAudio.play();
    } catch (e) {
      // 获取系统信息失败
      let getItem = this.data.radioList.filter(item=>item.label == selectedOption);
      backgroundAudio.title = getItem[0].label;
      backgroundAudio.protocol = "hls";
      backgroundAudio.src = getItem[0].url;
      backgroundAudio.play();
    }
  }
})