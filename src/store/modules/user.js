import { login, logout, getPlayerProfile, smsRegCreatePlayer, updatePlayerWithdrawalPassword } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { transfer} from "@/api/bank"
import Cookies from 'js-cookie'

const state = {
  token: getToken(),
  name: Cookies.get('userName'),
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const data = response.result
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.playerName)
        setToken(data.token)
        Cookies.set('userName', data.playerName)
        let data1 = {
          api_key: "ea443b05c7067089bd2716f47257ee73",
          username: userInfo.username,
          token: data.token,
          new_password:userInfo.password,
          force_reset: 1
        }
        updatePlayerWithdrawalPassword(data1).then(response => {
        })
        // let data2 = {
        //   api_key: "ea443b05c7067089bd2716f47257ee73",
        //   username: userInfo.username,
        //   token: data.token,
        //   transfer_to: 5593,
        //   transfer_from:0
        // }
        // transfer(data2).then(res => {
        // })
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  signUp({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      smsRegCreatePlayer(userInfo).then(response => {
        const data = response.result
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.playerName)
        setToken(data.token)
        Cookies.set('userName', data.playerName)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state },data) {
    return new Promise((resolve, reject) => {
      logout(data).then(res => {
        commit('SET_TOKEN', '')
        removeToken()
        Cookies.remove('userName')
        Cookies.remove('incap_ses_798_2130206', {path: 'https://h5.egaming1.com'})
        Cookies.remove('nlbi_2130206')
        Cookies.remove('visid_incap_2130206')
        Cookies.remove('yd_cookie')
        resolve()
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      Cookies.remove('userName')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

