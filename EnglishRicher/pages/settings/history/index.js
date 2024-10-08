Page({
  data: {
    versions: [
      {
        version: '2.6.5',
        date: '2024-05-18',
        icon: ['success_no_circle'],
        changes: [
          '修复 AI 回复不稳定问题。',
        ],
      },
      {
        version: '2.6.4',
        date: '2024-04-16',
        icon: ['info', 'info', 'success_no_circle'],
        changes: [
          '改善关卡中 AI 辅助记忆以及 AI 详解的响应速度。',
          '改善 AI 畅聊室的 AI 反应速度。',
          '处理 AI 畅聊室反馈偶有不畅导致无法继续畅聊的问题。'
        ],
      },
      {
        version: '2.6.3',
        date: '2024-04-14',
        icon: ['success'],
        changes: [
          '新增 AI 畅聊室功能，有什么疑问请咨询智能的机器人吧。'
        ],
      },
      {
        version: '2.6.2',
        date: '2024-04-13',
        icon: ['success'],
        changes: [
          '新增单词 AI 学习建议功能。'
        ],
      },
      {
        version: '2.6.1',
        date: '2024-04-12',
        icon: ['success'],
        changes: [
          '新增单词 AI 详解功能。'
        ],
      },
      {
        version: '2.6.0',
        date: '2024-03-30',
        icon: ['success_no_circle'],
        changes: [
          '解决发音偶尔延迟问题以及避免内存泄漏。'
        ],
      },
      {
        version: '2.5.9',
        date: '2024-03-23',
        icon: ['info', 'info', 'success_no_circle'],
        changes: [
          '优化基础信息中显示内容，增加待复习词数。',
          '完善关卡一以及复习模式一种点击解释后可以发音。',
          '修复替换伴音系统中不能播放的电台。',
          '修复 Bugs',
        ],
      },
      {
        version: '2.5.8',
        date: '2024-02-24',
        icon: ['success'],
        changes: [
          '英语词库增加不会按钮，点击后可将单词加入到温故知新。'
        ],
      },
      {
        version: '2.5.7',
        date: '2024-02-22',
        icon: ['success', 'success'],
        changes: [
          '英语词库新增单词列表从短到长以及从长到短排序。',
          '温故知新新增单词列表从短到长以及从长到短排序。'
        ],
      },
      {
        version: '2.5.6',
        date: '2024-02-18',
        icon: ['success'],
        changes: [
          '伴音系统新增可视化自定义选择。'
        ],
      },
      {
        version: '2.5.5',
        date: '2024-02-14',
        icon: ['info'],
        changes: [
          '优化温故知新复习模式下增加掌握，点击掌握即可去除温故知新中的词汇。'
        ],
      },
      {
        version: '2.5.4',
        date: '2024-02-11',
        icon: ['info', 'info', 'success_no_circle'],
        changes: [
          '优化英语词库和温故知新中单词搜索中输入空格的处理。',
          '优化在关卡中不会时弹出的显示内容。',
          '修正部分单词音标不规范问题。'
        ],
      },
      {
        version: '2.5.3',
        date: '2024-02-04',
        icon: ['info'],
        changes: [
          '优化关卡中掌握和不会时的进度记录，不会时不再消减进度。'
        ],
      },
      {
        version: '2.5.2',
        date: '2024-01-31',
        icon: ['success_no_circle'],
        changes: [
          '修正部分单词音标不规范问题。'
        ],
      },
      {
        version: '2.5.1',
        date: '2024-01-30',
        icon: ['info', 'info'],
        changes: [
          '完善 Game Two 轻航填字海 点击不会时弹出显示。',
          '完善温故知新复习模式二中点击不会时弹出显示。'
        ],
      },
      {
        version: '2.5.0',
        date: '2024-01-29',
        icon: ['success'],
        changes: [
          '温故知新复习模式增加音标显示。'
        ],
      },
      {
        version: '2.4.9',
        date: '2024-01-24',
        icon: ['success'],
        changes: [
          '温故知新导出新增音标列表。'
        ],
      },
      {
        version: '2.4.8',
        date: '2024-01-23',
        icon: ['success', 'success_no_circle'],
        changes: [
          '温故知新新增列表音标以及点击单词发音。',
          '修正部分英语单词解释不全问题。'
        ],
      },
      {
        version: '2.4.7',
        date: '2024-01-22',
        icon: ['success', 'success_no_circle'],
        changes: [
          '英语词库新增列表点击单词发音。',
          '修正高中水平英语单词解释排版问题。'
        ],
      },
      {
        version: '2.4.6',
        date: '2024-01-18',
        icon: ['success'],
        changes: [
          '所有水平关卡和英语词库单词新增音标显示。'
        ],
      },
      {
        version: '2.4.5',
        date: '2024-01-12',
        icon: ['info', 'success_no_circle'],
        changes: [
          '优化 Game One 诚实刷单词和 Game Two轻航填字海单词显示顺序。',
          '修复托福水平单词显示顺序问题。'
        ],
      },
      {
        version: '2.4.4',
        date: '2024-01-10',
        icon: ['success', 'info'],
        changes: [
          '关于我们新增团队人员和旗下产品。',
          'Game Three 选择知我意关卡选择后，补全正确发音。',
        ],
      },
      {
        version: '2.4.3',
        date: '2023-12-31',
        icon: ['success', 'info', 'info', 'success_no_circle'],
        changes: [
          '新增更多背景伴音。',
          '完善经验学堂内容。',
          '完善兑换市集可兑换物品。',
          '修复小学水平中在部分机型词组不发音问题。'
        ],
      },
      {
        version: '2.4.2',
        date: '2023-12-28',
        icon: ['info'],
        changes: [
          '完善伴音系统，新增更多选择，增加背景播放，解锁后，即使退出小程序也能播放了，规则变更如下，还是在初始页面按住 Logo 顺时针旋转一圈，依此三次，即可解锁，之后点击 Logo 是进行切换，长按 Logo 是停止播放。'
        ],
      },
      {
        version: '2.4.1',
        date: '2023-12-27',
        icon: ['info', 'info', 'info'],
        changes: [
          '完善经验学堂内容，增加分类标签。',
          '完善兑换市集提示框样式。',
          '人生无极限，定小目标不该有限制，策划谋略中的定小目标解除字数限制。'
        ],
      },
      {
        version: '2.4.0',
        date: '2023-12-24',
        icon: ['success', 'success', 'success'],
        changes: [
          '复习模式新增单局时间显示。',
          '速览模式新增时间显示。',
          '经验学堂引入广告赞助商。'
        ],
      },
      {
        version: '2.3.9',
        date: '2023-12-23',
        icon: ['info', 'info', 'info'],
        changes: [
          '完善任务大厅任务。',
          '完善兑换市集可兑换物品。',
          '完善经验学堂内容。'
        ],
      },
      {
        version: '2.3.8',
        date: '2023-12-19',
        icon: ['success', 'info'],
        changes: [
          '策略谋划新增定小目标功能，让梦想带你翱翔。',
          '进步轨迹完善我的梦想显示。'
        ],
      },
      {
        version: '2.3.7',
        date: '2023-12-18',
        icon: ['info'],
        changes: [
          '完善每局关卡加载速度。',
        ],
      },
      {
        version: '2.3.6',
        date: '2023-12-17',
        icon: ['success', 'info', 'info', 'success_no_circle'],
        changes: [
          '增加用户引导添加到我的小程序。',
          '完善广告显示。',
          '完善图标在不同尺寸屏幕中的尺寸显示。',
          '解决关卡中时间和奖励在部分机型遮挡问题。'
        ],
      },
      {
        version: '2.3.5',
        date: '2023-12-16',
        icon: ['success', 'info'],
        changes: [
          '关卡增加单局计时功能。',
          '进步轨迹完善进步总时统计。'
        ],
      },
      {
        version: '2.3.4',
        date: '2023-12-14',
        icon: ['success', 'info'],
        changes: [
          '温故知新增加更多复习模式入口。',
          '完善进步轨迹样式。'
        ],
      },
      {
        version: '2.3.3',
        date: '2023-12-13',
        icon: ['success', 'info'],
        changes: [
          '策略谋划新增进步轨迹功能。',
          '完善任务大厅任务。'
        ],
      },
      {
        version: '2.3.2',
        date: '2023-12-12',
        icon: ['info', 'info'],
        changes: [
          '小学英语单词和词组补全完毕。',
          '完善任务大厅任务。'
        ],
      },
      {
        version: '2.3.1',
        date: '2023-12-10',
        icon: ['success', 'info', 'info', 'info', 'success_no_circle', 'success_no_circle'],
        changes: [
          '兑换市集新增关卡体验道具，让没有达到等级的用户率先体验后续关卡一次。',
          '优化初始和策略谋划页面样式。',
          '优化兑换市集图片失真以及排版样式。',
          '完善广告显示。',
          '修复 Game Three 选择知我意 关卡封面图没有正确答案问题。',
          '解决单词发音源声音较小问题。'
        ],
      },
      {
        version: '2.3.0',
        date: '2023-12-08',
        icon: ['success', 'info', 'info'],
        changes: [
          '开启 Game Three 选择知我意关卡，限制 LV6 及其以后开启。',
          '优化掌握单词数量的计算方法，避免数量被重复计算。',
          '第一次进入开启旅途后，方便用户选择适合的英语水平。'
        ],
      },
      {
        version: '2.2.4',
        date: '2023-12-06',
        icon: ['success_no_circle'],
        changes: [
          '修复初始页面随机音频彩蛋在 Android 和 Windows 上没有声音问题。'
        ],
      },
      {
        version: '2.2.3',
        date: '2023-12-05',
        icon: ['success', 'info', 'info'],
        changes: [
          '初始页面新增随机音频彩蛋，满足想要一边学习一边听的需求，开启方法很简单，按住 Logo 顺时针旋转一周，松开，三次后即可解锁，想要停止只需要点击 Logo 即可。',
          '完善策略谋划页面显示内容。',
          '完善漂浮彩蛋内容。'
        ],
      },
      {
        version: '2.2.2',
        date: '2023-12-03',
        icon: ['success', 'info', 'info', 'info'],
        changes: [
          '英语词库增加速览功能。',
          '完善任务大厅任务。',
          '完善经验学堂内容。',
          '完善兑换市集道具。'
        ],
      },
      {
        version: '2.2.1',
        date: '2023-12-01',
        icon: ['success', 'success', 'success'],
        changes: [
          '温故知新增加容量限制。',
          '兑换市集新增解限卡，可以兑换后解除温故知新容量限制。',
          '温故知新复习模式增加了钱币限制，花费钱币后前往。',
        ],
      },
      {
        version: '2.2.0',
        date: '2023-11-29',
        icon: ['success', 'success'],
        changes: [
          '轻航填字海增加提示功能。',
          '温故知新新增复习模式。'
        ],
      },
      {
        version: '2.1.9',
        date: '2023-11-28',
        icon: ['success', 'success_no_circle'],
        changes: [
          '新增一个单词发音源。',
          '修复在 iOS 客户端，静音模式下无声音问题。'
        ],
      },
      {
        version: '2.1.8',
        date: '2023-11-27',
        icon: ['success', 'info'],
        changes: [
          '新增小学水平单词库以及对应的游戏关卡。',
          '完善经验学堂内容。'
        ],
      },
      {
        version: '2.1.7',
        date: '2023-11-26',
        icon: ['success', 'success'],
        changes: [
          '交换市集引入道具，一定几率获得钱币和经验值。',
          '完善任务大厅中的任务内容。'
        ],
      },
      {
        version: '2.1.6',
        date: '2023-11-25',
        icon: ['success'],
        changes: [
          '开启旅途新增经验学堂，分享学习上的经验技巧。'
        ],
      },
      {
        version: '2.1.5',
        date: '2023-11-24',
        icon: ['success'],
        changes: [
          '每一关都增加了单词朗读功能。'
        ],
      },
      {
        version: '2.1.4',
        date: '2023-11-23',
        icon: ['success'],
        changes: [
          '温故知新增加导出功能。'
        ],
      },
      {
        version: '2.1.3',
        date: '2023-11-22',
        icon: ['success', 'success', 'success', 'success_no_circle'],
        changes: [
          '增加选择水平时对应单词量。',
          '每关增加彩蛋。',
          '引入留言建议页面插件。',
          '修复单词进度显示不全问题。',
        ],
      },
      {
        version: '2.1.2',
        date: '2023-11-20',
        icon: ['success', 'success', 'success', 'success', 'info', 'success_no_circle', 'success_no_circle', 'success_no_circle'],
        changes: [
          '关卡增加刷单词进度。',
          '关于我们增加微信公众号关联。',
          '启动页增加公告信息和品牌标识。',
          '任务大厅以及兑换市集新增选项。',
          '更换图标为统一风格。',
          '优化修改昵称，免去误点后再输入问题。',
          '修复交换物品后，提示消息显示不全问题和钱币小数产生问题。',
          '修复策略谋划、英语词库和温故知新中样式显示问题。',
        ],
      },
      {
        version: '2.1.1',
        date: '2023-11-17',
        icon: ['success', 'success_no_circle'],
        changes: [
          '增加任务大厅功能，可以额外获取经验值和钱币。',
          '优化页面样式显示。',
        ],
      },
      {
        version: '2.1.0',
        date: '2023-11-16',
        icon: ['info'],
        changes: [
          '开启 Game Two 轻航填字海关卡，限制 LV3 及其以后开启。'
        ],
      },
      {
        version: '2.0.1',
        date: '2023-11-15',
        icon: ['success', 'success_no_circle'],
        changes: [
          '增加朋友和朋友圈分享功能。',
          '优化 Game One 诚实刷单词解释内容显示。'
        ],
      },
      {
        version: '2.0.0',
        date: '2023-11-07',
        icon: ['info'],
        changes: [
          '英语大富翁初始版发布。'
        ],
      },
    ],
  },
  // 页面分享
  onShareAppMessage() {},
  // 页面分享朋友圈
  onShareTimeline() {},
})