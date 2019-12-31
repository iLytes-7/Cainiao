import { login, logout, getPlayerProfile, register } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
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

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  signUp({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      register(userInfo).then(response => {
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

