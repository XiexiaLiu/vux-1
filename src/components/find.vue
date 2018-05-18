<template>
  <div class="wx-body">
    <div class="text-center p1">发现</div>
    <div>
      <group>
        <cell :title="$t('MyAccount')" :value="$t('Protected')"></cell>
        <cell :title="$t('Money')" :is-loading="!money" :value="money"></cell>
        <cell :title="$t('Notifications')" disabled is-link></cell>
      </group>
      <group>
        <cell 
        :title="$t('Title001')" 
        is-link
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"
        ></cell>
        <p class="slide" :class="showContent004?'animate':''">好吃的零食<br/>好吃的零食<br/>好吃的零食<br/>好吃的零食</p>
        <cell 
          :title="$t('message.title')"
          is-link
          link = "/running"
          inline-desc = "点击进入运动品牌列表页"
         ></cell>
        <cell 
          :title="$t('Title003')" is-link
          link = "/smallRoutine"
          inline-desc = "看看附近有哪些小程序"
        ></cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { Cell, Group } from 'vux'
  export default {
    name: 'find',
    components: {
      Group,
      Cell
    },
    data () {
      return {
        money: null,
        showContent004: false
      }
    },
    method: {
      go (name, hasHome) {
        console.log(name)
        // this.showContent004 = !this.showContent004
        if (!hasHome) {
          this.$router.push(`/${name}`)
        } else {
          this.$router.push(`/components/${name}/home`)
        }
      }
    }
  }
</script>

<style lang="less">
  .wx-body {
    background-color: #fff;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }
</style>