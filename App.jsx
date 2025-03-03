import React, { useEffect } from 'react'
// 前后端分离 前端独立的路由功能
import {
  // es6 模块化语法
  // BrowserRouter as Router, // hash #, history /
  Routes,
  Route
} from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, Button } from 'zarm';
import 'zarm/dist/zarm.css'; // vite-plugin-style-import 自动引入css
import NavBar from './components/NavBar';
import s from './App.module.less'
export default function App() {
  
  return (
    <ConfigProvider primaryColor='#007fff'>
      <div className={s.app}>
      <Routes>
        { routes.map(route => <Route key={route.path} path={route.path} element={<route.component />}/>)}
      </Routes>
      <Button theme="primary">Hello World!</Button>
      <NavBar showNav={true} />
      </div>
    </ConfigProvider>
  )
}