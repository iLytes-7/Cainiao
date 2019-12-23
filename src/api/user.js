import request from '@/utils/request'
import { param } from '@/utils'
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: param(data)
  })
}

export function forgetPwdsendMsg(data) {
  return request({
    url: '/passwordRecovSmsSend',
    method: 'post',
    data: param(data)
  })
}

export function isPlayerExist(api_key,data) {
  return request({
    url: '/isPlayerExist/'+api_key+'/'+data,
    method: 'get'
  })
}
export function forgetPwdRecvMsg(data) {
  return request({
    url: '/passwordRecovSmsRecv',
    method: 'post',
    data: param(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getGoods() {
  return request({
    url: '/user/userList',
    method: 'get'
  })
}

export function getPlayerProfile(data) {
  return request({
    url: '/getPlayerProfile',
    method: 'post',
    data:param(data)
  })
}

export function updatePlayerProfile(data) {
  return request({
    url: '/updatePlayerProfile',
    method: 'post',
    data:param(data)
  })
}

export function bannerMiddle() {
  return request({
    url: '/banner/list/banner_middle',
    method: 'get'
  })
}

export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data:param(data)
  })
}

export function register(data) {
  return request({
    url: '/createPlayer',
    method: 'post',
    data: param(data)
  })
}


