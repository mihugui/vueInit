<template>
  <div>
    <Card :dis-hover="true">
      <div style="text-align:center">
        <Steps :current="step">
          <Step title="第一步" content="请输入角色名称"></Step>
          <Step title="第二步" content="请选择年龄"></Step>
        </Steps>
        <br>
        <div v-if="step===0">
          <Alert>请输入角色名称</Alert>
          <br>
          <div>
            <Form ref="formStepOne" :model="role" :rules="ruleValidate">
              <FormItem prop="roleName">
                <Input v-model="role.roleName" prefix="ios-contact" placeholder="请输入角色名称" style="width: auto" />
              </FormItem>
            </Form>
          </div>
          <br>
          <Button type="primary" @click="next">下一步</Button>
        </div>
        <div v-if="step===1">
          <Alert>请选择年龄</Alert>
          <br>
          <div>
            <Slider v-model="role.age.real" show-input :min="10" :max="20"></Slider>
          </div>
          <br>
          <Button type="primary" @click="previous">上一步</Button>
          <Button type="primary" @click="save">保存</Button>
        </div>
        <div v-if="step===2">
          <Alert>请选择天赋</Alert>
          <br>
          <div>
            <Form ref="formStepThree" :model="role" :rules="ruleValidate">
              <FormItem prop="passive">
                <CheckboxGroup v-model="role.skill.passive">
                  <Checkbox label="0001">福寿延长</Checkbox>
                  <Checkbox label="Sleep">123</Checkbox>
                  <Checkbox label="Run">123</Checkbox>
                  <Checkbox label="Movie">123</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Form>
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
import { mapActions } from 'vuex'
export default {
  name: 'RoleCreate',
  data: function () {
    return {
      role: {
        id: '',
        roleName: '',
        age: {
          max: 100,
          real: 0
        },
        skill: {
          // 被动
          passive: [],
          // 主动
          active: []
        }
      },
      ruleValidate: {
        roleName: [
          {required: true, message: ' ', trigger: 'blur'}
        ],
        passive: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ]
      },
      step: 0
    }
  },
  methods: {
    ...mapActions({
      saveRole: 'saveRole'
    }),
    next: function () {
      switch (this.step) {
        case 0:
          if (this.isValidate('formStepOne')) {
            this.step++
          } else {
            this.$Message.error('用户名必须填写')
          }
          break
        default:
          this.step++
          break
      }
    },
    previous () {
      this.step--
    },
    save () {
      this.saveRole(this.role)
    },
    setId () {
      this.role.id = this.$base.guid()
    },
    isValidate (name) {
      let result
      this.$refs[name].validate((valid) => {
        result = valid
      })

      return result
    }
  },
  created () {
    this.setId()
  },
  props: {
  }
}
</script>

<style scoped>

</style>
