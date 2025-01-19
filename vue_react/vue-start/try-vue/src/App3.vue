<template>
    <div>
        <h2>父组件</h2>
        <p>来自子组件:{{ messageFromSon }}</p>
        <!-- 事件和后面的方法 -->
        <Son @child-message = "handleMessageFromSon" :title="title"/>
    </div>
</template>

<script setup>
// 事件 @ 自定义事件
import Son from './components/Son.vue';
import { ref } from 'vue';

const title = ref('来自父组件的信息');
const messageFromSon = ref('');

// 自定义事件，监听，子组件调用child-message 告知父组件
const handleMessageFromSon = (message) => {
    console.log('来自子组件的信息：', message);
    messageFromSon.value = message;
}
</script>

