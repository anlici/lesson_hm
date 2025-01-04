import{
    createRouter, // 创建路由实例
    createWebHashHistory // 路由模式
} from 'vue-router'  // 插件

import Home  from '../views/Home.vue'
import About  from '../views/About.vue'
import PostIndex from '../views/PostIndex.vue'
import PostShow from '../views/PostShow.vue'
import PostMeta from '../views/PostMeta.vue'

const postRoutes = [
    {
        path: '/posts',
        name: 'postIndex',
        component: PostIndex,
        props: {
            sort: 'popular'
        }
    },
    {
        path: '/posts/:postId',
        component: PostShow,
        name: 'postShow',
        props: true,
        // 嵌套路由
        children: [
            {
                path: 'meta', // '/' 根路径，不使用
                component: PostMeta,


            }
        ]
    }
]
const routes = [
    {
        path: '/',
        component: Home 
    },
    {
        path: '/about',
        component: About 
    },
    ...postRoutes
  
]
// props 作为参数

const router = createRouter({
    history: createWebHashHistory(), // # pushState 事件
    routes // 路由配置数组
})

export default router;