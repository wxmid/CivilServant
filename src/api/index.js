import axios from 'axios'
import qs from 'qs'
import config from 'config/index'
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
let baseUrl = config.glolal.baseUrl
axios.defaults.baseURL = config.glolal.baseUrl
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
function del (path, params) {
  return axios.delete(path, params)
}

// 请求接口
export default {
  // 获取资料信息列表
  getDataList (params) {
    return get('/manage/getdataList', params)
  },
  // 添加资料信息
  addData (params) {
    return post('/manage/addData', params)
  },
  // 编辑资料信息
  editData (params) {
    return post('/manage/editData', params)
  },
  // 编辑资料信息
  deleteData (params) {
    return del('/manage/deleteData', params)
  },
  // 文件上传路径
  uloadFile (params) {
    return upload('/common/uploadFile', params)
  },
  // 文件上传路径
  uploadUrl () {
    return baseUrl + '/common/uploadFile'
  },
  // 用户端获取筛选数据列表
  filtDataList (params) {
    return post('/data/getdataList', params)
  },
  // 根据id获取资料详情
  getDetail (params) {
    return get('/data/getdataDetail', params)
  },
  // 新用户注册
  register (params) {
    return post('/user/register', params)
  },
  // 用户登录
  login (params) {
    return post('/user/login', params)
  },
  // 指令
  direct (params) {
    return get('/common/getdirect', params)
  }
}
