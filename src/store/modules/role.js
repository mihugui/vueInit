import types from '../types'
const state = {
  // 角色唯一编号
  id: '',
  // 角色名称
  roleName: '',
  // 级别
  level: 0,
  // 角色状态
  condition: {
    // 生命
    lift: {
      max: 100,
      real: 100
    },
    // 健康状况(中毒,流血……)
    abnormal: [],
    // 年龄
    age: {
      max: 100,
      real: 15
    }
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
  setRoleName ({ commit, state }, data) {
    commit(types.SETROLENAME, data)
  }
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.SETROLENAME] (state, data) {
    state.roleName = data
  }
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
