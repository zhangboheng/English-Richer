Page({
  data: {
    getDefaultName: '',
    getDefaultLevel: '',
    getDefaultTotal: '',
    total: 832,
    getElementary: 0,
    getJunior: 0,
    getHigh: 0,
    getCet4: 0,
    getCet6: 0,
    getPostgraduate: 0,
    getToelf: 0,
    getSat: 0,
  },
  onLoad(options) {
    let nickname = wx.getStorageSync('nickname'); // 获取昵称
    let defaultLevel = wx.getStorageSync('defaultLevel'); // 初始水平
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
    console.info(elementaryMax);
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
    this.setData({
      getDefaultName: nickname,
      getDefaultLevel: defaultLevel,
      getDefaultTotal: TotalNumber,
      getElementary: elementaryMax,
      getJunior: juniorMax,
      getHigh: highMax,
      getCet4: cet4Max,
      getCet6: cet6Max,
      getPostgraduate: postgraduateMax,
      getToelf: toelfOneMax + toelfTwoMax,
      getSat: satMax
    });
  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  }
})