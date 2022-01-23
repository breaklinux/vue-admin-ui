import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return request({
    url: '/account/users/login/',
    method: 'post',
    data
  })
}
export function getInfo(token) {
  return request({
    url: '/account/users/',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/account/users/logout/',
    method: 'get'
  })
}
