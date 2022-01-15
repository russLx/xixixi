<template>
  <ul class="tab-bar">
    <router-link
     tag="li"
     v-for="nav in navs"
     :key="nav.path"
     :to="nav.path"
      >
     <i class="iconfont" v-html="nav.meta.icon"></i>
     <span>{{nav.meta.title}}</span>
   </router-link>
</ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'TabBar',
  computed: {
    navs() {
      // return routes.filter(route => route.meta && route.meta.inTabBar)
      return routes.filter(route => route.meta?.inTabBar)
    },
  },
}
</script>

<style lang="less" scoped>
.tab-bar{
  height: 100px;
  display: flex;
  border-top: 1px solid #eaeaea;

  li{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    i{
      font-size: 20px;
    }
    span{
      font-size: 12pz;
    }
  }
}
.router-link-exact-active ,router-link-active{
  color:red;
  font-weight: 700;
}
</style>

<style lang="less">
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_3143401_6lfxaviu2u.woff2?t=1642227902342') format('woff2'),
       url('//at.alicdn.com/t/font_3143401_6lfxaviu2u.woff?t=1642227902342') format('woff'),
       url('//at.alicdn.com/t/font_3143401_6lfxaviu2u.ttf?t=1642227902342') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
