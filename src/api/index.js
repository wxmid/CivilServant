import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 15000
axios.defaults.withCredentials = false
let pathname = ''
let path = location.pathname
// axios.defaults.baseURL = top.location.origin // 自动获取域名
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers = {
  'Accept': 'application/json;charset=utf-8',
  'Content-Type': 'application/json;charset=utf-8'
}
const formdateConfig = {
  headers: {
    'Content-Type': 'multipart/formDate'
  }
}
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data)
    } else if (config.method === 'get') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
function post (path, params) {
  return axios.post(path, params)
}
function upload (path, params) {
  return axios.post(path, params, formdateConfig)
}
function get (path, params) {
  return axios.get(path, params)
}

// 请求接口
export default {
  // 获取资料信息列表
  getDataList(params) {
    return get('/manage/getdataList',params)
  },
  // 添加资料信息
  addData(params) {
    return post('/manage/addData',params)
  },
}
