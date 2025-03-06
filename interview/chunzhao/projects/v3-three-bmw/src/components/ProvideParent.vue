<template>
    <div>
        <Child/>
    </div>
</template>

<script setup>
import Child from './Child.vue'
import { provide } from 'vue';

provide('name', '张三') // key value

</script>

<style lang="scss" scoped>

</style>