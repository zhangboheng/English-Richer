Page({
  data: {
    getDefaultName: '',
    getDefaultLevel: '',
    getDefaultTotal: '',
    getMyDream: '',
    getClockTime: '00:00:00',
    getTrueName: '英语小菜鸟',
    getTrueParam: '刚刚起步，财富虽少但学词如风',
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
    let getMyDream = wx.getStorageSync('myDream'); // 获取小目标
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
    let getClockTime = wx.getStorageSync('clockTime'); // 获取计时统计
    let getTrueName = "";
    let getTrueParam = "";
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
    if (TotalNumber < 500) {
      getTrueName = "英语小菜鸟";
      getTrueParam = '刚刚起步，财富虽少但学词如风';
    } else if (TotalNumber < 1000 && TotalNumber >= 500) {
      getTrueName = "学霸掌门人";
      getTrueParam = '单词学得漂亮，成为学霸的领头人';
    } else if (TotalNumber < 2500 && TotalNumber >= 1000) {
      getTrueName = "语言钻石王老五";
      getTrueParam = '单词就像钻石一样在你手中闪烁';
    } else if (TotalNumber < 4500 && TotalNumber >= 2500) {
      getTrueName = "拼写富豪";
      getTrueParam = '单词拼写游刃有余，财产节节攀升';
    } else if (TotalNumber < 7000 && TotalNumber >= 4500) {
      getTrueName = "口语巨星";
      getTrueParam = '口语表达如巨星般耀眼，财富也随之喷涌而至';
    } else if (TotalNumber < 10000 && TotalNumber >= 7000) {
      getTrueName = "英语财阀继承人";
      getTrueParam = '成为英语学习的继承人，财富源源不断';
    } else if (TotalNumber < 14000 && TotalNumber >= 10000) {
      getTrueName = "流利语言达人";
      getTrueParam = '语言流利无阻，成为学习之路的巅峰者';
    } else if (TotalNumber < 19000 && TotalNumber >= 14000) {
      getTrueName = "词海泰斗";
      getTrueParam = '在词海中航行自如，成为学习的泰斗';
    } else if (TotalNumber >= 19000) {
      getTrueName = "英语大富翁";
      getTrueParam = '财富如潮水般滚滚而来，你已是英语学习的大富翁';
    }
    this.setData({
      getDefaultName: nickname,
      getDefaultLevel: defaultLevel,
      getDefaultTotal: TotalNumber,
      getClockTime: getClockTime,
      getMyDream: getMyDream.length == 0 ? '暂无' : getMyDream,
      getElementary: elementaryMax,
      getJunior: juniorMax,
      getHigh: highMax,
      getCet4: cet4Max,
      getCet6: cet6Max,
      getPostgraduate: postgraduateMax,
      getToelf: toelfOneMax + toelfTwoMax,
      getSat: satMax,
      getTrueName: getTrueName,
      getTrueParam: getTrueParam
    });
  },
})