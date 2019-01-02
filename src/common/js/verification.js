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
export default {
  isPoneAvailable(phone) {
    return isPoneAvailable(phone)
  }
}
