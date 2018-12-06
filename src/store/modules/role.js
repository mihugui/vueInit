import types from '../types'
import { Message } from 'iview'
const state = {
  roles: [],
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
  },
  roles (state) {
    return state.roles
  }
}

const actions = {
  setRoleName ({ commit, state }, data) {
    commit(types.SETROLENAME, data)
  },
  saveRole: function ({commit, state}, data) {
    let roleSave = JSON.parse(localStorage.getItem('roleSaveOfMyWorld'))
    if (roleSave === null) {
      roleSave = []
    }
    if (roleSave.length === 0) {
      roleSave.push(data)
    } else {
      let exitRole = roleSave.filter(p => {
        return p.id === data.id
      })
      if (exitRole.length === 1) {
        Message.error('错误,角色ID已经存在，请删除后保存')
      } else if (exitRole.length === 0) {
        roleSave.push(data)
      } else {
        console.log('数据错误,存在id相同的角色')
      }
    }
    commit(types.SETROLES, roleSave)
  },
  deleteRole: function ({commit, state}, data) {
    let roleSave = JSON.parse(localStorage.getItem('roleSaveOfMyWorld'))
    let exitRole = roleSave.filter(p => {
      return p.id !== data
    })
    commit(types.SETROLES, exitRole)
  }
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.SETROLENAME] (state, data) {
    state.roleName = data
  },
  [types.SETROLES] (state, data) {
    state.roles = data
    localStorage.setItem('roleSaveOfMyWorld', JSON.stringify(data))
  }
}
// 最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
