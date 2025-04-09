// **单一状态树**
import { createStore } from 'vuex'

const state = {
    count: 0,
}
const actions = {
    // commit 提交一次修改
    increment: ({commit}) => {
        commit('increment')
    },

}
// 修改state actions 允许异步，而mutations不允许异步
const mutations = {
    increment(state) {
        state.count++
    }

}
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default createStore({
  state,
  getters,
  mutations,
  actions,
})
