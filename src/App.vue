<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
      <tabbar-item :selected="isDemo === 0">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span>通讯录</span></span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1" badge="9">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span>发现</span></span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span>我</span></span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar, TabbarItem
  },
  data () {
    return {
      isDemo: 0
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
