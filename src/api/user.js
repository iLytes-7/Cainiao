import request from '@/utils/request'
import { param } from '@/utils'
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: param(data)
  })
}

export function forgetPwd(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
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

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register(data) {
  return request({
    url: '/createPlayer',
    method: 'post',
    data: param(data)
  })
}


