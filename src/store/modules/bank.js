import { queryPlayerBalance } from '@/api/user'

const state = {
  mainWallet: 0
}

const mutations = {
  SET_MAINWALLET: (state, mainWallet) => {
    state.mainWallet = mainWallet
  }
}

const actions = {
// user mainWallet
  queryPlayerBalance({ commit }, data) {
    return new Promise((resolve, reject) => {
      queryPlayerBalance(data).then(response => {
        const data = response.result
        let mainwallet = data.mainwallet + data.subwallets[5593]
        commit('SET_MAINWALLET', mainwallet)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
