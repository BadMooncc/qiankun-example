import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '123'
    }
  },
  mutations: {
    // SET_NAME(state, payload) {
    //   state.userInfo.name = payload
    // }
  }
});
