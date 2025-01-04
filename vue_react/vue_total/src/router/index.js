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
        meta: {
            title: '文章列表'
        },
        props: {
            sort: 'popular'
        }
    },
    {
        path: '/posts/:postId',
        component: PostShow,
        name: 'postShow',
        props: true,
        meta: {
            title: '文章详情'
        },
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
        meta: {
            title: '首页'
        },
        component: Home 
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            requireAuth: true,
            title: '关于'
        },
        component: About 
    },
    ...postRoutes
  
]
// props 作为参数

const router = createRouter({
    history: createWebHashHistory(), // # pushState 事件
    routes // 路由配置数组
})
// 路由守卫，路由切换执行回调
router.beforeEach((to,from,next) => {
    // to 目标路由对象；router + routes + params + query + hash + fullPath + matched + name + path
    // console.log(to,from,'切换----------');
    const isLogin = true;
    document.title = to.meta.title || '倩倩画质';
    if(to.meta.requireAuth ) {
        // console.log('需要登录')
        // 传url ，使用redirect 重定向 跳转
        next({ path: '/login',});
    }
    next(); // 必须调用,放行
    
    
})

export default router;