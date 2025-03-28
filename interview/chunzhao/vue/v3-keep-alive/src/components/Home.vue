<template>
    <div>
        Home
        <input type="text" v-model="name" placeholder="name">
        <p>输入{{ name }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
</script>

