<template>
  <div>
    <Layout>
      <Content style="background:#FFF;padding: 20px">
        <Card>
          <div>
            <span><p>欢迎来到我的世界</p></span>
            <br>
            <span><Alert>为了学习vue-iview,所以开始这个项目</Alert></span>
            <span><p>当前版本: <Tag>{{ version }}</Tag></p></span>
            <Divider />
            <Button to="/main" type="success" long>开始</Button>
            <br>
            <Divider>Created by @迷糊鬼3630</Divider>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Welcome',
  computed: {
    ...mapGetters([
      'version'
    ])
  }
}
</script>

<style scoped>

</style>
