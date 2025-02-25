import Home from '@/views/Home'
import User from '@/views/User'
import Data from '@/views/Data'
import Login from '@/views/Login'
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
  }
]

export default routes
