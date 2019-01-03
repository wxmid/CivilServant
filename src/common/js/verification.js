/**
 * Created by wxm-pc on 2019/1/2.
 */
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
  if(s >= 6 && s <= 20 ) return true
  return false
}
export default {
  isPoneAvailable(phone) {
    return isPoneAvailable(phone)
  },
  isPasswd(psw) {
    return isPasswd(psw)
  }
}
