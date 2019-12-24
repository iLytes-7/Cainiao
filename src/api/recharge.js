import request from '@/utils/request'
import { param } from '@/utils'
export function depositPaymentCategories(data) {
  return request({
    url: '/depositPaymentCategories',
    method: 'post',
    data: param(data)
  })
}
export function thirdPartyDepositForm(data) {
  return request({
    url: '/thirdPartyDepositForm',
    method: 'post',
    data: param(data)
  })
}


