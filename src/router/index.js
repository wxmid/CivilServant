import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/base/Container/Container'
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      redirect: '/',
      path: '/home'
    },
    {
      path: '/',
      name: 'home',
      component: Container,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        },
      ]
    }
  ]
})
