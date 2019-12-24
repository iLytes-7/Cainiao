import request from '@/utils/request'
import { param } from '@/utils'
export function getPlayerReports(data) {
  return request({
    url: '/getPlayerReports',
    method: 'post',
    data: param(data)
  })
}


