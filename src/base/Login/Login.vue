<template>
  <div class="login">
    <div class="login-container">
      <span class="close-l-r-modal" @click="close"><i class="iconfont icon-close2"></i></span>
      <div class="title">{{login ? '登陆' : '注册'}}</div>
      <div class="login-modal" v-if="login">
        <div class="account">
          <label><i class="iconfont icon-shurushoujihao"></i></label><input type="number" placeholder="请输入手机号" v-model="loginPhone">
        </div>
        <div class="account">
          <label><i class="iconfont icon-pwd"></i></label><input type="password" placeholder="请输入密码" v-model="loginPassword">
        </div>
        <div class="password-settings">
          <div class="remember-password"><input type="checkbox"><span> 记住密码</span></div>
          <div class="forget-password"><span @click="forgetPassword">忘记密码 ？</span></div>
        </div>
      </div>
      <div class="register-modal" v-else>
        <div class="account">
          <label><i class="iconfont icon-shurushoujihao"></i></label><input type="number" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="account verif-code">
          <input type="number" placeholder="请输入验证码" v-model="verificationCode"><button :class="{disabledbtn: !isPhone || !cangetVeriCode}" :disabled="!isPhone || !cangetVeriCode" @click="getVeriCode">{{getVeriBtnTxt}}</button>
        </div>
        <!--<div class="account">
          <label><i class="iconfont icon-zhanghao"></i></label><input type="text" placeholder="请输入用户名">
        </div>-->
        <div class="account">
          <label><i class="iconfont icon-pwd"></i></label><input type="password" placeholder="请输入密码(6~20位字符)" v-model="password">
        </div>
        <div class="account">
          <label><i class="iconfont icon-pwd"></i></label><input type="password" placeholder="请再次输入密码" v-model="confirmPassword">
        </div>
      </div>
      <div class="login-register">
        <button>{{login ? '登陆' : '注册'}}</button>
      </div>
      <div class="revert-lg-rg">
        <span @click="loginOrRegist">去{{login ? '注册' : '登陆'}} <i class="iconfont icon-arrowhead-top"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import phoneVerific from '../../common/js/verification.js'
export default {
  name: 'login',
  props: {
    login: {
      type: Boolean,
      defaul: true
    }
  },
  data () {
    return {
      phone: '',
      loginPhone: '',
      password: '',
      loginPassword: '',
      confirmPassword: '',
      isPhone: false,
      cangetVeriCode: false,
      verificationCode: '',
      getVeriBtnTxt: '获取验证码'
    }
  },
  watch: {
    phone(val,oldVal) {
      this.isPhone = phoneVerific.isPoneAvailable(this.phone)
      this.cangetVeriCode = phoneVerific.isPoneAvailable(this.phone)
      console.log(this.isPhone)
    }
  },
  methods: {
    checkLoginRegister() {
      if(this.login) {
        if(!phoneVerific.isPoneAvailable(this.loginPhone)) {
          this.$Message.error("请输入正确的手机号");
          return false
        } else if(!phoneVerific.isPasswd(this.loginPassword)) {
          this.$Message.error("密码为6~20位字符");
          return false
        }
      } else {
        if(!phoneVerific.isPoneAvailable(this.phone)) {
          this.$Message.error("请输入正确的手机号");
          return false
        } else if(this.verificationCode.length != 6) {
          this.$Message.error("请正确输入验证码");
          return false
        } else if(!phoneVerific.isPasswd(this.password)) {
          this.$Message.error("密码为6~20位字符");
          return false
        } else if(this.password != this.confirmPassword) {
          this.$Message.error("两次密码不一致");
          return false
        }
      }
      return true
    },
    getVeriCode() {
      this.cangetVeriCode = false
      let time = 10
      let timer = setInterval(() => {
        time--
        if(time < 0) {
          this.getVeriBtnTxt = "重新发送"
          this.isPhone = phoneVerific.isPoneAvailable(this.phone)
          this.cangetVeriCode = phoneVerific.isPoneAvailable(this.phone)
          clearInterval(timer)
        } else {
          this.getVeriBtnTxt = "重新发送(" + time + "s)"
        }
      },1000)
    },
    close () {
      this.$emit('close', false)
    },
    loginOrRegist () {
      this.$emit('loginSwitch', !this.login)
    },
    forgetPassword () {
      window.open('#/forgetPassword')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
/*在谷歌下移除input[number]的上下箭头*/
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button{
  -webkit-appearance: none !important;
}
/*在firefox下移除input[number]的上下箭头*/
input[type="number"]{-moz-appearance:textfield;}
.disabledbtn
  background: #cccccc!important
  border-color: #cccccc !important
.login
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 100%
  background: rgba(0,0,0,0.3);
  z-index: 1000
  .login-container
    position: relative
    width: 360px
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
    padding: 20px 40px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    .close-l-r-modal
      position: absolute
      right: 15px
      top: 10px
      padding: 6px
      i
        font-size:18px
        font-weight: bold
        color: #999
    .title
      font-size: 24px
    .account
      margin-top: 30px
      position: relative
      display: flex
      justify-content: flex-end
      align-items: center
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
        font-size: 14px
        -webkit-border-radius: 8px
        -moz-border-radius:8px
        border-radius:8px
        &:focus
          border-color: #d92100
          -webkit-box-shadow: 0 0 10px 0px $mw-active
          -moz-box-shadow: 0 0 10px 0px $mw-active
          box-shadow: 0 0 10px 0px $mw-active
          outline: none
    .verif-code
      input
        width: 60%
      button
        display: inline-block
        background: #ffffff
        border: 1px solid $title-color
        width: 36%
        height: 40px
        background: $mw-active
        color: #ffffff
        font-size: 15px
        outline: none
        -webkit-border-radius: 6px
        -moz-border-radius:6px
        border-radius:6px
        margin-left:4%
        &:active
          background: $title-color
    .password-settings
      display: flex
      justify-content: space-around
      font-size: 13px
      color: #666
      margin-top: 10px
      .remember-password
        input,span
          vertical-align: middle
          cursor: pointer
      .forget-password
        cursor: pointer
        &:hover
            color: $mw-active
    .login-register
      margin-top: 10px
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
    .revert-lg-rg
      font-size: 14px
      span
        display: inline-block
        height: 40px
        line-height: 40px
        padding: 0 20px
        cursor: default
  .register-modal
    .account
      margin-top:15px
</style>
