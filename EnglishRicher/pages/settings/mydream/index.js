Page({
  data: {
    inputText: '',
    textareaText: '',
  },
  onLoad: function () {
    let getMyDream = wx.getStorageSync('myDream');
    let getMyProcess = wx.getStorageSync('myProcess');
    this.setData({
      inputText: getMyDream,
      textareaText: getMyProcess
    });
  },
  handleInput(event) {
    this.setData({
      inputText: event.detail.value,
    });
  },

  handleTextareaInput(event) {
    this.setData({
      textareaText: event.detail.value,
    });
  },

  handleSave() {
    const { inputText, textareaText } = this.data;
    wx.setStorageSync('myDream', inputText);
    wx.setStorageSync('myProcess', textareaText);
    wx.showToast({
      title: '保存成功',
      icon: 'none',
      duration: 1000
    })
  },
});