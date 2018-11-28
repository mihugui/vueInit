import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import role from './modules/role.js'
import world from './modules/world.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  actions,
  modules: {
    role,
    world
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
