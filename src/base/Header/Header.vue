<template>
  <div class="header">
    <div class="header-container">
      <router-link to="/"><img class="logo" src="/static/img/relogoRed.png" alt=""></router-link>
      <div class="topbar">
        <ul class="top-list">
          <li v-for="(item, index) in headerList" @click="changeIndex(item,index)" :key="item + index" class="top-item" :class="{h_active: $route.fullPath == item.path}">{{item.name}}</li>
        </ul>
      </div>
      <!--<div v-if="userInfo" class="user-info">
        <div class="user-mobile">{{userInfo.phone}}</div>
        <div class="user-avatar"><img :src="userInfo.avatar ? userInfo.avatar : defaultAvatar" alt=""></div>
      </div>
      <div v-else class="login-rigister">
        <button @click="isShowLogin = true,login = true">登陆</button>
        <button @click="isShowLogin = true,login = false">注册</button>
        <span id="qqLoginBtn"></span>
      </div>-->
      <span id="qqLoginBtn"></span>
    </div>
    <v-login v-if="isShowLogin" @close="closeLoginModal" @loginSwitch="lognRegistSwith" :login="login"></v-login>
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
      headerList: [
        {
          name: '国考',
          path: '/home?tp=0'
        },
        {
          name: '省考',
          path: '/home?tp=1'
        },
        {
          name: '银保监会',
          path: '/home?tp=2'
        },
        {
          name: '事业单位',
          path: '/home?tp=3'
        },
        {
          name: '证监会',
          path: '/home?tp=4'
        },
        {
          name: '关于会员',
          path: '/memberShip'
        }],
      isShowLogin: true,
      login: true,
      userInfo: null,
      defaultAvatar: '/static/img/avatar.jpg' //require('/static/img/avatar.jpg')
    }
  },
  watch: {},
  mounted () {
    QC.Login({
      btnId: "qqLoginBtn" // 插入按钮的节点id
    })
  },
  created() {
    let getlocalUserInfo = localStorage.getItem("_userInfo_")
    if(getlocalUserInfo) {
      this.userInfo = JSON.parse(getlocalUserInfo)
    }
    this.getSession();
  },
  methods: {
    getSession() {
      this.api.getSession({}).then((res) => {
        debugger
        if (res.status === 0) {
          self.userInfo = res.userInfo
          console.log(res.userInfo)
        }
      })
    },
    closeLoginModal (data) {
      this.isShowLogin = data.isShowLogin
      this.userInfo = data.userInfo
    },
    lognRegistSwith (data) {
      this.login = data
    },
    changeIndex (data, index) {
      this.$router.push({path: data.path})
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
      max-width:1100px;
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
            color #e2e2e2
            width: 100px
            cursor: pointer
            text-align: center
            &:hover
              text-shadow: 0px 0px 30px #fff;
              font-weight: bolder
          .h_active
            text-shadow: 0px 0px 30px #ffffff;
            color: #fff
            font-weight: bold
.login-rigister
  width: 190px
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
.user-info
  padding: 0 20px
  display: flex
  justify-content: space-between
  align-items: center
  .user-mobile
    font-size: 16px;
    color: #fff
    font-weight: bolder
    margin-right: 12px
  .user-avatar
    width: 50px
    height: 50px
    display: flex
    justify-content: space-between
    align-items: center
    -webkit-border-radius:50%
    -moz-border-radius:50%
    border-radius: 50%
    overflow: hidden
    img
      width: 100%
</style>
<style lang="stylus">
#qqLoginBtn
  display: inline-block
  a
    display: inline-block
    img
      display: inline-block
      vertical-align: middle!important
      margin-top: -4px;
</style>
<style lang="stylus">
  #qqLoginBtn
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    .figure
      img
        vertical-align: middle;
        border: 2px solid #fff;
        -webkit-border-radius:  50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    .nickname
      color: #ffffff
@media screen and (max-width: 1000px) {
  .top-list {
    .top-item {
      font-size: 14px!important;
      max-width: 78px!important;
      max-width: 94px
    }
  }
}
</style>
