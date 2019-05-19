import http from '../index'

export const getCateById = id => {
  return http({
    url: '/manage/category/get_category.do',
    method: 'get',
    params: {
      categoryId: id
    }
  })
}

export const editCateName = (id, name) => {
  return http({
    url: '/manage/category/set_category_name.do',
    params: {
      categoryId: id,
      categoryName: name
    }
  })
}

export const createCagegory = params => {
  return http({
    url: '/manage/category/add_category.do',
    params
  })
}

export const fetchProduct = pageNum => {
  return http({
    url: '/manage/product/list.do',
    params: {
      pageNum
    }
  })
}

export const fetchProductBySearch = ({ searchType, key, pageNum }) => {
  return http({
    url: '/manage/product/search.do',
    params: {
      listType: 'search',
      [searchType]: key,
      pageNum
    }
  })
}

export const createProduct = data => {
  return http({
    url: '/manage/product/save.do',
    params: data
  })
}

export const productDetail = productId => {
  return http({
    url: '/manage/product/detail.do',
    params: {
      productId
    }
  })
}

export const setStatus = (productId, status) => {
  return http({
    url: '/manage/product/set_sale_status.do',
    params: {
      productId,
      status
    }
  })
}
