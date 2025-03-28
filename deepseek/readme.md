### 项目介绍：DeepSeek 页面实现

#### 项目概述
DeepSeek 是一个高效、轻量级且经济实惠的机器学习模型项目。它旨在通过优化的 Transformer 架构和高效的分布式训练策略，提供高性能的自然语言处理（NLP）服务。DeepSeek 不仅免费，而且在算力使用和成本控制方面表现出色。

#### 主要特点

1. **高效分布式训练**
   - 借助高效的分布式训练策略，DeepSeek 能够快速训练模型，提高训练效率。

2. **轻量级推理**
   - 通过对关键参数的精准优化和筛选，DeepSeek 实现了轻量级推理，显著减少了算力需求。

3. **经济高效**
   - DeepSeek v3 使用 2028 块 H800 GPU，总成本为 557.6 万美元，相比 Meta Llama 3 的成本仅为 1/10。
   - 相比 GPT-4，每百万次调用成本仅为 280 人民币，且性能达到 99.6%。

4. **优化的 Transformer 架构**
   - 采用了优化的 Transformer 架构，提高了模型的性能和效率。

5. **本地部署支持**
   - DeepSeek 支持本地部署，用户可以通过 Ollama 拉取并使用模型，实现本地离线调用。
   - 示例命令：`ollama pull deepseek-r1:1.5b`

6. **模型微调**
   - 用户可以根据自己的业务需求对模型进行微调，实现个性化定制。

#### 技术栈

1. **大前端**
   - **前端**
     - 使用 React 作为主要的前端框架，提供丰富的组件和高效的渲染性能。
     - 使用 Mock.js 模拟数据，支持前端开发时的数据模拟。
     - 在域名 `3001` 上运行，提供模拟数据服务。

   - **后端**
     - 使用 Koa 作为后端框架，提供灵活的中间件机制。
     - 在端口 `3000` 上运行，提供 HTTP 服务。
     - 支持 RESTful API 和表单提交。
     - 使用 Koa-Router 管理路由，支持丰富的周边生态。
     - 支持 API 接口数据的 JSON 格式。
     - Koa 的中间件按照注册的顺序依次执行，并支持洋葱模型，确保中间件的高效执行。

2. **后端 Server 配置**
   - **为什么选择 Axios 而不是 Fetch**
     - Axios 提供了更好的浏览器兼容性，支持更多的功能，如请求取消、自动转换 JSON 数据等。
   - **跨域问题**
     - 使用 CORS（跨域资源共享）机制，通过特定的 HTTP 响应头允许浏览器访问资源。
     - 支持 JSONP 作为跨域解决方案，通过 `<script>` 标签加载数据。
     - 示例 JSONP 调用：
       ```html
       <script src="http://example.com/api?callback=handleResponse"></script>
       <script>
         function handleResponse(data) {
           // 处理返回的数据
         }
       </script>
       ```

#### 使用场景
- **本地部署**：DeepSeek 可以在本地部署，支持离线调用，适合需要数据隐私和安全的场景。
- **模型微调**：用户可以根据自己的业务需求对模型进行微调，实现个性化定制。
- **高效推理**：通过优化的参数和架构，DeepSeek 能够在低算力环境下提供高效的推理服务。
