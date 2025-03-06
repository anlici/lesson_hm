<template>
    <div>
        {{ value }}
        <button @click="handleClick">+按钮</button>
    </div>
</template>

<script setup>
defineProps({
    value: {
        type: Number,
        default: 0
    }
})
const emit = defineEmits(['value']) // 触发事件
const handleClick = () => {
    emit("update:value","新的value")
}
</script>

<style  scoped>

</style>