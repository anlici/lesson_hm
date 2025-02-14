<template>
    <div class="Home bg-white top-0 left-0 right-0 z-40 bg-black sticky">
        <Header />
    </div>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <div class="home-page mt-3">
            <main class="menu-item flex flex-col space-y-4">
                <header>
                    <section class="topbar flex justify-evenly items-center my-3 ">
                        <div class="topbar-item flex flex-col items-center w-[60px]" v-for="item in topBarState"
                            :key="item.title">
                            <div class="topbar-item__icon">
                                <van-icon :name="item.icon" size="2.5rem"></van-icon>
                            </div>
                            <div class="topbar-item__text text-xs mt-1 font-bold">{{ item.title }}</div>

                        </div>

                    </section>
                </header>

                <section class="flex border-3 border-black">
                    <swiper
                        class="swiper"
                        :modules="modules"
                        :auto-height="true"
                        :space-between="20"
                        :pagination="{clickable:true}"
                        
                    >
                        <swiper-slide class="slide pb-8">
                            <menu class="first-page  ">
                                    <section class="topbar flex grid grid-cols-5 gap-5 items-center mt-3 mx-[19px]">
                                        <div class="topbar-item flex flex-col items-center whitespace-nowrap "
                                            v-for="item in menuFirstBarState" :key="item.title">
                                            <div class="topbar-item__icon">
                                                <van-icon :name="item.icon" size="1.5rem"></van-icon>
                                            </div>
                                            <div class="topbar-item__text text-xs ">{{ item.title }}</div>

                                        </div>

                                    </section>
                                </menu>
                        </swiper-slide>
                        <swiper-slide class="slide pb-8">
                            <menu class="second-page">
                                    <section class="topbar flex grid grid-cols-5 gap-5 items-center my-3 mx-[19px]">
                                        <div class="topbar-item flex flex-col items-center whitespace-nowrap"
                                            v-for="item in menuSecondBarState" :key="item.title">
                                            <div class="topbar-item__icon">
                                                <van-icon :name="item.icon" size="1.5rem"></van-icon>
                                            </div>
                                            <div class="topbar-item__text text-xs ">{{ item.title }}</div>

                                        </div>

                                    </section>
                                </menu>
                        </swiper-slide>
                    </swiper>
                </section>
                <section class="card-item mt-4">
                    <RecentlyViewCard :items="recentlyViewedState" />
                </section>
                <section>
                    <swiperNews :items="newsCardsState"/>
                </section>
            </main>
            <section>
                <HouseList />
            </section>
            
        </div>
    </van-pull-refresh>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import { toRefs,ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

const modules = [Pagination];
import 'swiper/css';
import 'swiper/css/pagination'
import { useTopStore } from '@/store/topBar';

import RecentlyViewCard from '@/components/RecentlyViewCard.vue'

import swiperNews from '@/components/swiperNews.vue'
import HouseList from './HouseList.vue';

const topStore = useTopStore()
const { topBarState, menuFirstBarState, menuSecondBarState,recentlyViewedState,newsCardsState } = toRefs(topStore)

const loading = ref(false);

const onRefresh = () => {
      setTimeout(() => {
        
        loading.value = false;
      }, 1000);
    }; 




</script>

<style lang="css" scoped>


</style>