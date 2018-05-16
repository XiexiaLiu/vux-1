// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import appRouter from './router'
import './styles/common.scss'// 引入常用的css
import './styles/font.scss'// 引入常用的字体css
Vue.use(VueRouter)
console.log('1', appRouter)
const routes = appRouter.options.routes
console.log('2', routes)
const router = new VueRouter({
  routes
})
console.log('3', router)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
