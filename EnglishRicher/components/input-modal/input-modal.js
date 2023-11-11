Component({
  properties: {
    placeholder: {
      type: String,
      value: '请输入昵称',
    },
  },
  data: {
    showModal: true,
    inputValue: '',
  },
  methods: {
    closeModal: function () {
      this.setData({ showModal: false });
    },

    inputChange: function (event) {
      this.setData({ inputValue: event.detail.value });
    },

    confirm: function () {
      var inputValue = this.data.inputValue;
      this.triggerEvent('confirm', { inputValue }); // 触发自定义事件，将输入的内容传递给父组件
      if (inputValue.length > 0) {
        if (inputValue.length > 6) {
          wx.showToast({
            title: '啊呀哟，你输入的昵称也忒长了，短一点好不好？',
            icon: 'none',
            duration: 1000
          });
        } else {
          // 将输入的昵称存储到缓存中
          wx.setStorageSync('nickname', inputValue);
          // 储存缓存后关闭弹窗
          this.closeModal();
        }
      } else {
        wx.showToast({
          title: '请输入至少一个字符的昵称',
          icon: 'none',
          duration: 1000
        });
      }
    },
  },
});