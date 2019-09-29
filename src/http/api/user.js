import http from '../config'

const login = data => {
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
export default {
  login
}
