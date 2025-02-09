import{
    createRouter, // 创建路由实例
    createWebHashHistory // 路由模式
} from 'vue-router'  // 插件

import Home  from '../views/Home.vue'
import About  from '../views/About.vue'
import PostIndex from '../views/PostIndex.vue'
import PostShow from '../views/PostShow.vue'
import PostMeta from '../views/PostMeta.vue'
import Login from '../views/Login.vue'

const postRoutes = [
    {
        path:'/posts',
        name: 'postIndex', // 添加这一行
        meta:{
            title:'文章列表'
        },
        component:PostIndex,
        props:{
            sort:'popular' // 传递参数
        }
    },
    {
        path:'/posts/:postId',
        component:PostShow,
        name:'postShow',
        props:true, // 传递参数
        meta:{
            title:'文章详情'
        },
        children:[
            {
                path:'meta', // /posts/:postId/meta ,不使用斜杠，相对路径
                component:PostMeta
            }
        ]
    }
    
]
const routes = [
    {
        path:'/',
        meta: {
            title:'首页'
        },
        component:Home
    },
    {
        path:'/about',
        name:'about',
        meta:{
            requireAuth:true,
            title:'关于'
        },
        component:About
    },
    {
        path:'/login',
        name:'login',
        meta:{
            title:'登录'
        },
        component:Login
    },
    ...postRoutes
]
// 实例化路由
const router = createRouter({
    history:createWebHashHistory(), // # pushState 事件
    routes // 路由配置数组
})
// 路由守卫，路由切换执行回调
const isLogin = true;
router.beforeEach((to,from,next) =>{
    document.title = to.meta.title || '倩倩画质'; // 动态修改标题
    // 如果需要登录，且未登录，跳转登录页
    if(to.meta.requireAuth && !isLogin){
        next({path:'/login'});
    }
    next(); // 下一个中间件？ 
})
export default router;
