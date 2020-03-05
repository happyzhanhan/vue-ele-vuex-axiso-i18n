import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getter'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

var state = {
  count: 9999
}

export default new Vuex.Store({
  state,
  getter,
  actions,
  mutations
})
