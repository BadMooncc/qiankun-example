import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globalStore: {
      state: {
        userInfo: {}
      },
      mutations: {
        // 子应用自己写操作主应用的mutations方法
        SET_NAME(state, payload) {
          state.userInfo.name = payload
        }
      }
    }, // 承载main主应用传过来的vue
    vue: {

    }
  },
});
