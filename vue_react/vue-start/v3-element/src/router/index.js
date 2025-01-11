import { createRouter, createWebHistory } from 'vue-router'

// 路由配置数组
const routes = [
    {
        path: '/',
        name: 'home',
        // 路由懒加载
        component: () => import('../views/Home.vue'),
        meta: {
            title: '首页',
            requireLogin: true // 是否需要登录
        },
        children: [
            {
                path: 'article', // 修正拼写错误
                name: 'article', // 修正拼写错误
                component: () => import('../views/Article.vue'), // 修正拼写错误
                meta: {
                    title: '文章',
                    requireLogin: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '登录',
            requireLogin: false // 登录页面不需要登录
        }
    },
    {
        path: '/:pathMatch(.*)*', // 匹配所有路径
        name: '404',
        component: () => import('../views/404.vue'),
        meta: {
            title: '404',
            requireLogin: false // 404 页面不需要登录
        }
    }
]

// 实例化路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // 默认标题
    document.title = to.meta.title || 'vue3-element3'
    if (to.meta.requireLogin) {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath // 登录成功后跳转的页面
                }
            })
        }
    } else {
        next()
    }
})

export default router