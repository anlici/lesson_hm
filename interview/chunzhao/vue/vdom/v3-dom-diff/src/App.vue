<template>
  <ChildrenComponet >
    <template #header>
      <div> # 是v-slot: 简写，用了定义具名插槽</div>
    </template>
    
    <template v-slot:default="footerData">
      <div>接收并使用子组件数据- {{ footerData.message }} - {{ footerData.value }}</div>
    </template>
  </ChildrenComponet>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>