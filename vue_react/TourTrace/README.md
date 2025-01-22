## vue+ts 项目

## tailwindcss
- 不用写css 
- bootstrap等css 框架一样，提供了类名，直接用就好
- stylus 之后，css 领域里的重大突破 
- **原子**类 
- 类名带有解释性， text-lg  对prompt engineering 有帮助 AIGC 
- css 编译器
  开发时候用tailwindcss 生成css 
  stylus -> css   
  第一：npm i tailwindcss postcss autoprefixer -D 

- 第二： npx tailwindcss init -p
  tailwindcss 初始化
- 添加tailwind.config.js 配置文件
  修改content

## 扩展vite 工程化
- shims-vue.d.ts 解决 vue 文件中使用 ts 报错问题
- redirect 重定向 /home 直接在浏览器输入地址，会重定向到 /home 页面
- vant UI 库
  - element-ui 按需加载，包小，但是没有 tailwindcss 支持
    jwt 服务端打印？
  - 挂载mount ，vant 从编译阶段自动导入，更快。在服务端运行
    相比v8引擎进行渲染，浏览器更快

- vite 工程化
  预先加载UI组件库 更快
  vant 在编译阶段加载

## 1.22 能不能挑战自己
- 路径别名@ alias
  @ 表示 / src 
- __dirname 当前执行脚本所在的目录的绝对路径
    resolve 路基活路基片段解析为绝对，当没有参数时，返回当前工作目录
    join 不解释.. . 只根据路径分隔符拼接

- 泛型？<>
  ts 里面创建可复用，类型安全的代码工具，
  允许定义函数，类或接口，使用类型变量，在调用时动态指定具体类型

- tiwalndcss 原子类
  h-[8rem] 相对根元素高度8rem
  bg-cover 缩放覆盖整个容器

- :key="item.id" 识别每个节点，更新dom高效重用和重排
- v-model:active="active" 双向绑定，处于激活状态，自动更新active值
-  resolvers: [
        VantResolver()
      ]VantResolver解释器，是vant ui 组件库的解释器
      通过vite插件中自动导入组件
