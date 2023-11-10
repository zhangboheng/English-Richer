Component({
  properties: {
    englishLevels: {
      type: Array,
      value: []
    },
    // 设置默认选中类型
    defaultLevel: {
      type: String,
      value: '初中' // 设置默认级别为空字符串
    }
  },

  data: {
    selectedEnglishLevel: ''
  },
  lifetimes: {
    attached: function () {
      const { defaultLevel, englishLevels } = this.properties;
      if (defaultLevel && englishLevels.includes(defaultLevel)) {
        this.setData({
          selectedEnglishLevel: defaultLevel
        });
      }
    }
  },
  methods: {
    handleRadioChange: function (event) {
      this.setData({
        selectedEnglishLevel: event.detail.value
      });
    },

    confirmSelection: function () {
      const { selectedEnglishLevel } = this.data;
      if (selectedEnglishLevel) {
        // 执行选择后的逻辑，比如发送请求或更新页面数据等
        this.triggerEvent('confirm', { level: selectedEnglishLevel });
      }

      this.triggerEvent('close');
    }
  }
});