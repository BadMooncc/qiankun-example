class Actions {
  // 默认值为空 Action
  constructor(actions) {
    this.actions = actions
  }
  //拿到入口文件中设置子应用的全局方法
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }
  getGlobalState(...args) {
    return this.actions.getGlobalState(...args)
  }
}
// const actions = new Actions()
export default {
  install(Vue, actions) {
    Vue.prototype.$actions = new Actions(actions)
  }
}