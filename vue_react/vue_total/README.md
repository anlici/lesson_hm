## vue 全家桶 vue-router 路由

- vue 语法、组件（vue2，vue3 组合式）、响应式、生命周期、指令（v-bind: v-model\v-for\ v-if v-show ）
  三种数据（自有数据ref，props，computed）

- vue-router 路由 vue 周边路由
  单页面 SPA 多视图切换
  组件来加载

## vue-router
- 将接管路由
- router-link 取代a标签
  包含a 功能，路由对于组件显示到相应位置
- 未引入的组件，降级成为div 标签元素；
- router 专门目录，index.js 入口配置文件
- router-link 组件是vue-router 提供的组件，use（router） 不用引用就可以生效
  

- to="/about"   :to="{name:'about'}"
   
- {
        path: '/posts',
        component: PostIndex
    },
    {
        path: '/posts/:postId',
        component: PostShow
    }

  - routes 拆分 亮点
    顶级路径 /posts  子路径 /posts/:postId
    用户模块 ...postRoutes  展开运算？

-  window.location.href = '/'
   加载新的url，触发这个页面刷新，破坏单页面
   导航是要js
   使用vuex 或其他状态管理应用状态
  刷新，加载资源，没有通过单页异步或是缓存资源
  用户可能因为页面闪缩，出现短暂的白屏，体验不好，不能感受导航无痕

- 使用router.push() 入栈
  栈顶是当前路由，显示组件；前进或是后退 -》 导航

- meta: {
            requireAuth: true
        } 路由鉴权配置项