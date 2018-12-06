const state = {
  version: '0.0.1'
}

var getters = {
  version (state) {
    return state.version
  }
}

const actions = {
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
