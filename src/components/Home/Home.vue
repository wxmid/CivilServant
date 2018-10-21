<template>
  <div class="home">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../base/Header/Header.vue'
export default {
  name: 'home',
  components: {
    'v-header': Header
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.home {}
</style>
