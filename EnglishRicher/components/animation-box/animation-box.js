Component({
  options: {
    addGlobalClass: true
  },
  data: {
    giftAnimation: {}, // 动画实例
    cheerUp: '',
    cheerUpList: [
      '学习如逆水行舟，不进则退', 
      '知之为知之，不知为不知，是知也', 
      '记住一个单词让你的财富增加一分', 
      '加油，你正在书写自己的传奇',
      '英语像弹簧，你弱它就强',
      '学好英语，带你走进更广阔天地',
      '相信我，你不是一个人在奋斗',
      '学习不孤单，同辈常伴你左右',
      '站在最高处，一览无余',
      '用心领悟，用行动证明，学习是不断进步的奥秘',
      '学英语如玩游戏，起初易挫败，然坚持会通关',
      '和英语交朋友，别总想着语法，随便说说也挺好'
    ],
  },
  lifetimes: {
    ready() {
      // 设置随机数随机选择一句话
      const randomNumText = this.data.cheerUpList[Math.floor(Math.random() * this.data.cheerUpList.length)];
      // 将值填入组件的 input
      this.setData({
        cheerUp: randomNumText
      });
      this.initGiftAnimation();
      this.startGiftAnimation();
    },
    show() {
      this.startGiftAnimation();
    },
    hide() {
      this.stopGiftAnimation();
    },
  },
  methods: {
    initGiftAnimation() {
      let allCondition = ['linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out', 'step-start', 'step-end'];
      let index = Math.floor(Math.random() * allCondition.length);
      // 创建一个从左到右的动画
      this.data.giftAnimation = wx.createAnimation({
        duration: 10000,
        timingFunction: allCondition[index],
      });
      this.data.giftAnimation.translate('-100vw', 0).step();
      // 将动画实例保存到 data 中
      const randomNumText = this.data.cheerUpList[Math.floor(Math.random() * this.data.cheerUpList.length)];
      this.setData({
        showGift: true,
        cheerUp: randomNumText,
        giftAnimation: this.data.giftAnimation.export(),
      });
    },
    startGiftAnimation() {
      // 启动礼包动画，每隔一段时间重置动画状态
      this.intervalId = setInterval(() => {
        this.resetGiftAnimation();
        this.initGiftAnimation();
      }, 1000 * 60 * 3);
    },
    resetGiftAnimation() {
      // 重置动画状态
      this.data.giftAnimation = wx.createAnimation({
        duration: 0, // 动画时长，单位毫秒
      });
      // 设置动画位移
      this.data.giftAnimation.translateX('100vw').step();
      // 将动画实例保存到 data 中
      this.setData({
        giftAnimation: this.data.giftAnimation.export(),
      });
    },
    stopGiftAnimation() {
      // 停止礼包动画，清除定时器
      clearInterval(this.intervalId);
    },
  },
});