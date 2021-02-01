YL.static = {
  /** “关于”信息 */
  softwareName: 'Se OS', //网站名。请在此处填写您自己的网站名，如王小明的博客。
  version: "8.8.8", // 网站版本号
  iconBtnStart: 'scribd', //主图标
  author: 'Seikka',//作者
  contactInformation: 'seikka@seikka.xyz',//联系方式
  officialWebsite: '//seikka.52msr.cn',//软件官网
  welcome: 'Power by Seikka\n详细信息：//seikka.52msr.cn',//加载完毕控制台提示信息
  copyrightDetail: 'Seikka',//版权详细信息
  otherStatements: '',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** SeOS基础设置 */
  lang: 'zh-cn', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: ['system', 'color-picker', 'fa', 'browser', 'server', 'music'], // 锁定的应用（不允许被脚本修改）
  trustedApps: ['server'], // 受信任的应用（可以使用敏感API）
  debug: false,//启用更多调试信息
  beforeOnloadEnable: true,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: true,//存档数据是否可被普通用户修改
  dataCenter: true,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** SeOS注册信息 */
  authorization: '测试版',//授权类型
  serialNumber: 8888,//序列号

};
