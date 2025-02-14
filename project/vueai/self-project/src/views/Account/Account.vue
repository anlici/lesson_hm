<template>
    <div >
        <div class="top-bg absolute h-32 -z-40 
     w-screen bg-gradient-to-b from-green-200 to-white"></div>
        <div class="home pt-16 pb-4 z-50 " >
           <div class="section flex items-center " @click="toLogin">
            <div class="icon ml-6" v-if="!accountExist">
                <van-icon name="user-circle-o" size="3.5rem" color="#76dd82" />
            </div>
            <div class="icon ml-6" v-if="accountExist">
                <img src="https://img0.baidu.com/it/u=2277984874,500467423&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1722099600&t=5f480d5dd4b60bca8be11e41c21ed488" alt="" class="rounded-full w-20 h-20">
            </div>
            

            <section class="login flex flex-col ml-6" v-if="!accountExist">
                 <div class="registerLogin text-2xl font-bold">注册/登录</div>
                 <span class="text-xs">登录后可体验更多服务</span>
            </section>
            <section class="login flex ml-6 items-center" v-if="accountExist">
                 <div class="registerLogin text-2xl font-bold">{{  }}</div>
                 <span class="text-xs ml-16 border border-2" @click="exitLogin">退出登录</span>
            </section>

           </div>
        </div>
        <main class="flex items-center mt-2">
            <header class="w-[calc(100vw-2rem)] min-h-20 bg-white rounded-b-2xl p-2 shadow-lg self-center m-auto mt-2">
                <section class="topbar flex justify-space-between grid grid-cols-4 mb-3">
                    <div class="topbar-item flex flex-col items-center mt-5" v-for="item in accountMessageState" :key="item.title">
                        <div class="num font-bold text-2xl">{{ item.detail }}</div>
                        <span class="text-xs">{{ item.title }}</span>
                    </div>  
                </section>
            </header>
        </main>
        <main class="flex items-center mt-5 ">
            <header class="w-[calc(100vw-2rem)] min-h-20 bg-white rounded-lg shadow-lg border p-2 self-center m-auto">
                <span class="font-bold text-xl" @click="text">房产工具</span>
                <section class="topbar flex justify-space-between grid grid-cols-4 mb-3">
                    <div class="topbar-item flex flex-col items-center mt-5" v-for="item in accountFuncState" :key="item.title">
                        <div class="num font-bold text-2xl">
                            <van-icon :name="item.icon" size="1.5rem"></van-icon>
                        </div>
                        <span class="text-xs">{{ item.title }}</span>
                    </div>  
                </section>
            </header>
        </main>
    </div>
</template>

<script setup lang="ts">
// import { exit } from 'process';
import test from 'node:test';
import { useAccount } from '../../store/accountStore';
import { toRefs,computed,ref } from 'vue';
import { useRouter } from 'vue-router';

const account = useAccount()

const router = useRouter()

const { accountMessageState,accountFuncState } = toRefs(account)

const userName = computed(()=>{
    
    
    return JSON.parse(localStorage.getItem('userInfo'))
})

const accountExist = computed(()=>{
    if(!localStorage.getItem('userInfo')){
        return false
    }else{
        return true
    }
})

const text=()=> {
    console.log(JSON.parse(localStorage.getItem('userInfo')).username);
    
}
const toLogin =()=>{
    if(localStorage.getItem('userInfo')){
        return
    }
    else{
        router.push('/login')
    }
}

const exitLogin=()=> {
    localStorage.removeItem('userInfo')
    router.push('/account')
    console.log(accountExist);
    
}
</script>

<style lang="css" scoped>
.color{
    color: #76dd82;
}
</style>