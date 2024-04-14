let interstitialAd = null;
Page({
  data: {
    inputValue: '',
    messages: [],
    toView: '',
    showOrNot: false,
    user: {
      nickname: '用户',
      avatar: '../../static/source/user.png' // 用户头像路径
    },
    bot: {
      nickname: 'AI',
      avatar: '../../static/source/gpt4.png' // 机器人头像路径
    }
  },
  onLoad: function() {
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    this.data.user.nickname = nickname;
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
  bindInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 点击发送消息
  sendMessage: function () {
    let message = this.data.inputValue;
    if (message.trim() === '') {
      return;
    }
    let newMessages = this.data.messages.concat({
      role: 'user',
      content: message,
      avatar: this.data.user.avatar,
      nickname: this.data.user.nickname
    });
    this.setData({
      messages: newMessages,
      inputValue: '',
      toView: 'msg_' + (newMessages.length - 1),
      showOrNot: true,
    });
    wx.request({
      url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397', // 后端服务器地址
      method: 'POST',
      header: {
        'Content-Type': 'application/json' // 设置请求头为JSON格式
      },
      data: {
        messages: newMessages,
        "top_p": 1
      },
      success: (res) => {
        let newMessages = this.data.messages.concat({
          role: 'assistant',
          content: res.data.result,
          avatar: this.data.bot.avatar,
          nickname: this.data.bot.nickname
        });
        this.setData({
          messages: newMessages,
          toView: 'msg_' + (newMessages.length - 1),
          showOrNot: false,
        });
      },
      fail: (err) => {
        let newMessages = this.data.messages.concat({
          role: 'assistant',
          content: `AI 傲娇了一下，请稍后再试`,
          avatar: this.data.bot.avatar,
          nickname: this.data.bot.nickname
        });
        this.setData({
          messages: newMessages,
          toView: 'msg_' + (newMessages.length - 1),
          showOrNot: false,
        });
      }
    });
  }
});