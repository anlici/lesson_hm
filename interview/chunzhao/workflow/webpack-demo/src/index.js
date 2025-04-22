import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; 
// import './main.css'

// 从index.html中获取容器
const container = document.getElementById('root');
const root = createRoot(container); // 

root.render(
  <App />
);