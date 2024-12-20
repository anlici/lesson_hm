# vue + react cli 命令行

- vue-cli  commond line
  - 比较复杂大项目
  - npm init vite 
  vite 前端项目构建工具，前端基建，脚手架
   npm init 初始化项目 将初始化交给vite

- 项目结构
  - package.json 项目依赖（前端基建）
    - vue 3^ 开发和上线了都要
    - vite 5^  开发测试 上线不需要, 前端基建里面大boos
    - dependencies 依赖 devDependencies 开发依赖


- 工程不同生命周期 不同的依赖
  - 开发阶段
    - npm run dev  开发环境
    - npm run build
  - 测试阶段
    - npm run test  测试
  - 上线阶段
    - npm run build  打包
    - npm run preview  预览
  - 更新阶段（online 运营维护）
    - npm run update  升级
  
  - npm run dev vite 
    - http 协议 index.html  
      - 挂载点
      - 首页 website 有http协议
      - src/mian.js  入口文件

- src/main.js 
  - src 开发目录
    开发主战场
  - main.js 入口文件
    createApp().mount('#app')  挂载点 
  - App.vue  根组件
    - template 模板 结构
      必须有一个根元素，即所有的 HTML 内容必须包裹在一个父级标签内（如 <div>、<section> 等）。
      支持 Vue 的模板语法，包括指令（如 v-if, v-for）、绑定属性（v-bind）、事件处理（v-on）等。
    - script 脚本 逻辑  数据，方法，生命周期钩子，计算属性，
    - style 样式

    - 组件，大于html 页面构建模块
      组件是现代前端开发新单元
      vue = 由一个逻辑html 单元 + css+ js
    - 某项功能

    - 组件胶囊 现代前端拥抱组件思维,vue 前端组件库
    - 组件按照功能划分
    - 组件 = html + css + js

- 轮播图 功能 经典组件
  前端开发单元是组件 ，不是页面（重复 轮播图）
  

- setup 语法糖
  - 简化组件逻辑
  - 组合式API
    - 响应式数据
    - 生命周期钩子
    - 计算属性
    - 方法

- 不用setup 就要使用export default 导出（return 数据，方法等）

