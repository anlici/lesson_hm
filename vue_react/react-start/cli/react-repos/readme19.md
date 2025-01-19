# babel 家族
- 在开发依赖处
- @babel/cli  babel命令行工具
- @babel/core babel核心转义库 例如：const -> var
- @babel/preset-env  预设环境

- 前端工程化 vite/babel/stylus/webpack 
- npx 临时使用，
  不用安装，直接执行某个包
  npx babel 
  npx 找到 node_modules/.bin/babel 命令执行 
- bin 能执行命令的，
  .babelrc 配置文件,
  presets 预处理 @babel/preset-env 把es6转成es5，

- React.createElement(tag,props,...child) 
- 虚拟dom 
- jsx 不能直接运行，是babel转义 按@babel/preset-react 转义