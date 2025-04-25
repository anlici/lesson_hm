## webpack 和 vite 区别
- 打包速度：
  - webpack 对每个模块进行分析处理，会将所有模块都打包成一个文件bundle，然后进行优化。
  - vite 采用es module方式，按需编译，只对用到的模块进行编译，打包速度更快。
- 热更新：
  - webpack 采用hmr（热模块替换），每次修改代码后，webpack会重新打包，然后刷新页面。
  - vite 只对修改的模块进行编译，然后刷新页面。
- 配置
  - webpack 很多需要手动配置，比如babel，plugin等。
  - vite 采用开箱即用的方式，不需要手动配置。


- vite 部署
  - build 打包 生成dist目录，dist 包含所有静态资源，部署到服务器或cdn。
  