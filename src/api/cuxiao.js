import request from '@/utils/request'
import { param } from '@/utils'

export function getListPromos(data) {
  return request({
    url: '/listPromos',
    method: 'post',
    data: param(data)
  })
}
