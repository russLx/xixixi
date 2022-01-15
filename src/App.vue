<template>
 <div id="app">
   <header>
     <router-view name="heater" />
   </header>
   <main>
     <router-view />
   </main>
   <footer>
     <router-view name="footer" />
   </footer>
 </div>
</template>

<script>
// import Vue from 'vue'
// import { Calendar, Cell, Button } from 'vant'
// import { getAllCategories } from './api/category'
// Vue.use(Calendar)
// Vue.use(Button)
// Vue.use(Cell)
// export default {
//   name: 'App',
//   data() {
//     return {
//       date: '',
//       show: false,
//     }
//   },
//   methods: {
//     formatDate(date) {
//       return `${date.getMonth() + 1}/${date.getDate()}`
//     },
//     onConfirm(date) {
//       this.show = false
//       this.date = this.formatDate(date)
//     },
//   },
//   created() {
//     getAllCategories().then(console.log)
//   },
// }
</script>

<style lang="less">
html,body,#app{
  height: 100%;
}
#app{
  display: flex;
  flex-direction:column ;

  main{
    flex: 1;
    overflow-x: hidden;
  }
}
// .container{
//   display: flex;
// }
// .left{
//   width: 375px;
//   height: 100px;
//   background-color: aqua;
// }
// .right{
//   width: 375px;
//   height: 100px;
//   background-color: rgb(20, 20, 20);
// }
</style>
