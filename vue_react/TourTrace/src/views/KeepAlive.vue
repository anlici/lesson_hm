<template>
    <div class="flex">
        <router-view></router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-0"></TabBar>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TabBar from '../components/Home/TabBar.vue'
</script>

<style lang="scss" scoped>

</style>