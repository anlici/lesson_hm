<template>
    <div class="ai_chat relative min-h-screen mb-20">
        <header class="bg-white shadow-md py-4 sticky top-0 left-0 right-0">
            <div class="container mx-auto flex items-center justify-between">
                <div class="flex-1 items-center">
                    <van-icon name="arrow-left" size="1.5rem" class="ml-3" />
                </div>
                <h1 class="text-xl font-semibold text-center flex-1">智能助手</h1>
                <div class="flex-1"></div>
            </div>
        </header>
        <section>
            <div class="flex-1 mx-2 mt-20 mb-2">
                <div v-for="item of messageList.filter((v) => v.role != 'system')" :class="[
                    'group flex  px-2 py-2 my-3 mr-6'
                ]">
                    <div class="text-2xl" v-if="item.role === 'ai'">
                        <van-icon name="user-circle-o" size="2rem" class="-z-10"/>
                    </div>
                    <div class="flex justify-between rounded-lg item-center mb-2 ml-1 border border-gray-300" :class="item.role === 'ai' ? '' : 'ml-20'">

                        <div class="ml-1 text-m p-2 mr-5">
                            {{ item.message }}
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <footer
            class="fixed bottom-12 left-0 right-0 flex items-center justify-between px-4 py-2 bg-white ">
            <div class="flex flex-grow">
                <input v-model="messageContent" type="text"
                    class="flex-grow bg-white border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="请输入..." />

                <button
                    class="btn ml-2 px-2 rounded-full bg-blue-500 text-white items-center hover:bg-blue-600 transition-colors duration-200 ease-in-out"
                    @click="sendOrSave()" >
                    <van-icon name="guide-o"size="1.5rem" />
                </button>
            </div>
        </footer>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import getCozeData from '@/utils/chatCoze';

const messageContent = ref('');
const messageList = ref([
    {
        role: 'ai',
        message: '你好，我是您的房产小助手，请您告诉我您是要租房、买新房或二手房以及您的具体位置和具体房型，我可以为您推荐。或者您还可以问我一些租房买房的注意事项'
    },
    
]);

onMounted(async () => {
    //   const data = await getCozeData('租房要注意什么');
    //   console.log(data);

})
const sendOrSave = async () => {

    
    messageList.value.push({
        role: 'user',
        message: messageContent.value
    });
    const data = await getCozeData(messageContent.value);
    messageList.value.push({
        role: 'ai',
        message: data.data.messages[0].content
    }); 
    messageContent.value = '';
}






</script>

<style lang="scss" scoped></style>