Component({
  properties: {
    articles: {
      type: Array,
      value: []
    }
  },
  methods: {
    goToDetail(event) {
      const url = event.currentTarget.dataset.url;
      if (url) {
        wx.navigateTo({
          url: '../../pages/issue/index/index?href=' + url,
        });
      }
    }
  }
});