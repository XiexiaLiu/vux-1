<template>
  <div>
    <div>
        <tab>
          <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
          <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
          <tab-item :selected="demo1 === '待发货'" @click="demo1 = '待发货'">待发货</tab-item>
          <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
      </tab>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'
  export default {
    name: 'myProduct',
    components: {
      Tab, TabItem
    },
    data () {
      return {
        demo1: '全部订单'
      }
    }
  }
</script>

<style lang="less">
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #0077FF;
    margin-bottom: 8px;
    border-radius: 4px;
    -webkit-background-clip: padding-box;
  }
</style>