<template>
    <div>
        <ExposeChild ref="comp" />
        <button @click="handleClick"></button>
    </div>
</template>

<script setup>
import ExposeChild from './ExposeChild.vue'
import {ref} from 'vue'
const comp = ref(null)

const handleClick = () => {
    if (comp.value) {
        console.log('子组件实例:', comp.value);
        comp.value.someMethod?.(); // 调用子组件方法
    }
}
</script>

<style  scoped>

</style>