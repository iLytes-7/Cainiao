import request from '@/utils/request'
import { param } from '@/utils'

export function listGamePlatforms(data) {
  return request({
    url: '/listGamePlatforms',
    method: 'POST',
    data: param(data)
  })
}

export function listGamesByPlatform(data) {
  return request({
    url: '/listGamesByPlatform',
    method: 'POST',
    data: param(data)
  })
}


