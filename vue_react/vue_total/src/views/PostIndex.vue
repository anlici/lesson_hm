<template>
    <div>
        <p>内人</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const root = useRoute()
const {postId} = root.params

</script>

<style scoped>

</style>