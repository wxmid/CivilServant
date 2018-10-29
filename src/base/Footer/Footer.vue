<template>
  <div class="footer">
    <p><span>浙ICP证16013778号-2</span>&emsp;&emsp;&emsp;<img src="/static/img/gongan.png" alt="">&emsp;<span>京公网安备 88888888888888号</span></p>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped lang="stylus">
@import "~common/style/styl"
.footer
  height: 60px
  line-height: 60px
  background: #333333
  p
    img,span
      vertical-align middle
      color: #fff
</style>
