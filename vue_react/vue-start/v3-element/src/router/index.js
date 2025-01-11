import {createRouter,createWebHistory} from 'vue-router'
// import Home from '../views/Home.vue'
// import Acticle from '../views/Acticle.vue'
// import Login from '../views/Login.vue'

const routes =[
    {
        path:'/',
        name:'home',
        component:() => import('../views/Home.vue'),
        meta:{
            title:'首页',
            requireLogin: true // 是否需要登录 requrireLogin: true
        },
        children:[
            {
                path:'acticle',
                name:'acticle',
                component:() => import('../views/Acticle.vue'),
                meta:{
                    title:'文章',
                    requireLogin: true 
                }
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login.vue'),
        meta:{
            title:'登录',
            requireLogin: false // 是否需要登录 requrireLogin: true
        }
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
// 路由守卫
router.beforeEach((to,from,next) =>{
    // 默认标题
    document.title = to.meta.title || 'vue3-element3'
    if(to.meta.requireLogin){
        if(localStorage.getItem('token')){
            next()
        }else{
            next({
                path:'/login',
                query:{
                    // 
                    redirect:to.fullPath // 登录成功后跳转的页面
                }
            })
        }
    }else{
        next()
    }
})
export default router