## vue+ts 项目

## tailwindcss
- 不用写css 
- bootstrap等css 框架一样，提供了类名，直接用就好
- stylus 之后，css 领域里的重大突破 
- **原子**类 
- 类名带有解释性， text-lg  对prompt engineering 有帮助 AIGC 

## 安装tailwind

- css 编译器
  开发时候用tailwindcss 生成css 
  stylus -> css   
  npm i tailwindcss postcss autoprefixer -D 

- npx tailwindcss init -p
  tailwindcss 初始化
- tailwind.config.js 配置文件
  content

## 
- shims-vue.d.ts 解决 vue 文件中使用 ts 报错问题
- redirect 重定向 /home 直接在浏览器输入地址，会重定向到 /home 页面
- vant UI 库
  - element-ui 按需加载，包小，但是没有 tailwindcss 支持
    jwt 服务端打印？
  - 挂载mount ，vant 从编译阶段自动导入，更快。在服务端运行
    相比v8引擎进行渲染，浏览器更快

- vite 工程化
  预先加载UI组件库 更快
  vant 
    