<template>
  <router-view></router-view>
  <!-- <div ref="scriptContainer"></div> -->
</template>

<script setup>
// import { ref, onMounted } from 'vue';

// const scriptContainer = ref(null);

// onMounted(() => {
//     const scriptElement = document.createElement('script');
//   scriptElement.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/cn/index.js';
//   scriptElement.type = 'text/javascript';
//   scriptContainer.value.appendChild(scriptElement);
//   scriptElement.addEventListener('load', () => {
//     new CozeWebSDK.WebChatClient({
//             config: {
//               bot_id: '7399128294542688308',
//             },
//             componentProps: {
//               title: 'Coze',
//             },
//           });
//   });
// });
</script>

<style lang="scss" scoped>

</style>