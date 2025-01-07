<template>
    <div>
        mousePosX:{{ mousePos.x }}
        mousePosY:{{ mousePos.y }}
    </div>
</template>

<script setup>
// 模块化 解构 出组合式api
import {
  onMounted,
  onUnmounted,
  reactive
} from 'vue'

const mousePos = reactive({
  x:0,
  y:0
}) 
const handler = (e) =>{
     mousePos.x = e.clientX; // 针对左上角
    mousePos.y = e.clientY;
    console.log('我还在。。。');
}
// 卸载
onUnmounted(()=>{
    window.removeEventListener('mousemove',handler)
})
// 挂载
onMounted(()=> {
  window.addEventListener('mousemove',handler)
})



</script>

<style scoped>

</style>