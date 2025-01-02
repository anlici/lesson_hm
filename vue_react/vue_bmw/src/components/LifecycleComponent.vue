<template>
    <div>
        <div id="count">
            子组件：{{ count }} 
        </div>
    </div>
</template>

<script setup>
import { defineProps,onBeforeMount,onMounted,onBeforeUnmount,onUnmounted } from 'vue'
const props = defineProps({
    count: {
        type: Number,
        required: true // 必传
    }
})

onBeforeMount(() => {
    console.log(document.getElementById('count'),'-----');
    console.log('挂载前');
    
})
 onMounted(() => {
    console.log(document.getElementById('count'),'-----');
    console.log('已经挂载');
 })
// 
console.log('dd');

onBeforeUnmount(()=>{
    console.log('卸载前');
    
})
onUnmounted(() => {
    console.log('卸载后');
    
})
</script>

<style  scoped>

</style>