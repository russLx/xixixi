<template>

<van-search
  v-model="value"
  shape="round"
  background="#fdde4a"
  placeholder="请输入搜索关键词"
/>

</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      value: '',
    }
  },
}

</script>

<style lang="less">

</style>
