<template>
  <div class="ct-page">
    <v-header></v-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <v-login></v-login>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/base/Header/Header.vue'
import Footer from '@/base/Footer/Footer.vue'
import Login from '@/base/Login/Login.vue'
export default {
  name: 'container',
  components: {
    'v-header': Header,
    'v-footer': Footer,
    'v-login': Login
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus">
  .ct-page
    height: 100%
    .container
      min-height: calc(100% - 130px)
</style>
