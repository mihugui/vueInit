// import types from '../../types'
const state = {
  // 村落名称
  towns: [
    {
      name: '',
      desc: '',
      npc: [
        {
          name: '',
          type: ''
        }]
    }
  ]

}

// 定义 getters
var getters = {
  Name (state) {
    return state.Name
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
