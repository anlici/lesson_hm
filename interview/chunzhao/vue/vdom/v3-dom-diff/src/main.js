import { createApp,h } from 'vue'

// import App from './App.vue'
// 虚拟dom 现代前端框架的核心概念
// 轻量级js对象，描述真实dom结构和属性
const vnode = h('div',{id:'app'},'Hello vue3')

createApp({
    render(){
        return vnode
    }
}).mount('#app')
