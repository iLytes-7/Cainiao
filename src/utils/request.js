import axios from 'axios'
import {Notify, Dialog} from 'vant';
import store from '@/store'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: 'https://player.dj002.t1t.in/api/player_center', // url = base url + request url
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
    if (response.config.url.indexOf('/player_center/isPlayerExist') > -1) { // 用户名重复问题
      if (res.code === 0) {
        res.code = 4
        res.message = '用户名重复'
      } else {
        res.code = 0
      }
    }
    if (res.code === 490) {
      res.message = '请选择银行！'
    }
    if (res.code === 491) {
      res.message = '请正确填写16-19位的银行卡号！'
    }
    if (res.code === 5) {
      res.message = '账户名或密码错误!'
    }
    if (res.code === 19) {
      res.message = '发生其他问题造成登入失败!'
    }
    if (res.code === 161) {
      res.message = '登陆信息已过期，请您重新登陆！'
    }
    if (res.code === 307) {
      res.message = '依照KYC规则，限制高风险玩家取款！'
    }
    if (res.code === 308) {
      res.message = '取款密码不正确！'
    }
    if (res.code === 309) {
      res.message = '单比取款金额超过上限！'
    }
    if (res.code === 310) {
      res.message = '单比取款金额低于下限！'
    }
    if (res.code === 311) {
      res.message = '每日累计取款金额超过上限！'
    }
    if (res.code === 312) {
      res.message = '每日累计取款次数超过上限！'
    }
    if (res.code === 313) {
      res.message = '流水不足，不能取款！'
    }
    if (res.code === 314) {
      res.message = '还没达到取款条件要求的流水，不能取款！'
    }
    if (res.code === 315) {
      res.message = '受VIP群组规则限制，同时只能发起一笔取款！'
    }
    if (res.code === 316) {
      res.message = '从自钱包转回主钱包失败，停止操作！'
    }
    if (res.code === 319) {
      res.message = '其他原因造成取款失败！'
    }
    if (res.code === 318) {
      res.message = '余额不足，取款失败！'
    }
    if (res.code === 594) {
      res.message = '该电话号码已经被使用！'
    }
    if (res.code === 544) {
      res.message = '请60秒之后再次尝试发送验证码！'
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      if (res.code === 21 || res.code === 298) { // 数据为空时，接口不返回空数组，且报错时的处理
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
      if (res.code === 161) { // token过期或者另一地点登录
        // to re-login
        Dialog.alert({
          title: '标题',
          message: res.message
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            const ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) != "micromessenger") {
              location.reload()
            } else {
              router.push({path: "/login"})
            }
          })
        })
      }
      if (res.code === 16) { // 玩家账号被锁，由于登陆次数过多
        Dialog.alert({
          title: '标题',
          message: '密码错误次数过多，账号被锁，请您十分钟之后再次尝试！如急需登陆账号，可前往首页联系客服，解锁账号。'
        }).then(() => {
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
