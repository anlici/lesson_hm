import Home from '@/views/Home'
import User from '@/views/User'
import Data from '@/views/Data'
import Login from '@/views/Login'
import UserInfo from '@/views/UserInfo'
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
    path: '/data',
    component: Data
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userInfo',
    component: UserInfo
  }
]

export default routes
