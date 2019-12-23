import axios from 'axios'
import { Notify,Dialog  } from 'vant';
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: 'http://player.dj002.t1t.in/api/player_center', // url = base url + request url
  //withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['Content-Type'] = 'multipart/form-data'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Notify({
        message: res.message || 'Error',
        type: 'danger',
        duration: 5 * 1000
      })

      if (res.code === 161) {
        // to re-login
        Dialog.alert({
          title: '标题',
          message: 'You have been logged out, you can cancel to stay on this page, or log in again'
        }).then(() => {
          let data = {
            api_key: 'ea443b05c7067089bd2716f47257ee73',
            username: store.getters.name,
            token: store.getters.token
          }
          store.dispatch('user/logout',data).then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Notify({
      message: error.message,
      type: 'danger',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
