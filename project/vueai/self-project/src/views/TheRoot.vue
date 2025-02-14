<template>
    <div>
        <div class="home">
            <router-view></router-view>
        </div>
        <div class="footer h-12">
            <Tabbar class="fixed bottom-0"/>
        </div>
    </div>
</template>

<script setup>
import Tabbar from '@/components/Tabbar.vue'

</script>

<style lang="scss" scoped>

</style>