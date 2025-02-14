import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import { createPinia } from 'pinia'
import LazyLoad from '@/hooks/useLazyLoad';








// import 'lib-flexible/flexible'

const app = createApp(App)
app
    .use(createPinia())
    .use(router)
    .use(LazyLoad,{
        default:'https://tva1.sinaimg.cn/large/007S8ZIlgy1gfyof9vr4mj3044032dfl.jpg'
    });
    
    app.mount('#app')