<template>
  <div>
    <Menu mode="horizontal" :theme="theme" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-body" />
            角色信息
          </MenuItem>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      theme: 'light'
    }
  }
}
</script>

<style scoped>

</style>
