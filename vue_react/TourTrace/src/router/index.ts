import { createRouter, createWebHistory } from 'vue-router'
// router 库定义类型，描述路由记录，至少要包括path
import type { RouteRecordRaw } from 'vue-router'
const rootRoutes:RouteRecordRaw[] = [
  {
      path: 'home',
      name: 'Home',
      meta:{
          title: '首页',
          cache:true
      },
      // 路由懒加载,当路由被访问时才加载对应组件
      component: () => import('../views/Home/Home.vue')
  },
  {
    path: 'assistant',
    name: 'Assistant',
    meta:{
        title: 'ai助手',
        cache:true
    },
    component: () => import('../views/Assistant/Assistant.vue')
  }
  ,{
    path:'shopping',
    name: 'Shopping',
    meta:{
        title: '商城',
        cache:true
    },
    component: () => import('../views/Shop/Shopping.vue')
},
{
    path:'mine',
    name: 'Mine',
    meta:{
        title: '个人中心',
        cache:false
    },
    component: () => import('../views/My/Mine.vue')
  }
]
// 数组路由多个
const routes : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'App',
    component: () => import('../views/KeepAlive.vue'),
    redirect: '/home', // 重定向
    children: rootRoutes
  } 
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next)=>{
  document.title = to.meta.title as string;
  next()

})

export default router