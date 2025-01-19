<template>
    <div>
        <h1>Hello child!</h1>
    </div>
</template>

<script setup>
import { defineExpose } from 'vue';
// 暴露出去
defineExpose({
    foo() {
        console.log('这是来自子组件的foo方法');
    },
    childName:'这是子组件的属性'
})
</script>

