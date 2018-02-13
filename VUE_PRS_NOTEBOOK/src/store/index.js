import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex);

const state = {
  isAllList: true,
  notes: [],
  activeNote: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

