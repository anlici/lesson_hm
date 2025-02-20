### react notebook 全栈
- pnpm i react-router-dom -S
  --save 一直依赖 react-router-dom@7
  --save-dev -D 开发阶段依赖

- 项目阶段
  - 开发阶段 development vite
  - 测试阶段 test 没有环境 npx
  - 上线阶段 production webpack
  - 打包 npm run build 生成dist
     -> 项目部署->dns -> 上线

- 页面级别
  

- es6 module 
  import React {useState as useState,} from 'react'
  import * as React from 'react'
  as 别名

-  pnpm i zarm@3.1.2 选择版本
- 引入button 组件，样式，
  配置ConfigProvider primaryColor 定制theme 
- build 打包 静态文件assets，index.html 引入
    - css js
    性能 http 并发数 
- size gzip 大小 http 主动启动gzip 压缩传输
- 应用层 表示层 会话层 传输层 网络层 数据链路层 物理层 

- pnpm install vite-plugin-style-import    