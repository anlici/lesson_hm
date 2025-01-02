<script setup>
import { ref, computed } from 'vue'
import LifecycleComponent from './components/LifecycleComponent.vue'

const width = ref(100)
const change = () => {
  width.value += 100
}

const count = ref(0)
const showComponent = ref(true) // 组件显示状态
// 包装成响应式对象
const toggleComponent = () => {
  showComponent.value = !showComponent.value
}

const incrementCount = () => {
  count.value++
}
</script>

<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="incrementCount">increment count</button>
    <p>Count: {{ count }}</p>

    <transition name="fade" >
    <!-- v-show 不会dom移除，而是修改display，条件渲染，属性绑定，传参 -->
       <LifecycleComponent v-if="showComponent" :count="count" />
    </transition >

  <!-- 内置组件 -->
    <transition name="fade">
       <p v-if="showComponent">你好 vue transition</p>
    </transition>

     <!-- 动态样式  -->
    <div class="box1" :style="{width:width+'px'}"></div>
    <button @click="change">click</button>

  </div>
</template>

<style scoped>
.box1 {
  background-color: #d88986;
  height: 100px;
  transition:width 3s  ease-in-out;
  /* 动画 animation */
}
/* 定义淡入淡出的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue < 2.1.8 */ {
  opacity: 0;
}
</style>
