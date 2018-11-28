import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Main from '@/components/Main'
import Role from '@/components/role/Role'
import Test from '@/components/role/RoleCreate'
import iView from 'iview'

Vue.use(iView)
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router
