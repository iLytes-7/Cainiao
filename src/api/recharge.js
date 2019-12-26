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

export function thirdPartyDepositRequest(data) {
  return request({
    url: '/thirdPartyDepositRequest',
    method: 'post',
    data: param(data)
  })
}

export function manualDepositForm(data) {
  return request({
    url: '/manualDepositForm',
    method: 'post',
    data: param(data)
  })
}

export function manualDepositRequest(data) {
  return request({
    url: '/manualDepositRequest',
    method: 'post',
    data: param(data)
  })
}



