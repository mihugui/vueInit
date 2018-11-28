import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Main from '@/components/Main'
import Role from '@/components/Role'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/main',
      name: 'Main',
      redirect: 'main/role',
      component: Main,
      children: [
        {
          path: 'role',
          component: Role
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('跳转')
  next()
})

export default router
