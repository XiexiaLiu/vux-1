<template>
  <div class="wx-body">
    <div class="text-center p1">微信</div>
    <div>
      <search
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      ref="search"></search>
    </div>
    <div class="p3px">
      <div 
        class="p-8-10 border-b"
        v-for="(item, index) in noticeList" 
        :key="index">
        <span></span>
        <span>
          <div class="h20 weight700">{{item.name}}</div>
          <div>{{item.desc}}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {Search} from 'vux'
export default {
  name: 'notice',
  components: {
    Search
  },
  data () {
    return {
      value: '',
      noticeList: []
    }
  },
  mounted () {
    this.noticeList = [
      {
        icon: '',
        name: '腾讯新闻',
        desc: '习近平：开创中国特色大国外交新局面'
      },
      {
        icon: '',
        name: '订阅号',
        desc: '人民日报：大陆已经开始收集“台独”分子名单？'
      },
      {
        icon: '',
        name: 'snail',
        desc: '快去睡觉'
      }
    ]
  }
}
</script>

<style lang="less">
  .wx-body {
    background-color: #fff;
  }
  .p3px {
    padding: 3px;
  }
</style>
