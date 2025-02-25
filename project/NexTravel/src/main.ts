import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import lazyLoad from './directives/vLazy.ts'
import router from './router/index.ts'
import App from './App.vue'
const app = createApp(App)

app.directive('lazy', lazyLoad) // 注册懒加载指令
app.use(createPinia()) // pinia启用
app.use(router)
app.mount('#app')