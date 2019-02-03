/**
 * Created by wxm-pc on 2019/1/22.
 */
let data = {}
let baseUrl = 'http://localhost:3000'
let request = new XMLHttpRequest()
request.open('get', `${baseUrl}/common/getdirect`, false) // 第三个参数 false 代表设置同步请求
request.setRequestHeader('Accept', ' */*');
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({}))
if (request.status === 200) {
  data = JSON.parse(request.response).data
  console.log(request.response)
} else {
  debugger
  // this.NETWORK_MODAL.show = true
}
export default {
  redData: data
}
