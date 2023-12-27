let interstitialAd = null
Page({
  data: {
    tags: ['生财有道', '学习娱乐', '他山之石', '英语应用', 'AI助力'], // 分类标签数组
    swiperImages: [{
        src: '../../static/source/share-how-to-learn-idea.jpg',
        url: 'https://mp.weixin.qq.com/s/xSN-KKvFcY9Mtl7XR44MoA'
      },
      {
        src: 'https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxln5YNBlQ3M3NC0GWAibKjoSl7f7llGXfXrVlzgIKiaHzngb9qQaCmEnDhomVeuxR3Ta3v9bBHAmxzg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
        url: 'https://mp.weixin.qq.com/s/mrVXC-NWUVQ8lvEEBkKh6A'
      },
      {
        src: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxn2JuiaduqEickgWDOezQjod5LXkib0lNj51LJcX9lQG7UOFG7ib1JA1mApN1Nhl3YXA5NLVbUZK234bw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
        url: 'https://mp.weixin.qq.com/s/r26TgyxO0MGEoGgEVL8K_A'
      },
      {
        src: 'https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkj7CjLmeIfSk1vUAvXBmcmTS4eGPbRDtEW0ozVhczA6ItVGUtVkEZiaVfE1uScafTgniaJvk5f0LCw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
        url: 'https://mp.weixin.qq.com/s/By442g-row9mG9PvKwm4EQ'
      },
      {
        src: 'https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxlHiaJ3p2y2WicDEDRccYy5TTwBcBqdJDGia2ug7kywXzXBM8tn7qaY1FBxvzlHgR2e8ZCZntsCxd4Yw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1',
        url: 'https://mp.weixin.qq.com/s/ws17l6682Cu1XR07nqan8Q'
      },
      {
        src: 'https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkLEFbY5QIiaEWmpkM9SOmTZliazzJ8un4z0ibkIOMcjH8K3kicrODyo25R4NM4E4Z2twmRXuOwN3NIqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1',
        url: 'https://mp.weixin.qq.com/s/nZcujqasx51weS2_Ftxq8w'
      },
    ],
    moneyData: [{
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxnSIUOGD2uQnf5hNtm7uzvsWAovr8AttM7KPo6OVIkCI7icv92W4q8iacVPrriaPj32LKc6jtHyDbzSw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "如何将被低估的被动收入超过你的工资收入",
        time: "2022-04-19",
        url: "https://mp.weixin.qq.com/s/hEbatplTWcb4pAGn0iXxHQ"
      },{
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxlHiaJ3p2y2WicDEDRccYy5TTWaZpHso2uKvjdFY5eCPtNAliaia3fWf8JryRia15QEQHgxsG2nboFtELQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "如何妙用凯利公式，让你的投资立于不败之地",
        time: "2022-05-12",
        url: "https://mp.weixin.qq.com/s/Fs9Xl051A-eyWOL02-jFxw"
      },{
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkCYlFrKCC7M1x2DKichcM2YzlsTr6GPQd6FJMNMLicdVM2kLbsIlobLWFicKFtvYlAYPSJ84MrJ5h2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "Python爬虫爬取股票代码及名称导出为Excel表格以投资分析用",
        time: "2021-11-22",
        url: "https://mp.weixin.qq.com/s/zC7g2fVxEaD2DqPNMrl4Yw"
      },{
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxlFiacK6TxP42Iv7k2xBlvIic6eoEIjmUS8VZSRrkqX3eZasOEw8niaSsmlFtk6F1uxBZaO4ax3a0qxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "如何结合爬虫技术让你的金融投资更具科学性",
        time: "2021-10-26",
        url: "https://mp.weixin.qq.com/s/9UXzGFgrzFQy3jqQP0f3Ow"
      },{
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkK6evD0nzSibu9HWsovMZwYMnKmicetFOxMYcytugzSKBuGKiah31TCKdOkS2ibUoeDpom2pDgwfrJoQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "以基金为例探索如何科学地进行投资——提升价值",
        time: "2021-10-21",
        url: "https://mp.weixin.qq.com/s/UfYG1-BuXZ5pFTU5fFP2gg"
      }
    ],
    entertainmentData: [{
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkLEFbY5QIiaEWmpkM9SOmTZliazzJ8un4z0ibkIOMcjH8K3kicrODyo25R4NM4E4Z2twmRXuOwN3NIqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "在家也能环游世界——云旅游的科学指南",
        time: "2023-05-07",
        url: "https://mp.weixin.qq.com/s/nZcujqasx51weS2_Ftxq8w"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxkRUHAEb97FUnT8TbibP8w4nZj9Y8OUFQE1NQG5ia46PRxicUd1coEqhJK9fBUcU4ibxr7ttVd65uL9fg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "支持 BT/磁力链接/直播/影视/音乐的神奇播放器——恒星播放器体验及操作心得",
        time: "2022-04-24",
        url: "https://mp.weixin.qq.com/s/LqukErqY8T0HRdCJlNhlaA"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxlKbSypDmZ11CEzNicDkSiaUxgD2QWa5PBpPWYhBGtUY2DRu61vvWWiconQPU43aAtlSZcJmhPJUC5Gg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "约战平台——畅玩空间，与朋友一起玩街机，红白机等重回童年寻找美好回忆",
        time: "2021-10-11",
        url: "https://mp.weixin.qq.com/s/8g-xABZqVfObnb6rJ5_V1Q"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxnfcDbZe6ibbMiabVTpuv8gllkOvshkuibbkswZ1bfTtwSO9ONgTW8gdnvHmV5pmxnTibOwia9J7YxK8tg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "使用kodi在智能电视上玩万种电视游戏",
        time: "2021-10-08",
        url: "https://mp.weixin.qq.com/s/1wm__ayMF7n49IT_RIRzZQ"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxmutA0yVq00DbrK9gNjPQSkYibz3yjGIc0pYV5HYiaL5Z5gg7VCHmO3VO6XvYIwqSdDBvNCN7uDCkxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "10个类似Youtube网站的流媒体平台",
        time: "2020-08-14",
        url: "https://mp.weixin.qq.com/s/UOdfTxGlmTuw_e7uw_5pwQ"
      }
    ],
    bookData: [{
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxnPKt79k8HIdctH0Rues9O5wKKPGN3kqkjiau0bicpfibq3r1pGffTsiaxzibnOYTrbicWmPwBh1VDScyiaQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "50个免费开源电子书下载网站",
        time: "2022-05-16",
        url: "https://mp.weixin.qq.com/s/GBgsKbRY1P4P7ljdND4MRg"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxmicFEaOmbjZwxDpZkv0lT9w3uVpjtzce0fX96g1w0HcNWNX9KFLEEKJD3ryeIY0dtrP2f18w7Sl9w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "台湾电子书资源网站推荐",
        time: "2022-04-20",
        url: "https://mp.weixin.qq.com/s/F0j4GhSmacDFsEemRMelnQ"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxmwbGOibCKicDoK6Ie8qnvAokPibD2dg6c2ic7ichJjV3FSPPY0QSX5ETiagwe7KRUiaiaQ9tVhzdl7589ibXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "细数8个下载英文有声电子书的最佳网站",
        time: "2021-11-10",
        url: "https://mp.weixin.qq.com/s/tUTnxl3XtuEvblx-m86BKQ"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxliczMTuSnt2iaUy0JcmhnmySKQ7xHaOJd8sq3T8vAvCFKBtgv5nuCU33AfMKj8l39TvUJCXgO7R4ng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "新东方教育公开多媒体学习库400多教育精品课如何在中国大陆免费看",
        time: "2022-04-21",
        url: "https://mp.weixin.qq.com/s/f1ZOsaYkGsTx1sqxDjr8uQ"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkPSEFFiacRuxyrcAPFApVicHdkdaTZCRdicFfar3eJWUTuCyEOStL3sPxocXPtGbAgTnPUicrZtUveUQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "再推荐10个新闻应用掌握新闻快人一步",
        time: "2020-09-01",
        url: "https://mp.weixin.qq.com/s/Dpb1K6nc9KJ304MVzBcq6A"
      }
    ],
    appData: [{
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkJiat95Q1u1WbY2XKZoQjbGX9cNIiaSCGxy2o9m1LUUopeot8YdB204Jp47CSPxeEGibXOsOQibSdXkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "边看美剧边学英语神器又一个秀丽英语帮助你",
        time: "2020-09-05",
        url: "https://mp.weixin.qq.com/s/yWlYYLBnlU5lyZqgWADBTA"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxkjx7DA28zeEgEIeqiauqIDhc24qZIFgjp9uvDy36ezavEPwmscA3Jdt3g3DibTxCMFYUUgAicFSNSqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "创新式学习外语途径可以一试",
        time: "2020-08-19",
        url: "https://mp.weixin.qq.com/s/6Wb8tLgwTYG-RrP0Qn4PcA"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxlHoS81oXrQ7s4X7vZBIJ0w5faQhjmUvYpHh2yx9nKdJibRBxJ8lTiaf21TPJ4NKohR81X3XlTDSypg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "Github 上惊现一款外语辅助阅读和翻译神器——学术研究的福音",
        time: "2019-11-26",
        url: "https://mp.weixin.qq.com/s/XP5TtqH13tCH20fpmGrFxg"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxmuKyqsqp4h6rFgA92KsC8ciaLTInDsW4kpQD4ykicsPia1rVYRJibicShkUMK2g0iapR6tECHj6BgDGbjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "时间无限而人生有涯，故如何在5分钟阅读完一本书以扩展人生",
        time: "2021-10-07",
        url: "https://mp.weixin.qq.com/s/qlbXgzoONxQwyyvwcYJ9hw"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxmAgC1wc5oOib1O75AYxpKCvyicJH36O0OwgU8DpMYHbmv5KZQfKy75qntRPGf5mKKqf90PwicWrKRAg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "Reams 让你的 RSS 像杂志一样般阅读",
        time: "2022-04-25",
        url: "https://mp.weixin.qq.com/s/3j9BBEofy-Cb59alTqkEyQ"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/YpPe9SnqQxlHiaJ3p2y2WicDEDRccYy5TTwBcBqdJDGia2ug7kywXzXBM8tn7qaY1FBxvzlHgR2e8ZCZntsCxd4Yw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "用浏览器浏览英文文章结合这款插件——Relingo 让你的英语能力不知不觉提高",
        time: "2022-05-12",
        url: "https://mp.weixin.qq.com/s/ws17l6682Cu1XR07nqan8Q"
      }
    ],
    articleData: [{
        image: "https://mmbiz.qpic.cn/sz_mmbiz_png/YpPe9SnqQxmukrF3icQjMpUxbXyEZRqBls5VSFqg4ojKCMwZt2EKAojn4E2pB3YMgEpzicg8GwopbR4S6228tq2Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "用 ChatGPT 打造你的一人公司，让它扮演各个员工角色，榨取它的剩余价值",
        time: "2023-06-04",
        url: "https://mp.weixin.qq.com/s/AaQT_onocB-jv8tOrsRV5w"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxn55A00Z0l31LAyjSs2CuQSK5dvCyKlgZ2HwKxvccEakicuB6Q5lQqN8iacteBjhbQfiakpnq5BkmcDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "我拜微软新版 bing 结合 ChatGPT 为师，学习智能 AI 效果真好",
        time: "2023-04-26",
        url: "https://mp.weixin.qq.com/s/DvdAxWAdQt2CRdOJBkmFsA"
      },
      {
        image: "https://mmbiz.qpic.cn/mmbiz_png/YpPe9SnqQxlg4DS3oEpWlL9vR71wC64qjTR2vxIDpFwT2drwASznyicTxziblUSKB4WprvEWqdH1XQBuZEONtprg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "想要达成 ChatGPT 老板的高度？他的阅读清单",
        time: "2023-04-30",
        url: "https://mp.weixin.qq.com/s/78abA-uRcg4Bk2mypAf83w"
      },
      {
        image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxn8cKS8OI8BFMCoQAkeAibt72hY51lefwkuEg6eXORlT95wgiaDyWGicb564kmFYqlOZWLQbpiasBAkAw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "不会吧！不会吧！竟然还有人不知道如何用上 ChatGPT-4？伯衡君来帮你",
        time: "2023-06-30",
        url: "https://mp.weixin.qq.com/s/oyMyrc_iuMHRQuSSlnw39g"
      },
      {
        image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/YpPe9SnqQxlX5HJtECEO7Ng672ic0pBE5ROkCUBLOQaOsa6qPhkYYDlU5nicYWkfltNuLdVWdCDhfeD737BYOfkg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        title: "我和 AI 有个约会！Call Annie 美女视讯聊天 APP，每天都是甜蜜蜜",
        time: "2023-06-25",
        url: "https://mp.weixin.qq.com/s/x3JYKam5r_Y_ViP_5uCRpQ"
      },
    ]
  },
  onLoad: function (options) {
    this.shuffleArray(this.data.swiperImages);
    this.shuffleArray(this.data.moneyData);
    this.shuffleArray(this.data.entertainmentData);
    this.shuffleArray(this.data.bookData);
    this.shuffleArray(this.data.articleData);
    this.shuffleArray(this.data.appData);
    this.setData({
      swiperImages: this.data.swiperImages,
      moneyData: this.data.moneyData,
      entertainmentData: this.data.entertainmentData,
      appData: this.data.appData,
      articleData: this.data.articleData,
      bookData: this.data.bookData
    });
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-28211117f59c8710'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {
        console.error('插屏广告加载失败', err)
      })
      interstitialAd.onClose(() => {})
    }
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error('插屏广告显示失败', err)
      })
    }
  },
  // 点击标签后跳转到对应位置
  onTagTap: function (e) {
    const index = e.currentTarget.dataset.index;
    console.info('------>', index)
    wx.pageScrollTo({
      selector: `#content-${index}`,
      duration: 300
    });
  },
  // 侦测滚动事件回到顶部
  scrollToTop: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },
  shuffleArray: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
})