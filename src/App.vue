<template>
  <div id="app">
    <!-- <x-header
      v-if="isShowNav"
      slot="header"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :left-options="leftOptions"
      :right-options="rightOptions"
      :title="title"
      :transition="headerTransition"
      @on-click-more="onClickMore">
      <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </span>
    </x-header>
    <transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="viewTransition" :css="!!direction">
      <router-view class="router-view"></router-view>
    </transition> -->
    <router-view></router-view>
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" slot="bottom">
      <tabbar-item :selected="isDemo === 0" :link="{path:'/notice'}">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1" :link="{path:'/address'}">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span>通讯录</span></span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1" badge="9" :link="{path:'/find'}">
        <span class="demo-icon-22" slot="icon">&#xe633;</span>
        <span slot="label"><span>发现</span></span>
      </tabbar-item>
      <tabbar-item :selected="isDemo === 1" :link="{path:'/my'}">
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
    },
    watch: {
      path (path) {
        // if (path === '/notice') {
        //   this.$router.replace('/notice')
        //   return
        // }
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
