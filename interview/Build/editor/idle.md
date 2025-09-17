## 自己的脚手架 | ui库
- 数字孪生 bigdata （沉淀的，客户有钱，有需求）
- 低代码平台：工作流
- uuid 
- 自信，不怕错误；能被点燃；
- 方案状态，轮子为啥出现？长处。
- question 问题-> 
- vue3 响应式：**reactive
- proxy**、reflect（优雅修改代理对象）、依赖收集（tracker）
- 依赖变更触发（trigger）、数据存储细节map、weakMap
- reactive在vue3单独定义，除此外，complier和runtime 包处理更多
- 宏定义，defineProps，defineEmits 编译是处理
- runtime 
- react 里面fiber 架构？
  - stack reconciler 栈式+ expirationTime 无法重点更新
  
- 可视化引擎设计：
  - 可视化渲染器
  - 引擎（canvas 大数据两，性能瓶颈在算法上）、
  - svg（dom存在，性能开销）
  - 预处理器（processor）
  - 数据转换器（formater）

## 性能优化
- 打包：webpack 、chunk、treeshaking
- 资源：图片、字体压缩
- 请求队列、oss、cdn
- -数据结果优化
- 缓存（强缓存、协商缓存、策略缓存）、
- 单例模式、监督者模式、发布订阅模式、观察者模式、

为什么选择Zustand而不是Redux？在账单管理场景下，Zustand如何解决状态共享和性能问题？
- redux可能一个简单账单更新就要多个文件协做；
- zustand create 将状态和逻辑集中管理，
- 
账单数据的实时更新如何通过Zustand与ECharts联动？是否遇到状态同步延迟问题？

AI集成

OpenAI的流式输出具体如何实现？如何处理API速率限制或中断后的重试机制？

Embedding向量检索的准确度如何评估？是否遇到语义相似但实际无关的文档片段？如何优化？

Prompt工程中，针对账单解析任务设计了哪些关键提示词？如何平衡灵活性和约束条件？

性能与错误处理

中间件处理的错误类型有哪些？如何区分网络错误、OpenAI API错误和业务逻辑错误？

ECharts渲染大量账单数据时是否遇到性能瓶颈？如何优化大数据量下的图表渲染？

动态组件

动态组件的身份验证逻辑如何设计？如何确保不同角色（如普通用户、管理员）的组件加载安全？

动态加载的组件是否支持代码分割（Code Splitting）？如何管理依赖关系？

ECharts的配置是否通过JSON动态生成？如何实现用户自定义图表类型（如切换柱状图/折线图）？

是否考虑过替代方案（如D3.js或AntV）？选择ECharts的核心原因是什么？
