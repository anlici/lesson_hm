import { createApp } from 'vue'
import App from './App.vue'
import { ElButton, ElForm, ElInput, ElFormItem } from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

createApp(App)
   .use(router)
   .use(ElButton)
   .use(ElForm)
   .use(ElInput)
   .use(ElFormItem)
   .mount('#app')