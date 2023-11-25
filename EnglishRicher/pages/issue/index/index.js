Page({
  data: {
    web_src: ""
  },
  onLoad(options) {
    this.setData({
      web_src: options.href
    })
  },
})