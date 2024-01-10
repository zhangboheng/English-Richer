Page({
  data: {
  contacts: [
    { id: 1, icon: '../../../static/source/wechat.png', text: 'Nosense-history' },
    { id: 2, icon: '../../../static/source/youtube.png', text: '@LuckyDesigner' },
    { id: 3, icon: '../../../static/source/gmail.png', text: 'zhangboheng827@gmail.com' },
    { id: 4, icon: '../../../static/source/web.png', text: 'https://luckydesigner.space/' },
    { id: 5, icon: '../../../static/source/github.png', text: 'https://github.com/zhangboheng' },
  ],
  groupmember: [
    { position: '企划', name: '伯衡君' },
    { position: '文案', name: '伯衡君&ChatGPT'},
    { position: '制图', name: 'DALL·E 3'},
    { position: '伴音', name: 'Radio Browser API'},
    { position: '开发', name: '伯衡君&ChatGPT'},
    { position: '测试', name: '伯衡君'},
    { position: '发行', name: '行运设计师荣誉出品'},
  ],
  productList: [
    { catalogue: '浏览器插件', name: 'LuckyNews Box' },
    { catalogue: '微信小程序', name: '英语大富翁' },
    { catalogue: '微信小游戏', name: '小恐龙不要停' },
  ]
},
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
})