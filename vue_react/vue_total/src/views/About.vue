<template>
    <div>
        <p>挂衣关于</p>
        <button @click="goHome">回到首页</button>
    </div>
</template>

<script setup>
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = () => {
//     router.push('/')
// }

const goHome = () => {
    // bom 对象 BOM Browser Object Model 浏览器对象模型 
    // 破坏了单页应用的特性？
    window.location.href = '/'
}
</script>

<style  scoped>

</style>