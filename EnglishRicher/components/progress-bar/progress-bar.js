Component({
  properties: {
    total: {
      type: Number,
      value: 100,
    },
    current: {
      type: Number,
      value: 0,
      observer: 'updateProgress',
    },
    color: {
      type: String,
      value: '#007bff',
    },
    showPercentage: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    percentage: 0,
  },

  methods: {
    updateProgress() {
      const { total, current } = this.properties;
      const percentage = Math.floor((current / total) * 100);
      console.info('----->', percentage)
      this.setData({ percentage });
    },
  },
});