import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import player from './modules/player.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    player
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
