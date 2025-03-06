<!-- <template>

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
          <div class="words">选择贴膜材质</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

// 渲染器 canvas
const renderer = new THREE.WebGLRenderer({
  antialias: true,
})

renderer.setSize(
  window.innerWidth*0.8
  , window.innerHeight*0.8
)
// 场景
const scene = new THREE.Scene();
const canvas = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight, // 宽高比，横着
  0.1, // 近一点
  1000
)
const render = () => {
  renderer.render(scene,canvas); // 渲染场景
  // 轮询 电脑刷新频率 16ms 60hz
  requestAnimationFrame(render); // 渲染动画,重复
}
// canvus 挂载点
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
  containerRef.value?.appendChild(renderer.domElement);
  renderer.setClearColor("#000");
  scene.background = new THREE.Color("#fff");
  scene.environment = new THREE.Color("#fff");
  render(); // 渲染
  const loader = new THREE.GLTFLoader()
  console.log(containerRef.value);
})

let selectColor = (color: string) => {
  console.log(color);
}

</script>

<style less="stylus" scoped>
.home {
  display: flex;
  .content-box {
    margin: 10px ;
  }
}
</style> -->

<template>
  <div>
    <Childrenone :msg1="msg1" :msg2="msg2"></Childrenone>
    <ParentOne></ParentOne>
    <ExposeParent />
    <VModelParent />
    <ProvideParent />
  </div>
</template>

<script  name="App">
import Childrenone from './components/Childrenone.vue';
import ParentOne from './components/ParentOne.vue';
import ExposeParent  from './components/ExposeParent.vue';

import VModelParent from './components/VModelParent.vue';
import ProvideParent from './components/ProvideParent.vue';


export default {
  data() {
    return {
      msg1:'传给子组件的信息1'
    }
  },
  setup() {
    const msg2 = '传给子组件的信息2'
    return {
      msg2
    }
  },
  components: {
    Childrenone,
    ParentOne,
    ExposeParent,
    VModelParent,
    ProvideParent
  }

}
</script>

<style scoped>

</style>