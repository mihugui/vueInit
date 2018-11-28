<template>
  <div>
    <Card>
      <div style="text-align:center">
        <Steps :current="step">
          <Step title="第一步" content="请输入角色名称"></Step>
          <Step title="第二步" content="请选择天赋"></Step>
        </Steps>
        <br>
        <div v-if="step===0">
          <Alert>请输入角色名称</Alert>
          <br>
          <div>
            <Form ref="formStepOne" :model="role" :rules="ruleValidate">
              <FormItem label="角色名称" prop="roleName">
                <Input v-model="role.roleName" prefix="ios-contact" placeholder="请输入角色名称" style="width: auto" />
              </FormItem>
            </Form>
          </div>
          <br>
          <Button type="primary" @click="next">下一步</Button>
        </div>
        <div v-if="step===1">
          <Alert>请选择属性</Alert>
          <br>
          <div>

          </div>
          <br>
          <Button type="primary" @click="previous">上一步</Button>
          <Button type="primary" @click="next">下一步</Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'RoleCreate',
  data () {
    return {
      role: {
        id: '',
        roleName: ''
      },
      ruleValidate: {
        roleName: [
          {required: true, message: '角色名称不能为空', trigger: 'blur'}
        ]
      },
      step: 0
    }
  },
  methods: {
    next () {
      this.step++
    },
    previous () {
      this.step--
    },
    setId () {
      this.role.id = this.$base.guid()
    }
  },
  created () {
    this.setId()
  }
}
</script>

<style scoped>

</style>
