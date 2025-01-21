<template>
    <div>
        计数器一：{{count}}
        <button @click="add">+1</button>
        <br/>
        计数器二：{{num.total}}
        <button @click="sub">-1</button>
    </div>
</template>

<script setup>
import {reactive, ref,watch, watchEffect} from 'vue'

const num = reactive({
    total: 0,
    sub: 0,
    homeTown:{
       
        address: '北京'
    }
})
const sub = () => {
    num.total--,
    homeTown.address = '上海'
}
watch([() => num.homeTown], (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, {
    //immediate: true,
    // deep: true
})
// 默认执行一次，
watchEffect(() => {
    // Object.prototype.toString.call(num) === '[object Object]'
    console.log(`user1: ${JSON.stringify(num.homeTown.address)}`)
})

const count = ref(0)
const add = () => {
    count.value++
}
// 监听数据源（数组或是响应式数据）,回调函数，可选参数
watch(count, (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, {
    immediate: true,
    deep: true
})
// // 监听 订阅发布者模式 观察者模式
// // effect 副作用
// watchEffect(() => {
//     console.log(`当前值：${count.value}`)
// })

</script>

