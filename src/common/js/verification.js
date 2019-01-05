/**
 * Created by wxm-pc on 2019/1/2.
 */
// 手机号校验
function isPoneAvailable(phone) {
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(phone)) {
    return false;
  } else {
    return true;
  }
}
//校验密码：只能输入6-20个字母、数字、下划线
function isPasswd(s) {
  // var patrn = /^(\w){6,20}$/;
  // if (!patrn.exec(s)) return false
  if(s.length >= 6 && s.length <= 20 ) return true
  return false
}
// 日期格式转化
function padLeftZero(str){
  return ('00'+str).substr(str.length);
}
function formatDate(time,fmt){
  let date = new Date(time);
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth()+1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for(let k in o){
    let str = o[k]+'';
    if(new RegExp(`(${k})`).test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
    }
  }
  return fmt;
};

export default {
  isPoneAvailable(phone) {
    return isPoneAvailable(phone)
  },
  isPasswd(psw) {
    return isPasswd(psw)
  },
  formatDate(time,fmt) {
    return formatDate(time,fmt);
  }
}
