<template>
    <section class="mt-4">
        <div class="grid grid-cols-2 gap-4 mx-4">
            <div v-for="(item, index) in houseList" :key="index" class="border bg-white">
                <div class="Shopimg">
                    <img v-lazy="item.img" class="w-full h-48 object-cover">
                </div>
                <div class="text-lg font-bold p-2 h-16 overflow-hidden">{{ item.name }}</div>
                <div class="text-gray-700 p-2">{{ item.price }}</div>
                <div class="text-red-500 p-2">{{ item.describe }}</div>
            </div>
        </div>
        <!-- 加载更多观察元素 -->
        <div ref="loadingRef" class="text-center py-4">
            <van-loading v-if="hasMore" size="24px">加载中...</van-loading>
            <span v-else class="text-gray-500">没有更多数据了</span>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useHouseStore } from '@/store/houseDetail';
import { toRefs, ref } from 'vue';
import { useLoadMore } from '@/hooks/useLoadMore';

const houseStore = useHouseStore();
const { HouseDetailState } = toRefs(houseStore);

// 初始显示前4条数据
const houseList = ref([...HouseDetailState.value.slice(0, 4)]);
const loadingRef = ref<HTMLElement | null>(null);

// 加载更多数据的方法
const loadMore = () => {
    const currentLength = houseList.value.length;
    const newData = HouseDetailState.value.slice(currentLength, currentLength + 4);
    
    if (newData.length > 0) {
        setTimeout(() => {
            houseList.value.push(...newData);
            // 判断是否还有更多数据
            if (currentLength + newData.length >= HouseDetailState.value.length) {
                setHasMore(false);
            }
        }, 500); // 添加延迟模拟加载效果
    } else {
        setHasMore(false);
    }
};

// 使用 useLoadMore hook
const { hasMore, setHasMore } = useLoadMore(loadingRef, loadMore);
</script>