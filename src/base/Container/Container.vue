<template>
  <div class="ct-page">
    <v-header></v-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import 'common/font/iconfont/iconfont.css'
import Header from '@/base/Header/Header.vue'
import Footer from '@/base/Footer/Footer.vue'
export default {
  name: 'container',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
  .ct-page
    min-width: 1000px
    height: 100%
    .container
      min-height: calc(100% - 130px)
</style>
