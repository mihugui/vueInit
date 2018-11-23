import types from '../types'

const state = {
  demo: 5
}

// 定义 getters
var getters = {
  demo (state) {
    return state.demo
  }
}

const actions = {
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.DEMONAME] (state) {
    state.demo++
  }
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
