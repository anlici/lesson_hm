## vite 和 webpack 的区别
- vite 脚手架
  - 自动加载ui库，不需要手动导入
  - alias 别名配置
  - 反向代理
- webpack 脚手架
  - 构建项目时，vite 比webpack 快？
  - webpack 配置复杂，

- 复杂且定制强的项目，或老项目，使用 webpack
- 项目依赖和代码打包
  - vite 基于es6 module（懒加载，其他不用加载和打包），
  - webpack 基于commonjs（浏览器不支持，所有文件打包好，慢，如ts进行babel 转义）

- jsx 使用babel 转成React.createElement,返回一个表示dom节点的对象，
- dev-server 启动http服务，

## 手写工程化流程
- 项目是spa，但是项目编译和基础建设是后端，基于node
- npm run build 后cdn 加载，

- webpack 构建项目：
- webpack 是工程化 得力套件
- 入口，出口module，
- node 和plugin 是可以处理多种文件，vite 开箱即用，
- 复杂，但是大型项目，可以灵活设置
- 拥有插件，minify 压缩，babel 转义，
- 从webpack.config.js 文件中配置开始，通过rules 规则匹配响应的文件，
- 然后通过loader 加载器对文件进行处理，设定babel-preset-env ，
- 使用html-webpack-plugin 插件生成html文件，

## es6 module 和 commonjs 的区别
- es6 有import export，commonjs 有require module.exports（exports）
- es6 静态导入，在编译阶段就确定依赖关系和导入导出变量，
- 而且可以使用tree shaking 进行打包优化，只打包使用的模块，
- commonjs 动态导入，在运行时才确定依赖关系和导入导出变量。
- es6 导入是值引用，模块内部的变化会影响到其他模块，
- commonjs 导入是值拷贝，模块内部的变化不会影响到其他模块。
