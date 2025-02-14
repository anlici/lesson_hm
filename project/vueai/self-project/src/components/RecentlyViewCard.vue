<template>

    <section class="navbar flex overflow-x-scroll  w-screen space-x-4 px-4 py-2">
        <div class="navbar-item  rounded-lg shadow-md
                flex-[0_0_auto] bg-cyan-50 " v-for="item in items" :key="item.title" @click="toPage(item.router)">
            <div class="navbar-item__title text-base font-bold p-2 pb-0">
                {{ item.title }}
                <van-icon name="arrow" />
            </div>
            <span class="navbar-item__content text-xs font-thin px-2">
                {{ item.content }}
            </span>
            <div class="flex grip grip-cols-2 gap-3 px-2 mt-2 pb-2">
                <div class="relative w-[90px] h-[55px]">
                    <img :src="item.img[0]" alt="" class="object-cover w-full h-full">
                </div>
                <div class="relative w-[90px] h-[55px]">
                    <img :src="item.img[1]" alt="" class="object-cover w-full h-full">
                </div>

            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { HouseNewsCard } from '../types/house';
import { useRouter } from 'vue-router'
interface Props {
    items: HouseNewsCard[]
}

defineProps<Props>()

const router = useRouter()

const toPage = (name: string) => {
    // console.log(name);

    router.push(name)
}


</script>

<style lang="scss" scoped></style>