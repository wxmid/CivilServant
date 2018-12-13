<template>
  <div class="managemant">
    <div class="b-s-header"></div>
    <v-sidebar class="v-sidbar"></v-sidebar>
    <div class="container">
      <router-view></router-view>
    </div>
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
  height: calc(100% - 60px)
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .b-s-header
    width: 100%
    height: 60px
    background: #d62806
    border-bottom: 2px solid #2c6b49
  .container
    width: calc(100% - 200px)
    padding: 10px
    height: 100%
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    overflow: scroll
</style>
