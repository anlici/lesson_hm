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

## 别名


## 路由vue-router
  - createRouter，createWebHashHistory
  - 制定路由规则
    component:() => import('@/views/xxx')
  - 在main.js 引入
    .use(router)
  - 在App.vue 引入
  <router-view></router-view> 在那个路由，就显示那个组件

## element-plus 
   - 按需导入，图标 for()


## 打招呼
  - 你好，我叫xxx 毕业于（计算机相关专业）开发/实习经验 具备... 会xxx类型项目
  入职立马融入团队 给公司创造价值

  - 我叫戴佑圣，现在是东华理工大学计算机类专业，熟悉前端三件套，熟悉vue3，有vue3，axios开发经验；


- 首屏加载慢 白屏问题
  <el-menu-item
    v-for="item in noChildren"
    :index="item.path"
    :key="item.path"
  >
    <template #default>
      <span>{{ item.meta.title }}</span>
    </template>
  </el-menu-item>
  解决方法：
  1. 路由懒加载
  2. 路由组件缓存

- ref 包裹的数据
  使用.value 