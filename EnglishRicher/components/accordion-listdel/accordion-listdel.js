// accordion-list.js
Component({
  data: {
    showOrNot: true,
    showPopupButtons: false
  },
  properties: {
    dataList: {
      type: Array,
      value: []
    },
  },
  methods: {
    toggleAccordion: function (e) {
      const index = e.currentTarget.dataset.index;
      const key = `dataList[${index}].show`
      this.setData({
        [key]: !this.properties.dataList[index].show
      });
    },
    // 删除该条目
    removeWord: function(e) {
      const delWord = e.currentTarget.dataset.id;
      this.triggerEvent('removeWord', delWord);
    },
    // 侦测滚动事件回到顶部
    scrollToTop: function () {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    // 跳出或者隐藏复习按钮
    popupMenu: function () {
      this.setData({
        showPopupButtons: !this.data.showPopupButtons
      }) 
    },
    // 点击跳转到复习模式一
    goToReviewOne: function () {
      wx.navigateTo({
        url: '../../settings/renew/modelone/index',
      });
    },
    // 点击跳转到复习模式二
    goToReviewTwo: function () {
      wx.navigateTo({
        url: '../../settings/renew/modeltwo/index',
      });
    },
  }
});