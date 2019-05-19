import http from '../index'

export const login = data => {
  const { username, password } = data
  return http({
    url: '/manage/user/login.do',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export const logout = () => {
  return http({
    url: '/user/logout.do',
    method: 'POST'
  })
}

export const fetchList = pageNum => {
  return http({
    url: '/manage/user/list.do',
    method: 'POST',
    data: {
      pageNum
    }
  })
}
