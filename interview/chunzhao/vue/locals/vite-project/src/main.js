import { createApp } from 'vue'
import './style.css'
import i18n from './i18n.js'
import App from './App.vue'

const app = createApp(App)
app 
.use(i18n) // vue 和 生态接口 install 里面 vue-router 
.mount('#app')
