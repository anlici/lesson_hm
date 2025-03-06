<template>
    <div>
        <div>ExposeChild</div>
    </div>
</template>

<script setup>
const someMethod = () => {
    console.log('子组件方法被调用');
}
defineExpose({ someMethod }); // 显式暴露方法
</script>

<style scoped>

</style>