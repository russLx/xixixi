import request from '../utils/request'
import API from './contant'

// 查询所有分类
// @returns 所有分类数据
export const getAllCategories = () => {
  return request({
    url: API.TABS_API,
    method: 'GET',
  })
}
//
export const getSubCategories = id => {
  return request({
    url: API.TAB_API + '/' + id,
    method: 'GET',
  })
}

// export {
//   getAllCategories,
//   getSubCategories,
// }
