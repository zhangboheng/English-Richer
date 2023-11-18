Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    imgSrc: {
      type: String,
      value: ''
    },
    titleInfo: {
      type: String,
      value: '',
    },
    text: {
      type: String,
      value: '',
    },
  },
  methods: {
    closePopup() {
      // 触发自定义事件，通知父组件关闭弹窗
      this.triggerEvent('closePopup');
    }
  },
  observers: {
    'text': function (newText) {
      this.observeTextChange(newText);
    },
  },
});