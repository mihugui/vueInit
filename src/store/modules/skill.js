// import types from '../types'
const state = {
  // type：0:主动 1:被动
  skill: [
    {
      id: '1001',
      name: '主动技能1',
      type: 0,
      dmg: 10,
      // 技能效果作用对象 0:角色 1:背包 等其他效果
      effect: [
        {
          object: 0,
          attr: 'abnormal',
          change: '2001',
          time: 2
        },
        {
          object: 1,
          attr: 'wood',
          change: 10
        }
      ]
    }
  ],

  abnormal: [
    {
      id: '2001',
      name: 'poison',
      effect:[
        {
          attr: ''
        }
      ]
    }
  ]
}
var getters = {
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
