<template>
    <div class="">
        <van-tabs v-model:active="active" sticky swipeable animated offset-top="86px">
            <van-tab v-for="(menu,index) in houseMenuState":key="index" :title="menu.title" class="bg-gradient-to-b from-white to-gray-200">
                <MenuPage />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">
import { toRefs,ref,} from 'vue'
import { useHouseStore } from '@/store/houseDetail';
import MenuPage from './MenuPage.vue'


const houseStore = useHouseStore()
const {houseMenuState} = toRefs(houseStore)
const active=ref(0)


</script>

<style lang="scss" scoped></style>