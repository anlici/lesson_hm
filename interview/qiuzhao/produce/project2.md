## 政务AI 辅助系统
### 图表配置浏览器缓存 
- 资源变更查看：
  - vite 内置对文件hash 处理：
    - 分析文件内容，生成唯一的内容哈希值（如abc123）。
    - 将哈希值嵌入资源的 URL 中（默认是文件名 + 哈希，如chart-config.abc123.json）。
    - 同时，引用这些资源的地方（如页面 JS、HTML）会自动替换为带哈希的 URL
  - 备选：添加版本号：每次访问资源时，时带有版本号的文件路径
        版本号变更，浏览器会重新下载资源
  - 兜底：添加缓存控制头：Cache-Control: max-age=31536000
        浏览器会缓存资源
- 一般存储：磁盘缓存，因为大，并且长期使用
  不用手动 考虑放内存还是磁盘

动态数据（接口返回）	内存变量 /localStorage/IndexedDB	复用图表数据，减少接口请求
图表实例	           内存变量	                复用已初始化的图表对象，提升渲染性能

### 虚拟列表 基于 react-window 的 FixedSizeList 实现虚拟列表的核心代码，包含基础渲染、高度固定
- vs 普通列表
  - 普通列表一次性渲染所有数据，生成相应dom节点，因数据量过大，导致页面卡顿，滚动不流畅
  - 【虚拟列表只渲染可视区域的数据，保留其他数据在内存中，只渲染可视区域的数据，生成相应dom节点】
    向上滑动数据还在，至少销毁不在可视区域的dom，释放内存
    固定为 “可视区可容纳的数量 + 少量缓冲”
- 拖动滚动条本质是改变列表的滚动位置，虚拟列表会监听滚动事件（或通过Intersection Observer监测位置变化）
- 适用：用户习惯 “一直往下滑”，而非分页切换
- 搜索后的场景本质是 “数据筛选后的子集渲染”
  - 步骤 1：在筛选后的数据集里找到目标项的索引（如 index = filteredData.findIndex(...)）。
  - 步骤 2：通过虚拟列表库的 API 滚动到该索引位置（如 react-window 的 scrollToItem(index) 方法），内部会自动计算该索引对应的偏移量，确保项进入可视区。
- 缺点：- 单纯手写复杂，借助第三方库实现，react-window
  - 初始化时需要计算可视区范围、预渲染缓冲项，相比普通列表，在数据量少，可能只有200条时，初始化时间会变长
  - 
- 总结：虚拟列表通过 **“内存保留全量数据 + 仅渲染可视区 DOM”** 的方式，确保任何方向的滚动（上滑、下滑、拖动滚动条）都能实时展示对应内容，同时避免 DOM 数量过多导致的性能问题。数据不会因滚动丢失，DOM 则按需销毁 / 重建，兼顾了流畅性和资源效率
### Intersection Observer 
- 是浏览器原生 API，用于异步监测元素是否进入 / 离开视口（或指定容器），无需监听 scroll 事件，性能更优。
- 实现 “按需渲染”：当列表项进入视口时才渲染，离开时销毁

## 多环境切换和路由状态管理
当时遇到的问题：
不同环境（开发、测试、生产）需要不同的配置
路由跳转时面包屑更新不及时
异步加载的菜单导致路径匹配异常
- 一开始硬编码，但是考虑后续维护可能不好，
- 新：环境配置统一管理对象，再根据location.hostname  动态环境识别对于环境
  在路由状态管理时，history 监听路由变化，在use Effect 实时更新面包屑。

- useEffect 确保

## 重难点：智能测试规则引擎的设计
遇到的问题：
手动编写测试用例效率低
测试覆盖率不够全面
边界情况容易遗漏

### big.js 底层
- 输入时使用字符串避免精度丢失。
- 数字结构： 符号位，指数，系数
- GPU 

## react native 怎么映射到web
- `react native for web 库`， RNFW 通过编译工具（如 Babel 插件）将 React Native 特有的语法（如 require('react-native')）转换为 Web 端可识别的代码
- 相应映射对应html 元素，
  使用platform 自定义适配平台，
- 但是对应一些和硬件打交道，比如蓝牙，摄像头，
- 基于 Web API 单独开发适配层，同时通过 统一接口抽象 保持跨平台逻辑一致

## 组件库开发
### 总结了几个设计原则：
1. 单一职责 每个组件只负责一个功能，比如面包屑组件只负责导航显示，不处理权限逻辑
2. 可组合性 组件之间可以灵活组合，比如侧边栏 + 面包屑 + 内容区域可以组成完整的布局
3. 向前兼容 新版本的组件要兼容旧版本的API，避免升级时出现破坏性变更【大模型，通义和openai 模型使用不一样】
4. 性能优化 使用React.memo避免不必要的重渲染，合理使用useMemo和useCallback

