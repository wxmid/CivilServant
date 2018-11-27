<template>
  <Menu class="sidbar" :active-name="$router.options.routes[3].children[0].children[0].name" :open-names="[$router.options.routes[3].children[0].children[0].name]" theme="dark">
    <template v-for="(item,index) in $router.options.routes[3].children">
      <Submenu :name="item.name" :to="item.name">
        <template slot="title">
          <Icon :type="item.meta.icon" />
          {{item.meta.name}}
        </template>
        <MenuItem  v-for="(item1,index) in item.children" :name="item1.name" :to="item1.name">
          <Icon :type="item1.meta.icon" />{{item1.meta.name}}
        </MenuItem>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'app',
  created () {
    console.log(this.$router)
  }
}
</script>

<style scoped lang="stylus">
.sidbar
  height: 100%
  width: 200px!important
</style>
