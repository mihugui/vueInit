<template>
  <div style="background:#FFF;padding: 20px">
    <Card>
      <div>
      </div>
    </Card>
    <Modal v-model="roleList" footer-hide :mask-closable="false" :closable="false" title="角色列表">
      <div>
        <Row style="background:#FFF;padding:20px">
          <Col span="11">
            <Card @click="test">
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
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Role',
  data () {
    return {
      roleList: false
    }
  },
  methods: {
    showSave: function () {
      let roleSave = localStorage.getItem('roleSaveOfMyWorld')
      if (roleSave === null) {
        this.roleList = true
      }
    },
    creatRole: function () {
      this.roleList = false
    },
    test: function () {
      console.log('success')
    }
  },
  created () {
    this.showSave()
  }
}
</script>

<style scoped>

</style>
