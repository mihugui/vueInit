import types from '../types'
const state = {
  // 角色名称
  roleName: '',
  // 角色状态
  condition: {
    // 生命
    lift: 100,
    // 健康状况(中毒,流血……)
    abnormal: ''
  },
  // 技能
  skill: {
    // 被动
    passive: [],
    // 主动
    active: []
  },
  isExist: false
}

// 定义 getters
var getters = {
  condition (state) {
    return state.condition
  },
  roleName (state) {
    return state.roleName
  }
}

const actions = {
  setPlayerName ({ commit, state }, data) {
    commit(types.SETPLAYERNAME, data)
  }
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.SETPLAYERNAME] (state, data) {
    state.playerName = data
  }
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
