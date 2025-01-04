<template>
    <div>
        <p>show文章{{ postId }}</p>
        <hr>
        <router-view />
    </div>
    <hr>
   
</template>

<script setup>
import { useRoute } from 'vue-router';
const root = useRoute()
const {postId} = root.params

</script>

<style scoped>

</style>