<template>
  <div class="footer">
    <p><!--<span>浙ICP备19004709号-1</span>&emsp;&emsp;&emsp;<img src="/static/img/gongan.png" alt="">&emsp;--><span>浙ICP备19004709号-1</span></p>
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
