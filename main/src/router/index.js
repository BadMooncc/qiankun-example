import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/vue'
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue')
    },
  ],
})