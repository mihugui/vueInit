<template>
  <div style="background:#FFF;padding: 20px">
    <Card>
      <div>
      </div>
    </Card>
    <Modal v-model="roleList" footer-hide :mask-closable="false" :closable="false" title="角色列表">
        <role-list :roles="roles" :creatRole="creatRole" ></role-list>
    </Modal>
    <Modal v-model="roleCreate" footer-hide :mask-closable="false" :closable="false" title="角色创建">
      <role-create></role-create>
    </Modal>
  </div>
</template>

<script>
import RoleList from '@/components/role/RoleList'
import RoleCreate from '@/components/role/RoleCreate'
import { mapMutations, mapGetters } from 'vuex'
import types from '../../store/types'
export default {
  name: 'Role',
  data () {
    return {
      roleList: false,
      roleCreate: false
    }
  },
  computed: {
    ...mapGetters({
      roles: 'roles'
    })
  },
  methods: {
    ...mapMutations({
      setRoles: types.SETROLES
    }),
    showSave: function () {
      let roleSave = JSON.parse(localStorage.getItem('roleSaveOfMyWorld'))
      if (roleSave.length === 0) {
        this.roleList = true
      } else {
        this.setRoles(roleSave)
        this.roleList = true
      }
    },
    creatRole: function () {
      this.roleList = false
      this.roleCreate = true
    }
  },
  created () {
    this.showSave()
  },
  components: {
    RoleList,
    RoleCreate
  }
}
</script>

<style scoped>

</style>
