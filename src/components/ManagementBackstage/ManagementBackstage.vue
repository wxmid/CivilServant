<template>
  <div class="managemant">
    <v-sidebar></v-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from 'base/ManagBase/Sidebar/Sidebar'
export default {
  name: 'app',
  components: {
    'v-sidebar': sidebar
  }
}
</script>

<style scoped lang="stylus">
.managemant
  height: 100%
</style>
