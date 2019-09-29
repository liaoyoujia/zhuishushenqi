import http from '../config'

const getCateById = id => {
  return http({
    url: '/manage/category/get_category.do',
    method: 'get',
    params: {
      categoryId: id
    }
  })
}

export default {
  getCateById
}
