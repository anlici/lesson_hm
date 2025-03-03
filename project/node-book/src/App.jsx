import React, { useEffect,useState} from 'react'
// 前后端分离 前端独立的路由功能
import {
  // es6 模块化语法
  // BrowserRouter as Router, // hash #, history /
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, Button } from 'zarm';
import 'zarm/dist/zarm.css'; // vite-plugin-style-import 自动引入css
import NavBar from './components/NavBar';
import { uploadAvatar } from './api';
import s from './App.module.less'
export default function App() {
  const [showNav, setShowNav] = useState(false);
  const needNav = ['/','/data'];
  const {pathname}= useLocation();
  console.log(location);
  // 监听路由变化并且更新，依赖为 pathname 
  useEffect(() => {
    //当前路由是否在needNav中 字符串上的api
    setShowNav(needNav.includes(pathname));
  },[pathname])

  useEffect(() => {
    (async () => {
      await uploadAvatar();
    })
  },[])
  return (
    <ConfigProvider primaryColor='#007fff'>
      <div className={s.app}>
      <Routes>
        { routes.map(route => <Route key={route.path} path={route.path} element={<route.component />}/>)}
      </Routes>
      
      <NavBar showNav={showNav} />
      </div>
    </ConfigProvider>
  )
}