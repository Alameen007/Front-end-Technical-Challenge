import { request, baseUrl } from '../utils'

export async function login (data) {
  const url = `${baseUrl}/authentication`
  return request({
    url,
    method: 'post',
    data,
  })
}
export async function register (data) {
  const url = `${baseUrl}/register`
  return request({
    url,
    method: 'post',
    data,
  })
}
