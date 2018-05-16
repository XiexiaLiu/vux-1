<template>
  <div>
    <div>
      <tab v-model="index">
        <tab-item :selected="demo1 === '已发货'" @click="demo1 = '已发货'">已发货</tab-item>
        <tab-item :selected="demo1 === '未发货'" @click="demo1 = '未发货'">未发货</tab-item>
        <tab-item :selected="demo1 === '待发货'" @click="demo1 = '待发货'">待发货</tab-item>
        <tab-item :selected="demo1 === '全部订单'" @click="demo1 = '全部订单'">全部订单</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item>
          <div class="tab-swiper vux-center">已发货 Container</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">未发货 Container</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">待发货 Container</div>
        </swiper-item>
        <swiper-item>
          <div class="tab-swiper vux-center">全部订单 Container</div>
        </swiper-item>
      </swiper>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    name: 'myProduct',
    components: {
      Tab, TabItem, Swiper, SwiperItem
    },
    data () {
      return {
        demo1: '全部订单',
        list2: ['精选', '美食', '电影', '酒店'],
        index: 0
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