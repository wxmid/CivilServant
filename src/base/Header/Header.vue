<template>
  <div class="header">
    <div class="header-container">
      <router-link to="/"><img class="logo" src="/static/img/relogoRed.png" alt=""></router-link>
      <div class="topbar">
        <ul class="top-list">
          <li v-for="(item, index) in headerList" @click="currentHIndex = index" :key="item + index" class="top-item" :class="{h_active: currentHIndex === index}">{{item}}</li></ul>
      </div>
      <div class="login-rigister">
        <button @click="isShowLogin = true,login = true">登陆</button>
        <button @click="isShowLogin = true,login = false">注册</button>
      </div>
    </div>
    <v-login v-if="isShowLogin" @close="closeLoginModal" :login="login"></v-login>
  </div>
</template>

<script>
import Login from '@/base/Login/Login.vue'
export default {
  name: 'Header',
  components: {
    'v-login': Login
  },
  data () {
    return {
      currentHIndex: 0,
      headerList: ['国考', '省考', '银保监会', '事业单位', '证监会'],
      isShowLogin: false,
      login: true
    }
  },
  methods: {
    closeLoginModal (data) {
      this.isShowLogin = data
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
.header
  background: $title-color
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
        width: calc(100% - 320px)
        .top-list
          display flex
          justify-content flex-start
          .top-item
            list-style-type none
            font-size 18px
            color #fff
            width: 100px
            cursor: pointer
            text-align: center
            &:hover
              text-shadow: 0px 0px 20px #ffffff;
              font-weight:bold
          .h_active
            background: #fff
            color: $title-color
.login-rigister
        button
          background: rgba(255,255,255,0);
          border: none;
          width: 50px
          outline: none;
          color: #fff;
          font-size: 16px;
          &:hover
            text-shadow: 0px 0px 20px #ffffff;
            font-weight:bold
</style>
