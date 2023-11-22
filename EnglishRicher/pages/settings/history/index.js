Page({
  data: {
    versions: [
      {
        version: '2.3.0',
        date: '未知',
        icon: ['waiting'],
        changes: [
          '开启 Game Three 选择知我意关卡，限制 LV6 及其以后开启。',
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
          '每日任务以及兑换市集新增选项。',
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
          '增加每日任务功能，可以额外获取经验值和钱币。',
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