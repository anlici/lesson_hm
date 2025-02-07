import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import Vant from 'vant'
import 'vant/lib/index.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Vant)
app.mount('#app')
