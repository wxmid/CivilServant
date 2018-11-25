<template>
  <div class="forget-password">
    <div class="logo-img">
      <img src="/static/img/logoWhite.png" alt=""><span>多年来始终专注于互联网教育</span>
    </div>
    <div class="retrieve-password">
      <div class="f-title">找回密码</div>
      <div class="account">
        <label><i class="iconfont icon-shurushoujihao"></i></label><input type="text" placeholder="请输入手机号">
      </div>
      <div class="account verif-code">
        <input type="text" placeholder="请输入验证码"><button>获取验证码</button>
      </div>
      <div class="submit-get-p">
        <button>提交获取</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
.forget-password
  height: 100%
  background: #ffffff
  .logo-img
    padding-top: 40px
    width: 440px
    display: flex
    justify-content: space-between
    align-items: center
    margin: 0 auto
    img
      width: 200px
      vertical-align: middle
    span
      font-size: 18px
  .retrieve-password
    width: 440px
    margin: 0 auto
    margin-top: 10px
    padding: 40px
    -webkit-box-shadow: 0 12px 24px 0 rgba(28,31,33,.1)
    -moz-box-shadow: 0 12px 24px 0 rgba(28,31,33,.1)
    box-shadow: 0 12px 24px 0 rgba(28,31,33,.1)
    -webkit-border-radius: 8px
    -moz-border-radius: 8px
    -webkit-border-radius: 8px
    -moz-border-radius: 8px
    border-radius: 8px
    text-align: left
    .f-title
      font-size: 20px
      font-weight:bold
    .account
      margin-top: 30px;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      label
        font-size: 22px;
        position: absolute;
        left: 15px;
        color: #d62806;
      input
        height: 40px;
        line-height: 40px;
        width: 100%;
        padding: 0 40px;
        border: 1px solid #d62806;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 8px;
        &:focus
          border-color: #d92100
          -webkit-box-shadow: 0 0 10px 0px $mw-active
          -moz-box-shadow: 0 0 10px 0px $mw-active
          box-shadow: 0 0 10px 0px $mw-active
          outline: none
    .verif-code
      input
        width: 60%;
      button
        display: inline-block;
        background: #fff;
        border: 1px solid #d62806;
        width: 36%;
        height: 40px;
        background: #f32500;
        color: #fff;
        font-size: 16px;
        outline: none;
        border-radius: 6px;
        margin-left: 4%;
    .submit-get-p
      margin-top: 40px
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
