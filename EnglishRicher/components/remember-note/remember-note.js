Component({
  properties: {
    imageUrl: {
      type: String,
      value: '',
    },
  },
  data: {
    
  },
  lifetimes: {
  },
  methods: {
    handleTap: function () {
      // 触发自定义事件，并传递数据
      this.triggerEvent('remember', { message: 'clicked' });
    }
  },
});