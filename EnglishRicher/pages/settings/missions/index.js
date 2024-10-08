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
    canGetFiveHundred: false, // 领取资格判断
    masterFiveHundred: false, // 是否领取耕耘收获
    masterFiveHundredExp: 5, // 掌握 500 单词后奖励经验
    masterFiveHundredCoins: 0.5, // 掌握 500 单词后奖励钱币
    canGetInfinite: false, // 领取资格判断
    masterInfinite: false, // 是否领取解除限制
    masterInfiniteExp: 5, // 已兑解限卡奖励经验
    masterInfiniteCoins: 1, // 已兑解限卡奖励钱币
    canGetThousand: false, // 领取资格判断
    masterThousand: false, // 是否领取耕耘收获
    masterThousandExp: 10, // 掌握 1000 单词后奖励经验
    masterThousandCoins: 1, // 掌握 1000 单词后奖励钱币
    canGetTwoThousand: false, // 领取资格判断
    masterTwoThousand: false, // 是否领取耕耘收获
    masterTwoThousandExp: 20, // 掌握 2000 单词后奖励经验
    masterTwoThousandCoins: 2, // 掌握 2000 单词后奖励钱币
    canGetFiveThousand: false, // 领取资格判断
    masterFiveThousand: false, // 是否领取耕耘收获
    masterFiveThousandExp: 50, // 掌握 5000 单词后奖励经验
    masterFiveThousandCoins: 5, // 掌握 5000 单词后奖励钱币 
    canGetTenThousand: false, // 领取资格判断
    masterTenThousand: false, // 是否领取耕耘收获
    masterTenThousandExp: 100, // 掌握 10000 单词后奖励经验
    masterTenThousandCoins: 10, // 掌握 10000 单词后奖励钱币
    canGetTwentyThousand: false, // 领取资格判断
    masterTwentyThousand: false, // 是否领取耕耘收获
    masterTwentyThousandExp: 200, // 掌握 20000 单词后奖励经验
    masterTwentyThousandCoins: 20, // 掌握 20000 单词后奖励钱币
    canGetTimeFriend: false, // 领取资格判断
    masterTimeFrined: false, // 是否领取时间的朋友
    timeFriendsExp: 10, // 掌握时间的朋友奖励经验
    timeFriendsCoins: 2, // 掌握时间的朋友奖励金币
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function () {
    let dailySIgn = wx.getStorageSync('dailySign'); // 获取签到日期
    let shareSign = wx.getStorageSync('shareSign'); // 获取分享日期
    let getNoLimitCard = wx.getStorageSync('getNoLimitCard'); // 获取解限卡是否获取
    let getClockTime = wx.getStorageSync('clockTime'); // 获取累计进步时长
    let elementaryList = wx.getStorageSync('elementaryList');
    let juniorList = wx.getStorageSync('juniorList');
    let highList = wx.getStorageSync('highList');
    let cet4List = wx.getStorageSync('cet4List');
    let cet6List = wx.getStorageSync('cet6List');
    let postgraduateList = wx.getStorageSync('postgraduateList');
    let toelfOneList = wx.getStorageSync('toelfOneList');
    let toelfTwoList = wx.getStorageSync('toelfTwoList');
    let satList = wx.getStorageSync('satList');
    let elementaryTwoList = wx.getStorageSync('elementaryTwoList');
    let juniorTwoList = wx.getStorageSync('juniorTwoList');
    let highTwoList = wx.getStorageSync('highTwoList');
    let cet4TwoList = wx.getStorageSync('cet4TwoList');
    let cet6TwoList = wx.getStorageSync('cet6TwoList');
    let postgraduateTwoList = wx.getStorageSync('postgraduateTwoList');
    let toelfOneTwoList = wx.getStorageSync('toelfOneTwoList');
    let toelfTwoTwoList = wx.getStorageSync('toelfTwoTwoList');
    let satTwoList = wx.getStorageSync('satTwoList');
    let elementaryThreeList = wx.getStorageSync('elementaryThreeList');
    let juniorThreeList = wx.getStorageSync('juniorThreeList');
    let highThreeList = wx.getStorageSync('highThreeList');
    let cet4ThreeList = wx.getStorageSync('cet4ThreeList');
    let cet6ThreeList = wx.getStorageSync('cet6ThreeList');
    let postgraduateThreeList = wx.getStorageSync('postgraduateThreeList');
    let toelfOneThreeList = wx.getStorageSync('toelfOneThreeList');
    let toelfTwoThreeList = wx.getStorageSync('toelfTwoThreeList');
    let satThreeList = wx.getStorageSync('satThreeList');
    // 每个等级的取最大数
    let elementaryMax = Math.max(elementaryList.length, elementaryTwoList.length, elementaryThreeList.length);
    let juniorMax = Math.max(juniorList.length, juniorTwoList.length, juniorThreeList.length);
    let highMax = Math.max(highList.length, highTwoList.length, highThreeList.length);
    let cet4Max = Math.max(cet4List.length, cet4TwoList.length, cet4ThreeList.length);
    let cet6Max = Math.max(cet6List.length, cet6TwoList.length, cet6ThreeList.length);
    let postgraduateMax = Math.max(postgraduateList.length, postgraduateTwoList.length, postgraduateThreeList.length);
    let toelfOneMax = Math.max(toelfOneList.length, toelfOneTwoList.length, toelfOneThreeList.length);
    let toelfTwoMax = Math.max(toelfTwoList.length, toelfTwoTwoList.length, toelfTwoThreeList.length);
    let satMax = Math.max(satList.length, satTwoList.length, satThreeList.length);
    // 将每个等级的最大数汇总为总数
    let TotalNumber = elementaryMax + juniorMax + highMax + cet4Max + cet6Max + postgraduateMax + toelfOneMax + toelfTwoMax + satMax;
    if (getNoLimitCard == 1) {
      this.setData({
        canGetInfinite: true
      });
    }
    if (this.isTimeGreaterThan(getClockTime, "02:30:00")) {
      this.setData({
        canGetTimeFriend: true
      });
    }
    if (TotalNumber >= 500) {
      this.setData({
        canGetFiveHundred: true
      });
    }
    if (TotalNumber >= 1000) {
      this.setData({
        canGetThousand: true
      });
    }
    if (TotalNumber >= 2000) {
      this.setData({
        canGetTwoThousand: true
      });
    }
    if (TotalNumber >= 5000) {
      this.setData({
        canGetFiveThousand: true
      });
    }
    if (TotalNumber >= 10000) {
      this.setData({
        canGetTenThousand: true
      });
    }
    if (TotalNumber >= 20000) {
      this.setData({
        canGetTwentyThousand: true
      });
    }
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
  // 每日签到奖励的处理方法
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
  // 每日分享奖励的处理方法
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
  // 获取解除限制的奖励
  handleInfinite() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterInfinite = wx.getStorageSync('masterInfinite');
    if (typeof masterInfinite != 'string') {
      this.setData({
        masterInfinite: true
      });
    }
    if (this.data.masterInfinite) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetInfinite) {
        getProgress = getProgress + this.data.masterInfiniteExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterInfiniteCoins);
        wx.setStorageSync('masterInfinite', true)
        wx.showToast({
          title: `已经解除限制，经验值+${this.data.masterInfiniteExp}，钱币+${this.data.masterInfiniteCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '骗不了我，你没领取解限卡呢～～',
          icon: 'none',
        });
      }
    }
  },
  // 获取时间的朋友的奖励
  handleBasketball() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let getTimeFrined = wx.getStorageSync('getTimeFriend');
    if (typeof getTimeFrined != 'string') {
      this.setData({
        masterTimeFrined: true
      });
    }
    if (this.data.masterTimeFrined) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetTimeFriend) {
        getProgress = getProgress + this.data.timeFriendsExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.timeFriendsCoins);
        wx.setStorageSync('getTimeFriend', true)
        wx.showToast({
          title: `为你打 Call，经验值+${this.data.timeFriendsExp}，钱币+${this.data.timeFriendsCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '进步时长不足，请再去累积练习时长～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获500单词奖励的处理方法
  handleFiveHundred() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterFiveHundred = wx.getStorageSync('masterFiveHundred');
    if (typeof masterFiveHundred != 'string') {
      this.setData({
        masterFiveHundred: true
      });
    }
    if (this.data.masterFiveHundred) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetFiveHundred) {
        getProgress = getProgress + this.data.masterFiveHundredExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterFiveHundredCoins);
        wx.setStorageSync('masterFiveHundred', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterFiveHundredExp}，钱币+${this.data.masterFiveHundredCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握500个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获1000单词奖励的处理方法
  handleThousand() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterThousand = wx.getStorageSync('masterThousand');
    if (typeof masterThousand != 'string') {
      this.setData({
        masterThousand: true
      });
    }
    if (this.data.masterThousand) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetThousand) {
        getProgress = getProgress + this.data.masterThousandExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterThousandCoins);
        wx.setStorageSync('masterThousand', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterThousandExp}，钱币+${this.data.masterThousandCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握1000个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获2000单词奖励的处理方法
  handleTwoThousand() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterTwoThousand = wx.getStorageSync('masterTwoThousand');
    if (typeof masterTwoThousand != 'string') {
      this.setData({
        masterTwoThousand: true
      });
    }
    if (this.data.masterTwoThousand) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetTwoThousand) {
        getProgress = getProgress + this.data.masterTwoThousandExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterTwoThousandCoins);
        wx.setStorageSync('masterTwoThousand', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterTwoThousandExp}，钱币+${this.data.masterTwoThousandCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握2000个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获5000单词奖励的处理方法
  handleFiveThousand() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterFiveThousand = wx.getStorageSync('masterFiveThousand');
    if (typeof masterFiveThousand != 'string') {
      this.setData({
        masterFiveThousand: true
      });
    }
    if (this.data.masterFiveThousand) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetFiveThousand) {
        getProgress = getProgress + this.data.masterFiveThousandExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterFiveThousandCoins);
        wx.setStorageSync('masterFiveThousand', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterFiveThousandExp}，钱币+${this.data.masterFiveThousandCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握5000个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获 10000 单词奖励的处理方法
  handleTenThousand() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterTenThousand = wx.getStorageSync('masterTenThousand');
    if (typeof masterTenThousand != 'string') {
      this.setData({
        masterTenThousand: true
      });
    }
    if (this.data.masterTenThousand) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetTenThousand) {
        getProgress = getProgress + this.data.masterTenThousandExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterTenThousandCoins);
        wx.setStorageSync('masterTenThousand', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterTenThousandExp}，钱币+${this.data.masterTenThousandCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握10000个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 耕耘收获 20000 单词奖励的处理方法
  handleTwentyThousand() {
    let getProgress = wx.getStorageSync('progress') || 0; // 经验值
    let money = wx.getStorageSync('money'); // 总货币数
    let masterTwentyThousand = wx.getStorageSync('masterTwentyThousand');
    if (typeof masterTwentyThousand != 'string') {
      this.setData({
        masterTwentyThousand: true
      });
    }
    if (this.data.masterTwentyThousand) {
      wx.showToast({
        title: '太贪心了吧，已经领取过了～',
        icon: 'none',
      });
    } else {
      if (this.data.canGetTwentyThousand) {
        getProgress = getProgress + this.data.masterTwentyThousandExp;
        wx.setStorageSync('progress', Number(getProgress.toFixed(2)));
        wx.setStorageSync('money', money + this.data.masterTwentyThousandCoins);
        wx.setStorageSync('masterTwentyThousand', true)
        wx.showToast({
          title: `一分耕耘一分收获，经验值+${this.data.masterTwentyThousandExp}，钱币+${this.data.masterTwentyThousandCoins}`,
          icon: 'none',
        });
      } else {
        wx.showToast({
          title: '哎呦，都没有掌握20000个单词，吁～～',
          icon: 'none',
        });
      }
    }
  },
  // 比较时间大小的公共方法
  isTimeGreaterThan(timeStr, comparisonStr) {
    // 将时间字符串转换为秒数
    function timeToSeconds(time) {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    }

    let timeInSeconds = timeToSeconds(timeStr);
    let comparisonInSeconds = timeToSeconds(comparisonStr);

    // 比较时间
    return timeInSeconds >= comparisonInSeconds;
  }
});