import axios from 'axios'
import { Notify,Dialog  } from 'vant';
import store from '@/store'
import router from '@/router'

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
    let res = response.data
    if (typeof res == 'string') { // 拦截后台传回字符串问题
      let resData = res.split('</div>')[1]
      res = JSON.parse(resData)
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      if (res.code === 21 || res.code === 298) {
        const data = {
          result: []
        }
        return data
      }
      Notify({
        message: res.message || 'Error',
        type: 'danger',
        duration: 3 * 1000
      })

      if (res.code === 161) {
        // to re-login
        Dialog.alert({
          title: '标题',
          message: res.message
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            router.push({path: "/login"})
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
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
