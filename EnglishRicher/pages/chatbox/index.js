import {
  decodeArrayBuffer
} from '../../utils/algorithm'
let interstitialAd = null;
Page({
  data: {
    inputValue: '',
    messages: [],
    toView: '',
    showOrNot: false,
    tipsShowOrNot: true,
    buttonDisabled: false, // 按钮是否可点击的状态变量
    user: {
      nickname: '用户',
      avatar: '../../static/source/user.png' // 用户头像路径
    },
    bot: {
      nickname: 'AI',
      avatar: '../../static/source/gpt4.png' // 机器人头像路径
    }
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function () {
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
    let self = this;
    let message = self.data.inputValue;
    let aiMessage = '';
    if (message.trim() === '') {
      return;
    }
    let newMessages = self.data.messages.concat({
      role: 'user',
      content: message,
      avatar: self.data.user.avatar,
      nickname: self.data.user.nickname
    });
    self.setData({
      messages: newMessages,
      inputValue: '',
      toView: 'msg_' + (newMessages.length - 1),
      showOrNot: true,
      tipsShowOrNot: false,
      buttonDisabled: true,
    });
    const requestTask = wx.request({
      url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=24.42fe5b839ba4673607e42e3e9db7eb34.2592000.1715481825.282335-60999397', // 后端服务器地址
      responseType: "arraybuffer",
      method: 'POST',
      enableChunked: true,
      header: {
        'Content-Type': 'application/json' // 设置请求头为JSON格式
      },
      data: {
        messages: newMessages,
        "top_p": 1,
        "stream": true,
      },
      success: (res) => {},
      fail: (err) => {
        if (self.data.messages[self.data.messages.length - 1].role == 'user') {
          let newMessages = self.data.messages.concat({
            role: 'assistant',
            content: `AI 傲娇了一下，请稍后再试，或者检查一下网络链接`,
            avatar: self.data.bot.avatar,
            nickname: self.data.bot.nickname
          });
          self.setData({
            messages: newMessages,
            toView: 'msg_' + (newMessages.length - 1),
            showOrNot: false,
            buttonDisabled: false,
          });
        }
      }
    });
    requestTask.onHeadersReceived(function (r) {
      if (self.data.messages[self.data.messages.length - 1].role == 'user') {
        let newMessages = self.data.messages.concat({
          role: 'assistant',
          content: aiMessage,
          avatar: self.data.bot.avatar,
          nickname: self.data.bot.nickname
        });
        self.setData({
          messages: newMessages,
          toView: 'msg_' + (newMessages - 1),
          showOrNot: false,
        });
      }
    });
    requestTask.onChunkReceived(function (r) {
      let parseString = decodeArrayBuffer(r.data, 'utf-8').split('\n\n');
      for (let i of parseString){
      try {
        const resultValue = JSON.parse(i.slice(5)).result;
        aiMessage += resultValue;
        self.data.messages[self.data.messages.length - 1].content = aiMessage;
        self.setData({
          messages: self.data.messages,
        });
        if (JSON.parse(i.slice(5)).is_end) {
          self.setData({
            buttonDisabled: false,
          }); 
        }
      } catch(e){
        
      }
    }
    });
  }
});