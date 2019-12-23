import request from '@/utils/request'
import { param } from '@/utils'

export function message(data) {
  return request({
    url: '/message',
    method: 'post',
    data: param(data)
  })
}

export function addMessage(data) {
  return request({
    url: '/addMessage',
    method: 'post',
    data: param(data)
  })
}
