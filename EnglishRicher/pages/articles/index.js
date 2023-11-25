Page({
  data: {
    swiperImages: [
      { src: '../../static/source/share-how-to-learn-idea.jpg', url: 'https://mp.weixin.qq.com/s/xSN-KKvFcY9Mtl7XR44MoA' },
      { src: 'https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxln5YNBlQ3M3NC0GWAibKjoSl7f7llGXfXrVlzgIKiaHzngb9qQaCmEnDhomVeuxR3Ta3v9bBHAmxzg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1', url: 'https://mp.weixin.qq.com/s/mrVXC-NWUVQ8lvEEBkKh6A' },
      { src: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxn2JuiaduqEickgWDOezQjod5LXkib0lNj51LJcX9lQG7UOFG7ib1JA1mApN1Nhl3YXA5NLVbUZK234bw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1', url: 'https://mp.weixin.qq.com/s/r26TgyxO0MGEoGgEVL8K_A' },
      { src: 'https://mmbiz.qpic.cn/sz_mmbiz_png/YpPe9SnqQxmukrF3icQjMpUxbXyEZRqBls5VSFqg4ojKCMwZt2EKAojn4E2pB3YMgEpzicg8GwopbR4S6228tq2Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1', url: 'https://mp.weixin.qq.com/s/AaQT_onocB-jv8tOrsRV5w' },
      { src: 'https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkj7CjLmeIfSk1vUAvXBmcmTS4eGPbRDtEW0ozVhczA6ItVGUtVkEZiaVfE1uScafTgniaJvk5f0LCw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1', url: 'https://mp.weixin.qq.com/s/By442g-row9mG9PvKwm4EQ' },
    ],
    articleData: [
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxn55A00Z0l31LAyjSs2CuQSK5dvCyKlgZ2HwKxvccEakicuB6Q5lQqN8iacteBjhbQfiakpnq5BkmcDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "我拜微软新版 bing 结合 ChatGPT 为师，学习智能 AI 效果真好",
        time: "2023-04-26",
        url: "https://mp.weixin.qq.com/s/DvdAxWAdQt2CRdOJBkmFsA",
        ad: false
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxlg4DS3oEpWlL9vR71wC64qjTR2vxIDpFwT2drwASznyicTxziblUSKB4WprvEWqdH1XQBuZEONtprg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "想要达成 ChatGPT 老板的高度？他的阅读清单",
        time: "2023-04-30",
        url: "https://mp.weixin.qq.com/s/78abA-uRcg4Bk2mypAf83w",
        ad: false
      },
      {
        image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxn8cKS8OI8BFMCoQAkeAibt72hY51lefwkuEg6eXORlT95wgiaDyWGicb564kmFYqlOZWLQbpiasBAkAw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "不会吧！不会吧！竟然还有人不知道如何用上 ChatGPT-4？伯衡君来帮你",
        time: "2023-06-30",
        url: "https://mp.weixin.qq.com/s/oyMyrc_iuMHRQuSSlnw39g",
        ad: false
      },
      {
        image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxlX5HJtECEO7Ng672ic0pBE5ROkCUBLOQaOsa6qPhkYYDlU5nicYWkfltNuLdVWdCDhfeD737BYOfkg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "我和 AI 有个约会！Call Annie 美女视讯聊天 APP，每天都是甜蜜蜜",
        time: "2023-06-25",
        url: "https://mp.weixin.qq.com/s/x3JYKam5r_Y_ViP_5uCRpQ",
        ad: false
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxlHiaJ3p2y2WicDEDRccYy5TTwBcBqdJDGia2ug7kywXzXBM8tn7qaY1FBxvzlHgR2e8ZCZntsCxd4Yw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "用浏览器浏览英文文章结合这款插件——Relingo 让你的英语能力不知不觉提高",
        time: "2022-05-12",
        url: "https://mp.weixin.qq.com/s/ws17l6682Cu1XR07nqan8Q",
        ad: false
      }
    ]
  },
  onLoad: function (options) {
    this.shuffleArray(this.data.swiperImages);
    this.shuffleArray(this.data.articleData);
    this.setData({
      swiperImages: this.data.swiperImages,
      articleData: this.data.articleData
    })
  },
  shuffleArray: function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
})