<template>
  <div class="header">
    <div class="header-container">
      <a href="#"><img class="logo" src="/static/img/logo.png" alt=""></a>
      <div class="topbar">
        <ul class="top-list">
          <li class="top-item">18国考</li>
          <li class="top-item">18国考</li>
          <li class="top-item">18国考</li>
          <li class="top-item">18国考</li>
        </ul>
      </div>
      <div class="login-rigister">
        <button>登陆</button>
        <button>注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
.header
  background: #d62806
  .header-container
      height: 72px;
      line-height: 72px;
      text-align: left;
      max-width:1200px;
      min-width: 960px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .logo
        height: 72px;
      .topbar
        width: calc(100% - 300px)
        .top-list
          display flex
          justify-content space-around
          .top-item
            list-style-type none
            font-size 18px
            color #fff
  .login-rigister
        button
          background: rgba(255,255,255,0);
          border: none;
          outline: none;
          color: #fff;
          font-size: 16px;
</style>
