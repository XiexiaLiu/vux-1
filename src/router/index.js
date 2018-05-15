import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import myProduct from '@/components/myProduct'

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
    }
  ]
})
