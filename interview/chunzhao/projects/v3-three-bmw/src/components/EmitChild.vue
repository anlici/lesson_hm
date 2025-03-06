<template>
    <div>
        <button @click="handleClick">点击</button>
        <button @click="emit('myClick','hello')">按钮</button>
    </div>
</template>

<script setup>
const handleClick = () => {
    console.log('点击了')
}
</script>

<style  scoped>

</style>