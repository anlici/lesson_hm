import {createBrowserHistory} from 'react-router-dom'

const router = [
    {
        path:'/',
        element:() => import('./index'),
        exact:true // 默认路由
    },
    {
        path:'/login',
        element:() => import('./login'),
    },
    {
        path:'/home',
        Component:() => import('./home'),
        children:[
            {
                path:'/home/index',
                Component:() => import('./home/index')
            },
            {
                path:'/home/list',
                Component:() => import('./home/list')
            }
        ]
    }
]

export default createBrowserHistory(router)