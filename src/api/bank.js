import request from '@/utils/request'
import { param } from '@/utils'

export function getBank(data) {
  return request({
    url: '/queryDepositBank',
    method: 'post',
    data: param(data)
  })
}
