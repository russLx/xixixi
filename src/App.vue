<template>
  <div id="app">
    app
    <div>
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Calendar, Cell } from 'vant'
Vue.use(Calendar)
Vue.use(Cell)
export default {
  name: 'App',
  data() {
    return {
      date: '',
      show: false
    }
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    }
  }
}
</script>

<style lang="less">
</style>
