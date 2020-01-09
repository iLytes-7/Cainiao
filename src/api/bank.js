import request from '@/utils/request'
import { param } from '@/utils'

export function getBank(data) {
  return request({
    url: '/queryDepositBank',
    method: 'post',
    data: param(data)
  })
}

export function transfer(data) {
  return request({
    url: '/transfer',
    method: 'post',
    data: param(data)
  })
}

export function getListPlayerWithdrawAccounts(data) {
  return request({
    url: '/listPlayerWithdrawAccounts',
    method: 'post',
    data: param(data)
  })
}

export function addPlayerWithdrawAccount(data) {
  return request({
    url: '/addPlayerWithdrawAccount',
    method: 'post',
    data: param(data)
  })
}

export function queryDepositWithdrawalAvailableBank(data) {
  return request({
    url: '/queryDepositWithdrawalAvailableBank',
    method: 'post',
    data: param(data)
  })
}

export function manualWithdraw(data) {
  return request({
    url: '/manualWithdraw',
    method: 'post',
    data: param(data)
  })
}
