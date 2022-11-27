import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {
      name: '王大锤',
      age: 12,
      sex: '男',
    }
  },
  getters: {
    userName: state => state.userInfo.name
  },
  mutations: {
    SET_NAME(state, payload) {
      state.userInfo.name = payload
    }
  },
  actions: {

  }
})