<template>
    <div>
        {{ count }}
        {{ double }}
    </div>
</template>

<script setup>
import {ref,watchEffect,computed} from 'vue'
const count = ref(0)
const double = ref(4)
watchEffect(() => {
    double.value = count.value * 2
})
setTimeout(() => {
    count.value++
}, 2000)

count.value++

</script>

<style scoped>

</style>