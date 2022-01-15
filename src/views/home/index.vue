<template>
  <div class="home">
    <van-tabs color="#000" background="#fdde4a">
  <van-tab
  v-for="category in categories"
  :key="category.id"
  :title="category.name">
    内容 {{ index }}
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { getAllCategories } from '@/api/category'
export default {
  name: 'Home',
  data() {
    return {
      categories: [],
    }
  },
  created() {
    getAllCategories()
      .then(resData => {
        this.categories = resData.list
      })
      .catch(err => console.log('访问分类异常', err))
  },
}
</script>

<style lang="less">

</style>
