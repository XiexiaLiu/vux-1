// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import appRouter from './router'
import './styles/common.scss'// 引入常用的css
import './styles/font.scss'// 引入常用的字体css
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)// 通过插件的形式挂载

const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('../docs/zh-CN'), // 中文语言包
    'en-US': require('../docs/en') // 英文语言包
  }
})
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
  i18n,
  render: h => h(App)
}).$mount('#app-box')
