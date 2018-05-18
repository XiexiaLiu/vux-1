<template>
  <div class="wx-body">
    <div class="text-center p1">附近小程序</div>
    <div class="text-center p1">
      <div style='width:80%;height:20%;'>
        <x-circle :percent="percent1" :stroke-width="1" stroke-color="#04BE02">
          <span>{{percent1}}</span>
        </x-circle>
      </div>
      <br>
      <div style="width:80%;">
        <range v-model="percent1" :min="0" :max="100"></range>
      </div>
      <br>
      <div style='width:80%;height:20%;'>
        <x-circle :percent="percent2" :stroke-width="6" :trail-width="6" :stroke-color="['#36D1DC', '#5B86E5']" trail-color="#ececec">
          <span :style="{color: strokeColor2}">{{percent2}}%</span>
        </x-circle>
      </div>
    </div>
  </div>
</template>

<script>
import { XCircle, Range, Icon } from 'vux'
export default {
  name: 'smallRoutine',
  components: {
    XCircle, Range, Icon
  },
  data () {
    return {
      percent1: 10,
      percent2: 20,
      strokeColor2: '#3FC7FA'
    }
  },
  methods: {
    changePercent() {
      this.percent2 = 100- this.percent1
    }
  },
  mounted () {
    this.changePercent()
    // this.percent2 = 100-this.percent1
  },
  watch: {
    percent1(val, oldVal){// 普通的watch监听
      this.percent2 = 100- this.percent1
    }
  }
}
</script>

<style lang="less">
  .wx-body {
    background-color: #fbf9fe;
  }
</style>