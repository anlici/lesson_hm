import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        meta: {
            cache: true
        },
        component: () => import('../views/Home/Home.vue')
    },
    {
        path: '/message',
        name: 'Message',
        meta: {
            cache: false
        },
        component: () => import('../views/Message/Message.vue')
    },
    {
        path: '/ai',
        name: 'Ai',
        meta: {
            cache: false
        },
        component: () => import('../views/Ai/Ai.vue')
    },
    {
        path:'account',
        name:'Account',
        meta:{
            cache:false
        },
        component:()=>import('../views/Account/Account.vue')
    }

    
   
]

const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('../views/TheRoot.vue'),
        redirect: '/home',
        children: rootRoutes
    },
    {
        path: '/renderPage',
        name: 'renderPage',
        component: () => import('../views/RenderPage.vue')
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login/Login.vue')
    }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name === 'Ai') { 
      setTimeout(() => {
        document.querySelector('body').scrollIntoView(false);
        
      }, 0);
    }
    next();
  });

export default router