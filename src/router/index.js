import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/base/Container/Container'
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'
import ForgetPassword from '@/components/ForgetPassword/ForgetPassword'
import MemberShip from '@/components/MemberShip/MemberShip'
import ManagementBackstage from '@/components/ManagementBackstage/ManagementBackstage'
import BackstageDatas from '@/components/BackstageDatas/BackstageDatas'
import UserList from '@/components/UserList/UserList'
/*
const Container = () => import('@/components/Container/Container')
const Home = () => import('@/components/Home/Home')
const Detail = () => import('@/components/Detail/Detail')
const ForgetPassword = () => import('@/components/ForgetPassword/ForgetPassword')
const MemberShip = () => import('@/components/MemberShip/MemberShip')
const ManagementBackstage = () => import('@/components/ManagementBackstage/ManagementBackstage')
const BackstageDatas = () => import('@/components/BackstageDatas/BackstageDatas')
*/
// const UserList = () => import('@/components/UserList/UserList')

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
    },
    // 管理后台
    {
      path: '/backstage',
      name: 'backstage',
      component: ManagementBackstage,
      meta: {
        login: true
      },
      children: [
        {
          path: '/datas',
          name: 'datas',
          component: BackstageDatas,
          meta: {
            login: false,
            name: '资源管理',
            icon: 'ios-cog'
          },
          children: [
            {
              path: '/datas',
              name: 'datas',
              component: BackstageDatas,
              meta: {
                login: false,
                name: '资源列表',
                icon: 'md-list-box'
              }
            }
          ]
        },
        {
          path: '/userLit',
          name: 'userLit',
          component: UserList,
          meta: {
            login: false,
            name: '会员管理',
            icon: 'ios-cog'
          },
          children: [
            {
              path: '/userLit',
              name: 'userLit',
              component: UserList,
              meta: {
                login: false,
                name: '用户列表',
                icon: 'ios-list-box-outline'
              }
            }
          ]
        }
        ]
    }
  ]
})
