<template>
  <div class="login">
    <div class="login-container">
      <div class="title">{{title}}</div>
      <div class="account">
        <label for=""></label><input type="text" placeholder="请输入用户名">
      </div>
      <div class="account">
        <input type="password" placeholder="请输入密码">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      title: '登陆'
    }
  }
}
</script>

<style scoped lang="stylus">
.login
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100%
  background: rgba(0,0,0,0.3);
  z-index: 1000
  .login-container
    width: 360px
    height: 400px
    background: #fff
    -webkit-border-radius: 8px
    -moz-border-radius:8px
    border-radius: 8px
    -webkit-box-shadow: 0 0 30px 10px rgba(0,0,0,0.3)
    -moz-box-shadow: 0 0 30px 10px rgba(0,0,0,0.3)
    box-shadow: 0 0 30px 10px rgba(0,0,0,0.3)
    position: absolute
    left: 50%
    top: 100px;
    -webkit-transform: translate(-50%)
    -moz-transform: translate(-50%)
    -ms-transform: translate(-50%)
    -o-transform: translate(-50%)
    transform: translate(-50%)
    padding: 20px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .title
      font-size: 24px
    .account
      margin-top: 20px
      input
        height: 40px
        line-height: 40px
        width: 230px
        padding: 0 10px
        border: 1px solid $title-color
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
</style>
