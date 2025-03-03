<template>
  <div class="container" ref="containerRef">
    <div class="home">
      <div class="content">
        <div class="words">选择车身颜色</div>
        <div class="select">
          <div class="select-item" 
            v-for="(item,index) in colors" 
            :key="index"
            @click="selectColor(item.color)"
            >
            <div class="select-item-color" :style="{background:item.color}"></div>
            <div class="select-item-color-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const containerRef = ref<HTMLElement | null>(null); // 响应式dom 元素
// 车颜色
let colors = [
  {
    name: "冷光银",
    color: "#424449"
  },
  {
    name: "经典黑",
    color: "black"
  },
  {
    name: "深海蓝",
    color: "#000f4a"
  },
  {
    name: "中国红",
    color: "#bd050f"
  },
  {
    name: "珍珠白",
    color: "white"
  }
];
onMounted(() => {
  console.log(containerRef.value);
})


let selectColor = (color: string) => {
  console.log(color);
}

</script>

<style less="stylus" scoped>

</style>