import http from '../index'

export const home = () => {
  return http({
    url: '/manage/statistic/base_count.do',
    method: 'get'
  })
}
