Component({
  properties: {
    images: {
      type: Array,
      value: [],
    },
    indicatorDots: {
      type: Boolean,
      value: true,
    },
    autoplay: {
      type: Boolean,
      value: true,
    },
    interval: {
      type: Number,
      value: 5000,
    },
    duration: {
      type: Number,
      value: 500,
    },
    circular: {
      type: Boolean,
      value: true,
    },
  },

  methods: {
    navigateToPage(event) {
      const url = event.currentTarget.dataset.url;
      if (url) {
        wx.navigateTo({
          url: '../../pages/issue/index/index?href=' + url,
        });
      }
    },

    swiperChange(event) {
      // 当前轮播图索引
      const current = event.detail.current;
    },
  },
});