import Vue from 'vue'
import Vuex from 'vuex'
import cocktails from './modules/cocktails';
import loading from './modules/loading';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cocktails,
    loading
  }
})
