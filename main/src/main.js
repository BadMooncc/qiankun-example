import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router/index.js'
import store from './store'
import Element from 'element-ui'
import micoConf from './config/moico-config.js'
import 'element-ui/lib/theme-chalk/index.css';
import actions from './utils/action.js'



Vue.use(Element)
Vue.prototype._subapp = micoConf
Vue.config.productionTip = false
console.log(store, 'store')
const instance = new Vue({
  router,
  store,
  data() {
    return {
      loading: true
    }
  },
  render() {
    return <App loading={this.loading} />
  },
}).$mount('#mico-main')
registerMicroApps(micoConf.map(item => ({
  ...item,
  props: {
    store: store,
    actions,
    closeLoading: () => instance.loading = false
  }
})))
start()
  
