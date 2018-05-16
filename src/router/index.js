import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import myProduct from '@/components/myProduct'
import notice from '@/components/notice'
import address from '@/components/address'
import find from '@/components/find'
import my from '@/components/my'

Vue.use(Router)
// import Layout from 'layout'
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      title: '你好',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      title: '首页',
      component: home
    },
    {
      path: '/',
      name: 'myProduct',
      title: '我的订单',
      component: myProduct
    },
    {
      path: '/notice',
      name: 'notice',
      title: '微信',
      component: notice
    },
    {
      path: '/address',
      name: 'address',
      title: '通讯录',
      component: address
    },
    {
      path: '/find',
      name: 'find',
      title: '发现',
      component: find
    },
    {
      path: '/my',
      name: 'my',
      title: '我',
      component: my
    }
  ]
})
