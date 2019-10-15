export const state = () => ({
  a: 123123123
})
export const mutations = {
  MODIFYHOTLISTDEFAULTLOADING(state, data) {
    state.hotListDefaultLoading = true
  },
  // 地图事件
  // 已下线  不用处理
  WRITEDIALOGVISIBLE(state, data) {
    state.dialogVisible = false
    state.dialogInfo = {}
  },
  WRITEDIALOGINFO(state, data) {
    state.dialogInfo = data
    state.dialogVisible = true
  },
  // 地图到这里
  // 当初这样写我也忘记为什么这样写了
  // 可能弱智

  // 登录弹出框
  WRITELOGINDIALOGVISIBLE(state, data) {
    state.loginDialogVisible = data
  },
  // 认领 快斗大叔
  // 已下线
  WRITEKUAIDOUDASHU(state, data) {
    state.kuaidoudashuShow = data
  },
  // cookie丢失
  WRITEUNKNOWCOOKIE(state, data) {
    state.unknowCookie = data
  },
  // sousuo loading
  WRITESEARCHLOADING(state, data) {
    state.searchLoading = data
  },
  // 微信公众号
  WRITEWXMODULELOADING(state, data) {
    state.wxModuleLoading = data
  },
  // 直播分析 最近十场列表
  WRITELIVELIST(state, data) {
    state.liveList = data
  },
  // 确认监控提示框和取消监控
  // 主要是保存anchor的id和name
  // id是userId， 短的id
  WRITEANCHORUSERINFO(state, data) {
    state.anchorUserInfo = data
  },
  // 获取vip价格
  // payModel需要这个进行配合
  WRITEPRICE(state, data) {
    state.price = data
  },
  // 修改支付框
  WRITEPAYMODEL(state, data) {
    state.payModel = data
  },
  PAYSELECTINDEX(state, data) {
    state.payIndex = data
  },
  WRITERIGHTSSTATUS(state, data) {
    state.rightsStatus = data
  },
  WRITERIGHTSLEVEL(state, data) {
    state.userLevel = data
  },
  // 每次请求页面获取用户权限
  WRITEUSERLEVEL(state, data) {
    state.middleInfoLevel = data
  },
  // 支付缘由
  WRITEPAYREASON(state, data) {
    state.payReason = data
  },
  // 当前在首页并且已经推出
  WRITEUSERLOGOUT(state, data) {
    state.uLogout = data
  },
  WRITEMONITORDIALOG(state, data) {
    state.monitorDialog = data
  },
  WRITEMONITORING(state, data) {
    state.monitoring = data
  },
  // 修改监控状态
  WRITEMONITORSTATUS(state, data) {
    state.monitorStatus = data
  },
  // 修改vip没有权益的status
  // default: collect
  // collect: '收藏',
  // monitor: '监控'
  WRITEVIPNONEPOWERSTATUS(state, data) {
    state.vipNonePowerStatus = data
  },
  WRITEVIPNONE(state, data) {
    state.vipNone = data
  },
  WRITEVIPDUE(state, data) {
    state.vipDue = data
  },
  WRITECUSTOMIZEDPAYMENTSCENEALIAS(state, data) {
    state.CustomizedPaymentSceneAlias = data
  },
  // 成为vip场景
  WRITEOPENVIPSTATUSDATA(state, data) {
    state.openVipStatusData = data
  },
  WRITESORT(state, data) {
    state.sort = data
  }
}