### 侧边栏组件复用性
**问题：侧边栏组件的可复用性体现在哪些方面？**
1. 配置化设计 我把所有可变的部分都抽象成了props，这样不同的项目可以传入不同的配置：
```js
interface SidebarProps {
  menuData: MenuItem[];        // 菜单数据
  theme?: 'light' | 'dark';   // 主题色
  collapsed?: boolean;         // 是否折叠
  onMenuClick?: (item: MenuItem) => void;  // 点击回调
  customRender?: (item: MenuItem) => ReactNode; // 自定义渲染
}
```
2. 插槽机制 支持自定义头部、底部、菜单项的渲染，满足不同业务需求。
比如有些项目需要在侧边栏顶部显示用户头像，有些需要显示公司Logo。
3. 主题系统 使用CSS-in-JS实现多主题切换，支持亮色、暗色主题，甚至可以自定义品牌色。
这样一个组件可以适配不同的视觉风格。
4. 响应式设计 自动适配移动端和桌面端，在手机上会自动变成抽屉式菜单，在桌面端是固定侧边栏


### 系统嵌入其他网站
- iframe VS qiankun微前端
- qiankun微前端 优势：- 每个微应用都是独立运行在沙箱中，不会相互影响。
  - 安全性更高，能统一路由和状态管理
  - 方式：
    - 主应用路由配置
    - 样式有全局样式，但是每个子应用有自己的样式，【CSS Module + 样式隔离沙箱】
  - 全局状态共享
  - 切换应用时状态重置  解决：keep-alive机制保持应用状态
  - 权限
- 动态路由配置，基于Map数据结构实现路由注册和路由匹配；
  菜单数据变化时自动注册路由
```js
// 动态路由配置
const dynamicRoutes = new Map();

const registerDynamicRoute = (menuItem: MenuItem) => {
  const route = {
    path: menuItem.path,
    component: lazy(() => import(menuItem.component || './DefaultPage')),
    meta: {
      title: menuItem.name,
      permissions: menuItem.permissions
    }
  };
  
  dynamicRoutes.set(menuItem.path, route);
  
  // 更新路由配置
  updateRouterConfig();
};

// 菜单数据变化时自动注册路由
```
- iframe 简单易用，安全风险：
  - 恶意网站嵌入你的页面，诱导用户点击
  - 恶意重定向
  - 措施：CSP 策略

### 菜单系统设计
**问题：你是如何设计菜单的数据结构的？支持多少层级的嵌套？**
- 适用interface 接口 定义，并且设定level 层级深度最多5层，
  后续通过递归遍历实现树形结构的渲染和操作
  有考虑优化，使用Map 数据结构实现节点缓存，基于 LRU（Least Recently Used）最近最少使用算法
  缓存容量限制为10个节点，避免内存泄漏
  每次访问节点时先检查缓存，未命中则加入缓存并更新访问时间
防抖截流区别，相应代码和适用场景？
### 路由系统设计
**问题：路由自动匹配是如何实现的？有没有考虑路由冲突的情况？**
- 路由自动匹配 通过写了个hook 路由监听钩子
  实现功能有两个：使用useLocation 处理路由变化，监听popstate 事件处理浏览器前进后退
  使用：在调用useRouteListener 定义好的这个钩子时，传入路由变化回调函数。
- 路由监听器检测到url变化，解析出新的 query 查询参数
  系统根据参数调整页面展示，新页面展示后，页面标题和面包屑更新

#### 旧版‘+’ 和 新版‘%20’ 做兼容 ： 区分版本 + 渐进式切换
- 在处理URL 的query 参数时，出现够bug
  因为有用户使用时query 中带有空格，在一开始使用URLSearchParams 解析时，会将空格解析为+号，导致无法正确解析query 参数
  处理tt时，看相关url 处理的代码，先确定在这个url 传入url 解析函数之前，是否url 正常
  通过打印url 等处理发现，在url 传入前正常，传入后变成加号，定位成功。
  所以下一步怀疑 URLSearchParams 函数本身有问题，上网查找发现这个函数本身对空格就是转成加号
  特别是特殊字符，了解到encodeURIComponent 函数对特殊字符转成%XX 格式
  - 前端 可以使用get读取也是读取到空格，但是希望URL 呈现成%20 格式，使用encodeURIComponent 函数对URL 进行编码
  - 整个流程无需后端手动解码，前端只需在需要展示时用decodeURIComponent()处理即可
  - ‘+’ 和 空格，urlSearchParams 函数对空格转成加号
- 区分版本：
  - 接口版本标识，后段返回时带上版本参数，v1 🍷版本使用 手动replace 替换加号为空格
    v2 新版本 还是使用encodeURIComponent 函数对URL 进行编码
- 平滑过渡：旧接口继续运行，新接口按标准开发；后续旧接口下线后，只需删除旧逻辑的分支代码，无需大规模重构。
2. **URL 参数处理**：
   ```javascript
   // 优化的参数解析函数
   const getQueryParams = (search: string) => {
     const params = new URLSearchParams(search);
     return Object.fromEntries(params.entries());
   };
   
   // URL 编码处理，支持中文和特殊字符
   const encodeURL = (url: string) => encodeURIComponent(url);
   ```

3. **路由冲突解决**：
   - **动态路由优先级**：静态路由 > 动态路由 > 通配符路由，priority 字段控制优先级
   - **命名空间隔离**：不同模块使用不同的路由前缀，比如/admin、/user 管理员和用户模块不同前缀
   - **路径匹配策略**：使用精确匹配和模糊匹配相结合
