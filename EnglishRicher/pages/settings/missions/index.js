const dateUtils = require('../../../utils/time');
// index.js
Page({
  data: {
    signed: false, // 是否已签到
    signExp: 1, // 签到获得的经验值
    signCoins: 0.5, // 签到获得的钱币
    shared: false, // 是否已经分享
    shareExp: 2, // 分享获得的经验值
    shareCoins: 0.5, // 分享获得的钱币
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function() {
    let dailySIgn = wx.getStorageSync('dailySign'); // 获取签到日期
    let shareSign = wx.getStorageSync('shareSign'); // 获取分享日期
    // 判断签到日期是否和当前日期一致
    if (dailySIgn != dateUtils.getCurrentDate()) {
      wx.setStorageSync('dailySign', '');
    } else {
      this.setData({
        signed: true,
      });
    }
    // 判断分享日期是否和当前日期一致
    if (shareSign != dateUtils.getCurrentDate()) {
      wx.setStorageSync('shareSign', '');
    } else {
      this.setData({
        shared: true,
      });
    }
  },
  handleSign() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    if (this.data.signed) {
      wx.showToast({
        title: '今天已签到，没有奖励哦～',
        icon: 'none',
      });
    } else {
      // 执行签到逻辑，增加经验值和钱币
      this.setData({
        signed: true,
      });
      // 获取当前时间并保存到本地缓存
      wx.setStorageSync('dailySign', dateUtils.getCurrentDate());
      getProgress = getProgress + this.data.signExp;
      wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
      wx.setStorageSync('money', money + this.data.signCoins);
      wx.showToast({
        title: `签到成功，经验值+${this.data.signExp}，钱币+${this.data.signCoins}`,
        icon: 'none',
      });
    }
  },

  handleShare() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    if (this.data.shared) {
      setTimeout(() => {
        wx.showToast({
          title: '今天已分享，没有奖励哦～',
          icon: 'none',
        });
      }, 4000);
    } else {
      // 执行分享逻辑，增加经验值和钱币
      this.setData({
        shared: true,
      });
      // 获取当前时间并保存到本地缓存
      wx.setStorageSync('shareSign', dateUtils.getCurrentDate());
      getProgress = getProgress + this.data.shareExp;
      wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
      wx.setStorageSync('money', money + this.data.shareCoins);
      setTimeout(() => {
        wx.showToast({
          title: `分享成功，经验值+${this.data.shareExp}，钱币+${this.data.shareCoins}`,
          icon: 'none',
        });
      }, 4000);
    }
  },
});