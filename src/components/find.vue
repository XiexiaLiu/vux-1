<template>
  <div class="wx-body">
    <div class="text-center p1">发现</div>
    <div>
      <group>
        <cell :title="$t('My Account')" :value="$t('Protected')"></cell>
        <cell :title="$t('Money')" :is-loading="!money" :value="money"></cell>
        <cell :title="$t('Notifications')" disabled is-link></cell>
      </group>
      <group>
        <cell 
        :title="$t('Title 001')" 
        is-link
        :arrow-direction="showContent004 ? 'up' : 'down'"
        @click.native="showContent004 = !showContent004"
        ></cell>
        <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
        <cell :title="$t('message.title')" is-link></cell>
        <cell :title="$t('Title 003')" is-link></cell>
      </group>
    </div>
  </div>
</template>

<i18n>
My Account:
  zh-CN: 我的账号
Protected:
  zh-CN: 保护中
Notifications:
  zh-CN: 通知
Title 001:
  zh-CN: 标题一
扫一扫:
  zh-CN: 标题二
Title 003:
  zh-CN: 标题三
</i18n>

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