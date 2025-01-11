import { createApp } from 'vue'
import App from './App.vue'
import { ElButton, ElForm, ElInput, ElFormItem } from 'element-plus'
import {ElContainer,ElHeader,ElAside,ElMain,ElFooter,ElMenu,ElSubMenu,ElMenuItem} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'


// 创建 Vue 应用实例
const app = createApp(App)

// 使用 Element Plus 组件
app.use(ElButton)
app.use(ElForm)
app.use(ElInput)
app.use(ElFormItem)
app.use(ElContainer)
app.use(ElHeader)
app.use(ElAside)
app.use(ElMain)
app.use(ElFooter)
app.use(ElMenu)
app.use(ElSubMenu)
app.use(ElMenuItem)

// 使用路由
app.use(router)

// 挂载应用实例到 DOM 元素
app.mount('#app')
