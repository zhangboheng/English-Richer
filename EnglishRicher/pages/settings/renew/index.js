const XLSX = require('../../../utils/excel.js');
let videoAd = null
Page({
  data: {
    globalData: [], // 全局获取所有单词列表
    listData: [],
    searchData: '', // 搜索关键词
    exportList: [], // 导出内容
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
  onLoad: function (options) {
    // 从缓存中获取不会的单词
    let database = wx.getStorageSync('notMasterWords') || [];
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-67cd6ef4b3dd9519'
      })
      videoAd.onLoad(() => {
        console.log('激励视频 广告加载成功')
      })
      videoAd.onError((err) => {
        console.error('激励视频光告加载失败', err)
      });
    }
    // 显示正在刷新提示框
    wx.showToast({
      title: '努力加载中……',
      icon: 'loading',
      duration: 500
    });
    // 初次加载获取数据
    let trueData = database.sort(this.shuffleArray);
    trueData = trueData.map(item => ({ ...item, show: false }));
    // 赋值给子组件列表
    this.setData({
      listData: trueData,
      globalData: trueData,
      exportList: database
    });
  },
  // 输入时的方法
  onInput: function (e) {
    const searchData = e.detail.value;
    this.setData({
      searchData: searchData
    });
  },
  // 当点击搜索按钮的时候方法
  onSearch: function () {
    let searchData = this.data.searchData;
    let filterArr = this.data.globalData.filter(item => item.word.toLowerCase().indexOf(searchData.toLowerCase()) > -1 || item.translations.map(x=>x.translation).some(x=>x.indexOf(searchData) > -1));
    this.setData({
      listData: filterArr
    });
  },
  // 当点击导出按钮的时候方法
  onExport: function () {
    // 数据源
    const data = this.data.exportList
    if (data.length == 0) {
      wx.showToast({
        title: '没有不会的导出个锤子哟～～',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    // 构建一个表的数据
    let sheet = []
    let title = ['单词', '解释', '复习计划']
    sheet.push(title)
    data.forEach(item => {
      let rowcontent = []
      rowcontent.push(item.word)
      console.info(item);
      rowcontent.push(item.translations.map(x=>x.translation))
      sheet.push(rowcontent)
    })
    var ws = XLSX.utils.aoa_to_sheet(sheet);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "温故知新生词本");
    var fileData = XLSX.write(wb, {
      bookType: "xlsx",
      type: 'base64'
    });
    let filePath = `${wx.env.USER_DATA_PATH}/温故知新生词本.xlsx`
    // 写文件
    const fs = wx.getFileSystemManager()
    fs.writeFile({
      filePath: filePath,
      data: fileData,
      encoding: 'base64',
      success(res) {
        const sysInfo = wx.getSystemInfoSync()
        if (sysInfo.platform.toLowerCase().indexOf('windows') >= 0) {
          wx.saveFileToDisk({
            filePath: filePath,
            success(res) {
              console.log(res)
            },
            fail(res) {
              console.error(res)
              util.tips("导出失败")
            }
          })
        } else {
          // 手机端导出
          wx.openDocument({
            filePath: filePath,
            success: function (res) {
              console.log('打开文档成功')
            },
            fail: console.error
          })
        }
      },
      fail(res) {
        if (res.errMsg.indexOf('locked')) {
          wx.showModal({
            title: '提示',
            content: '文档已打开，请先关闭',
          })
        }

      }
    })
  },
  // 获取删除的词汇
  getRemoveWord: function(e){
    // 从缓存中获取不会的单词
    let database = wx.getStorageSync('notMasterWords') || [];
    const word = e.detail;
    // 从缓存中去除该单词
    let newNotMasterWords = database.filter(item => item.word != word);
    wx.setStorageSync('notMasterWords', newNotMasterWords);
    // 重新加载当前本地单词
    let trueData = newNotMasterWords.sort(this.shuffleArray);
    trueData = trueData.map(item => ({ ...item, show: false }));
    // 赋值给子组件列表
    this.setData({
      listData: trueData,
      globalData: trueData,
      exportList: newNotMasterWords
    });
  },
  // 点击后获取真实链接
  handleChooseOneOrTwo: function(event) {
    const data = event.detail.url;
    if (videoAd) {
      videoAd.show().catch(() => {
        videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.error('激励视频 广告显示失败', err)
          })
      });
      videoAd.onClose((res) => {
        if (res && res.isEnded) {
          wx.navigateTo({
            url: data,
          });
        } else {
          // 播放中途退出，不下发游戏奖励
          wx.showToast({
            title: '由于没有看完，无法进入复习',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },
  // 公共乱序方法
  shuffleArray: function(_a, _b) {
    return 0.5 - Math.random();
  }
})