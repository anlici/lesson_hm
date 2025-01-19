<template>
  <div>
    <ul>
      <li v-for="(repo,index) in repos" key="{repo.id}">{{repo.name}}</li>
    </ul>

  </div>
</template>

<script setup>
const repos = [
    {
        id:1,
        name:'lesson_hm'
    },
    {
        id:2,
        name:'lesson_hm2 '
    },
    {
        id:3,
        name:'lesson_hm3'
    }
  ]
</script>

<style scoped>

</style>