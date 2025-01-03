import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 路由对象

const app = createApp(App)
// vue 周边生态
app.use(router) // 插件使用路由
    .mount('#app') // 挂载点
    
    


