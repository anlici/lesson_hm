import{
    createRouter, // 创建路由实例
    createWebHashHistory // 路由模式
} from 'vue-router'  // 插件

import Home  from '../views/Home.vue'
import About  from '../views/About.vue'
import PostIndex from '../views/PostIndex.vue'

const routes = [
    {
        path: '/',
        component: Home 
    },
    {
        path: '/about',
        component: About 
    },
    {
        path: '/posts',
        component: PostIndex
    },
  
]
// props 作为参数

const router = createRouter({
    history: createWebHashHistory(), // # pushState 事件
    routes // 路由配置数组
})

export default router;