import { login, logout, getInfo, register } from '@/api/user'
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
        commit('SET_NAME', data.palyerName)
        setToken(data.token)
        Cookies.set('userName', data.playerName)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      let userInfoReady = false
      let userResponse = {}

      // We don't get user info from server (for now)
      // getInfo(state.token).then(response => {
      // const { data } = response
      const data = {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
      }

      if (!data) {
        reject('Verification failed, please Login again.')
      }

      const { roles, avatar } = data

      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        reject('getInfo: roles must be a non-null array!')
      }
      commit('SET_AVATAR', avatar)
      userResponse = data
      userInfoReady = true
      // }).catch(error => {
      //   reject(error)
      // })
      // Wait for both load to be ready, then we can resolve the promise
      var interval = setInterval(() => {
        if (userInfoReady) {
          resolve(userResponse)
          clearInterval(interval)
        }
      }, 300)
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

