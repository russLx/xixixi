
// 路由配置
// @表示src绝对路径
import Home from '@/views/home'
import Category from '@/views/category'
import Cart from '@/views/cart'
import Mine from '@/views/mine'
import Detail from '@/views/detail'
import Login from '@/views/login'
import NavBar from '@/components/nav-bar/'
import TabBar from '@/components/tab-bar/'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {},
  },
  {
    path: '/home',
    components: {
      heater: NavBar,
      default: Home,
      footer: TabBar,
    },
    meta: {
      title: '首页',
      icon: '&#xe6bb;',
      inTabBar: true,
    },
  },
  {
    path: '/category',
    components: {
      heater: NavBar,
      default: Category,
      footer: TabBar,
    },
    meta: {
      title: '分类',
      icon: '&#xe6bb;',
      inTabBar: true,
    },
  },

  {
    path: '/cart',
    components: {
      heater: NavBar,
      default: Cart,
      footer: TabBar,
    },
    meta: {
      title: '购物车',
      icon: '&#xe6af;',
      inTabBar: true,
    },
  },
  {
    path: '/mine',
    components: {
      heater: NavBar,
      default: Mine,
      footer: TabBar,
    },
    meta: {
      title: '我的',
      icon: '&#xe736;',
      inTabBar: true,
    },
  },

  {
    path: '/detail',
    components: {
      heater: NavBar,
      default: Detail,
      footer: TabBar,
    },
    meta: {
      title: '商品详情',

    },
  },

  {
    path: '/login',
    components: {
      heater: NavBar,
      default: Login,
      footer: TabBar,
    },
    meta: {
      title: '登录',

    },
  },

]

export default routes
