import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import bank from './modules/bank'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    bank
  },
  getters
})

export default store
