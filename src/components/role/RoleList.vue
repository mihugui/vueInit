<template>
    <div style="margin-top:-16px">
      <Row :gutter="16" style="background:#FFF;padding:20px">
        <Col v-for="(role, key) in roles" justify="space-around" :key="key"
             span="12" style="margin-top:16px" >
          <Card>
            <div style="text-align:center">
              <Icon type="md-close" style="width:20px;height:20px;border-radius:60%;position:absolute;top:1px;right:-4px;" @click="deleteRole(role.id)"/>
              <a href="#" slot="extra" @click.prevent="creatRole">
                <Icon type="ios-body" />
                {{ role.roleName}}
              </a>
            </div>
          </Card>
        </Col>
        <Col span="12" style="margin-top:16px">
          <Card>
            <div style="text-align:center">
              <a href="#" slot="extra" @click.prevent="creatRole">
                <Icon type="md-add" />
                创建新角色
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'RoleList',
  methods: {
    ...mapActions({
      delete: 'deleteRole'
    }),
    deleteRole: function (id) {
      this.$Modal.confirm({
        title: '确认删除',
        content: '<p>确认删除id:</p><p>' + id + '</p>',
        onOk: () => {
          this.delete(id)
        },
        onCancel: () => {
          this.$Message.info('删除取消')
        }
      })
    }
  },
  props: {roles: null, creatRole: {type: Function}}
}
</script>

<style scoped>

</style>
