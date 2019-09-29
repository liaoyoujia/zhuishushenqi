import http from '../config'

const home = () => {
  return http({
    url: '/manage/statistic/base_count.do',
    method: 'get'
  })
}

export default {
  home
}
