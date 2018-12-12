import types from '../types'
import http from '../../utils/http'

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
  httptest () {
    http.post('/validateCode', {random: 4}).then(function (response) {
      // response.data中获取ResponseData实体
    }, function (response) {
      // 发生错误
    })
  }
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
