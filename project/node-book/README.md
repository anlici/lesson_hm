# 我的 React 全栈项目开发笔记
- style-components css-in-js使用
- cx 引入，使用classnames 库，动态绑定css 类名
## 一、项目搭建

### 1.1 依赖安装

- **安装 react-router-dom**：用 pnpm 安装这个库来管理路由，命令是`pnpm i react-router-dom -S`，它能让我在项目里方便地实现页面跳转和展示不同的内容。
- **开发依赖**：对于一些只在开发阶段用的工具，比如样式导入插件`vite-plugin-style-import`，我会用`pnpm i vite-plugin-style-import`来安装，这样在开发时就能利用它们提升效率。

### 1.2 项目阶段划分

- **开发阶段**：用 vite 工具来开发，它启动快，还有热更新功能，我写代码的时候能马上看到效果，特别方便。
- **测试阶段**：目前没专门配测试环境，一般用`npx`命令跑一些临时脚本做测试，检查功能是不是正常。
- **上线阶段**：用 webpack 打包，它能把代码优化、压缩，生成适合上线的文件。
- **打包上线**：运行`npm run build`命令，生成 dist 文件夹，里面是上线用的静态文件，把这些文件部署到服务器上，配置好域名，就能让别人访问到我的项目了。

## 二、技术亮点

### 2.1 ES6 Module

我用 ES6 模块化语法来写代码，比如`import React, { useState } from 'react'`，这样导入导出模块更清晰，代码也好维护。还用`as`给一些模块或变量起别名，方便在代码里使用。

### 2.2 组件库与主题定制

- 我安装了 zarm 组件库（版本是 3.1.2），用它的 button 组件，样式也挺好看，能快速搭建项目界面。
- 通过配置`ConfigProvider`的`primaryColor`属性，我定制了项目主题颜色，让项目看起来更独特。

### 2.3 性能优化

- 打包的时候，对静态文件进行 gzip 压缩，这样文件体积变小，传输速度更快，项目性能也就更好了。
- 我用 less 作为 CSS 预编译器，能用变量、嵌套这些功能，写样式更方便，代码也更简洁。

## 三、功能实现

### 3.1 路由管理

我用 react-router-dom 来管理路由，在项目里设置好路由路径和对应的组件，这样就能实现不同页面之间的跳转了。比如用`BrowserRouter`来监听路由变化，在开发环境用`HashRouter`，这样更方便调试。

### 3.2 组件开发

- 写了 NarBar 这样的公共组件，用 zarm 的 TabBar 做底部导航，通过`change`事件和`setActiveKey`方法来切换导航项，组件复用性挺高。
- 还用 prop-types 来检查组件的属性类型，这样能保证组件接收到的参数是符合预期的，代码更健壮。

### 3.3 登录功能

- 我实现了登录和注册功能，包括输入账号密码、验证码验证这些。登录页面里能切换登录和注册表单，样式上用了`:global`来突破模块化限制。
- 前端用 axios 和后端通信，配置 vite 的反向代理解决跨域问题，把前端请求的`/api`路径代理到后端服务器，这样前后端数据交互就正常了。

## 四、项目结构

```
project-root/
  ├── src/
  │   ├── components/      # 公共组件，像 NarBar 这些
  │   ├── utils/           # 工具文件，放接口配置、axios 这些
  │   ├── routes/          # 路由配置文件
  │   ├── assets/          # 静态资源，比如图片、样式文件
  │   ├── App.jsx          # 项目入口组件
  │   └── index.html       # 项目入口 HTML 文件
  ├── vite.config.js       # Vite 配置文件
  ├── package.json         # 项目依赖和脚本配置
  └── README.md            # 项目说明文件
```

## 五、性能优化与安全

### 5.1 性能优化

- 我用 memo 缓存组件，useMemo 缓存计算结果，useCallback 缓存函数，这样能减少组件不必要的重新渲染，性能就提升了。
- 对于大型项目，还可以用代码分割、懒加载这些技术，进一步优化加载速度。

### 5.2 安全防护

- 处理用户敏感信息时，我用 httpOnly 和 secure 属性设置 cookie，防止 XSS 和 CSRF 攻击，保证用户数据安全。
- 用 jwt token 令牌做用户认证，服务器验证 token 有效性，保证请求合法安全。

## 六、其他说明

### 6.1 开发工具与插件

- 我用 vite 作为开发服务器，它模块热更新快，插件生态丰富，开发效率高。
- 还安装配置了 vite-plugin-style-import 插件，能按需导入样式，样式文件体积更小。

### 6.2 样式管理

- 我用 CSS 模块化（style.module.css）管理组件样式，避免样式冲突，好维护。
- 用 less 预编译器写样式，变量、嵌套这些功能用起来很方便。

### 6.3 适配与增强

- 我引入了 lib-flexible 库做设备适配，项目在不同屏幕尺寸设备上都能正常显示。
- 用 PostCSS 处理增强 CSS 文件，提高兼容性、可维护性和性能。

- bill 模块
  - sql 建表
  - mvc 
    - model 使用AI生成prompt 基于sql，使用egg.js sequelize orm
    - controller
    - service
      - app.model.Bill.create() 新增
      - app.model.Bill.update({},{
        where:{id:1}
      }) 修改

- 后端建好路由，设置动态路由，使用restful 添加路由
      控制器 detail 解析参数param，校验参数id；
      在conroller中，解析id，调用service 根据id 查找数据，返回前端，完成接口开发
      前端添加detail，设置路由，使用接口，拿到数据，页面进行响应式更新
- 拿到id 看到路由里面pathname里面有 detail/1
  使用useLocation拿到pathname 等路由；第三方库 query-string 解析？后面的参数，拿到id
  ？id=1 拿到id 1
  使用useParams拿到id,在react-router-dom里面，使用useParams拿到路由参数
