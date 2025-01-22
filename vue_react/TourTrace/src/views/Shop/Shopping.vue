<template>
    <div class="shopping">
      <div class="fixed top-0 left-0 w-full h-[35rem] -z-10 transform -translate-y-0 bg-cover bg-center overflow-hidden"
       style="background-image: url('https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067');">
      </div>
      <header
        class="search flex items-center text-sm mt-4 mx-4 bg-gray-200 rounded-full shadow-md"
      >
        <div class="place font-bold text-lg font-serif">
          <div
            @click="showPicker = true"
            class="flex items-center w-24 justify-center"
          >
            <span class="place">{{ fieldValue }}</span>
            <van-icon name="arrow-down" />
          </div>
          <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>
        <van-search
          v-model="searchField"
          placeholder="商品/关键字"
          clearable
          shape="round"
          class="w-full rounded-full bg-opacity-50"
        >
        </van-search>
      </header>
    </div>
  
      
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const showPicker = ref(false);
  
  const columns = [
    { text: "北京", value: "1" },
    { text: "杭州", value: "2" },
    { text: "厦门", value: "3" },
  ];
  const fieldValue = ref(columns[0].text);
  
  const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
    console.log(selectedOptions);  
  };
  
  const searchField = ref('')
  </script>
  
  <style scoped>
  
  </style>