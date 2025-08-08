import Home from '@/views/Home'
import User from '@/views/User'
import Data from '@/views/Data'
import Login from '@/views/Login'
import UserInfo from '@/views/UserInfo'
import Detail from '@/views/Detail'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/AiUser',
    component: AiUser
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

export default routes
