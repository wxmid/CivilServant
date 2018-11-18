import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/base/Container/Container'
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'
import ForgetPassword from '@/components/ForgetPassword/ForgetPassword'
import MemberShip from '@/components/MemberShip/MemberShip'
import BaiduMap from '@/base/BaiduMap/BaiduMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Container,
      meta: {
        login: false
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            login: false
          }
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail,
          meta: {
            login: false
          }
        },
        {
          path: '/baiduMap',
          name: 'baiduMap',
          component: BaiduMap,
          meta: {
            login: false
          }
        },
        {
          path: '/memberShip',
          name: 'memberShip',
          component: MemberShip,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword,
      meta: {
        login: false
      }
    }
  ]
})
