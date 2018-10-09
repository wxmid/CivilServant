import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 15000
let pathname = ''
let path = location.pathname
if (path) {
  console.log(path)
  pathname = path.split('/')[1]
  console.log(pathname)
}
axios.defaults.baseURL = '/' + pathname
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
    return response
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
