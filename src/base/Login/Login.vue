<template>
  <div class="login">
    <div class="login-container">
      <div class="title">{{title}}</div>
      <div class="account">
        <label for=""><i class="iconfont icon-zhanghao"></i></label><input type="text" placeholder="请输入用户名">
      </div>
      <div class="account">
        <label for=""><i class="iconfont icon-pwd"></i></label><input type="password" placeholder="请输入密码">
      </div>
      <div class="login-register">
        <button>{{title}}</button>
      </div>
      <div class="revert-lg-rg"></div>
    </div>
  </div>
</template>

<script>
import 'common/font/iconfont/iconfont.css'
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
@import "~common/style/styl"
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
    height: 320px
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
      margin-top: 30px
      position: relative
      label
        font-size: 22px
        position: absolute
        left: 15px
        color: $title-color
      input
        height: 40px
        line-height: 40px
        width: 100%
        padding: 0 40px
        border: 1px solid $title-color
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        font-size: 16px
        -webkit-border-radius: 8px
        -moz-border-radius:8px
        border-radius:8px
        &:focus
          border: #d92100
          -webkit-box-shadow: 0 0 10px 0px $mw-active
          -moz-box-shadow: 0 0 10px 0px $mw-active
          box-shadow: 0 0 10px 0px $mw-active
          outline: none
    .login-register
      margin-top: 25px
      button
        width: 100%
        height: 40px
        line-height: 40px
        color: #ffffff
        text-align: center
        background: $mw-active
        font-size: 18px
        outline:none
        border: none
        -webkit-border-radius:  20px
        -moz-border-radius: 20px
        border-radius: 20px
        &:active
          background: $title-color
</style>
