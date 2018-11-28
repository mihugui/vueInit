<template>
  <div style="background:#FFF;padding: 20px">
    <Card>
      <div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Role',
  data () {
    return {}
  },
  methods: {
    getSave: function () {
      let roleSave = localStorage.getItem('roleSaveOfMyWorld')
      return roleSave
    }
  },
  created () {

  }
}
</script>

<style scoped>

</style>
