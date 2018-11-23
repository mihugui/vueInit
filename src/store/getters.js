import demo from './modules/demo'

const getters = {
  isEvenOrOdd (state) {
    // 注意数据是从 demo.js 中获取的，所以写成 demo.state.demo
    return demo.getters.demo % 2 === 0 ? '偶数' : '奇数'
  }
}
// 并导出
export default getters
