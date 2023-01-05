import './public-path';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';
//引入子应用中创建的action.js
import Actions from './utils/action.js'

Vue.config.productionTip = false;

Vue.use(ElementUI);

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    mode: 'hash',
    routes,
  });
  Vue.prototype.$globalStore = props.store
  instance = new Vue({
    router,
    store: store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  props.closeLoading() // 关闭loading
  // qiankun自带的通信方案 使用vuex可以不使用此方案
  Vue.use(Actions, props.actions)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
