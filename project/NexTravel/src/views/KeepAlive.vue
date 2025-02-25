<template>
    <div>
        <!-- 插槽获取当前路由组件 -->
        <router-view v-slot="{ Component }">
            <keep-alive :include="cachedComponents">
                <component :is="Component" />
            </keep-alive>
        </router-view>
        <div class="footer h-12">
            <TabBar class="fixed bottom-0"></TabBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import TabBar from '@/components/Home/TabBar.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
// 获取需要缓存的组件
const cachedComponents = computed(() => {
    return router.getRoutes()
        .filter(route => route.meta.keepAlive)
        .map(route => route.name)
});
</script>