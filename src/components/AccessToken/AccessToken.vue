<template>
  <div class="access-token">
    <h1>{{loginSuccess}}</h1>
  </div>
</template>

<script>
export default {
  name: 'accessToken',
  data() {
    return {
      loginSuccess: ''
    }
  },
  created() {
    let _this = this;
    if(QC.Login.check()){//如果已登录
      QC.Login.getMe(function(openId, accessToken){
        _this.qqLogin(openId);
      });
    }
   /* let reg = /access_token=(\S*)&/;
    let accessToken = location.href.match(reg)[1];
    let params = {accessToken:accessToken};*/

  },
  methods: {
    qqLogin(openId) {
      this.api.qqLogin({openId:openId}).then((res) => {
        if(res.status === 0) {
          console.log(res);
          this.loginSuccess = '登录成功！';
          window.opener=null;
          window.open('','_self');
          window.close();
        } else {
          this.loginSuccess = '登录失败！';
        }
      }).catch((error) => {
        this.loginSuccess = '登录失败！';
      })
    }
  }
}
</script>

<style scoped>
</style>
