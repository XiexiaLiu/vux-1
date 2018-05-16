<template>
  <div class="wx-body">
    <div class="text-center p1">通讯录</div>
    <div>
      <search
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      ref="search"></search>
    </div>
    <div>
      <div v-for="(item, index) in typeList" :key="index" class="p-8-10 border-b">
        <span></span>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div>
      <div class="p5px grey-ground">J</div>
      <div>
        <div v-for="(item, index) in peopleList" :key="index" class="p-8-10 border-b">
          <span></span>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Search} from 'vux'
export default {
  name: 'address',
  components: {
    Search
  },
  data () {
    return {
      typeList: [],
      peopleList: []
    }
  },
  mounted () {
    this.typeList = [
      {
        icon: '',
        name: '新的朋友'
      },
      {
        icon: '',
        name: '群聊'
      },
      {
        icon: '',
        name: '标签'
      },
      {
        icon: '',
        name: '公众号'
      }
    ],
    this.peopleList = [
      {
        icon: '',
        id: '1',
        name: '家人1'
      },
      {
        icon: '',
        id: '2',
        name: '家人2'
      },
      {
        icon: '',
        id: '3',
        name: '家人3'
      },
      {
        icon: '',
        id: '4',
        name: '家人4'
      }
    ]
  }
}
</script>

<style lang="less">
  .wx-body {
    background-color: #fff;
  }
  .p5px {
    padding: 5px;
  }
</style>