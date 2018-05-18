<template>
  <div class="wx-body">
    <div class="text-center p1">运动品牌列表</div>
    <div class="p1">选择一个你喜欢的品牌</div>
    <div>
      <group title="国外品牌">
        <radio :options="otherBrands" @on-change="change"></radio>
      </group>
      <group title="国内品牌">
        <radio :options="ourBrands" @on-change="change"></radio>
      </group>
    </div>
    <div>
      <group>
        <x-switch :title="$t('isBill')" v-model="show"></x-switch>
      </group>
      <div>
        <alert v-model="show" title="是否需要发票" @on-show="onShow" @on-hide="onHide">开发票成功</alert>
      </div>
    </div>
  </div>
</template>

<script>
import { Radio, Group, XSwitch, Alert, TransferDom } from 'vux'
export default {
  name: 'running',
  components: {
    Radio,
    Group,
    XSwitch,
    Alert,
    TransferDom
  },
  data () {
    return {
      show: false,
      otherBrands: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '1',
        value: '阿迪达斯'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '2',
        value: '耐克'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '3',
        value: '匡威'
      } ],
      ourBrands: ['李宁', '安踏', '361']
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    change (value, label) {
      console.log('change:', value, label)
    }
  }
}
</script>

<style lang="less">
  .wx-body {
    background-color: #fbf9fe;
  }
</style>