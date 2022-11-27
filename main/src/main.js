import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import router from './router/index.js'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Element)
Vue.config.productionTip = false

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
registerMicroApps([
  {
    name: "vue",
    entry: "//localhost:7102",
    container: "#subapp-viewport",
    activeRule: "/vue",
    props: {
      closeLoading: () => instance.loading = false
    }
  },
])
start()
  
