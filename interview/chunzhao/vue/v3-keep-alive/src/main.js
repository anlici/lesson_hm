import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import lazyLoad from './directives/lazyLoad.js'


const app = createApp(App)
app.directive('lazy', lazyLoad) // 注册指令
  .use(router)  // 挂载路由
  .mount('#app')
  
