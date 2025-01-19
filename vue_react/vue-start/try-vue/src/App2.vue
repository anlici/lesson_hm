<script setup>
import Counter from './components/Counter.vue'
import HelloWorld from './components/HelloWorld.vue';
import Weather  from './components/Weather.vue';
// composition api 组合式
import {
  ref,
  reactive,
} from 'vue'
// ref 基本数据类型，reactive 复杂数据类型（数组，对象）
// 组合 api
const counter = ref(0)
const incresement = () => {
  counter.value++
}

const state = reactive({
   name:'张三',
   age:18,
})
// 
const changeName = () => {
  state.name = '李四'
}

</script>

<template>
   <div>
    <Counter /> 
   <!-- <HelloWorld /> --> 
   <!-- <Weather /> -->

   <div>
     {{counter}} <!--  Vue 会自动解包 ref 的值 -->
     <button @click="incresement">+1</button>

     <div>
       {{ state.name  }}
       <button @click="changeName">changeName</button>
     </div>
   </div>
   
   </div>
</template>

<style scoped>

</style>
