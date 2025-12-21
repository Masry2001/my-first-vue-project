<script setup>
import TabAbleTextarea from '@/components/TabAbleTextarea.vue'
import { ref } from 'vue'
let comment = ref('test value')
</script>

<template>
  <form action="">
    <TabAbleTextarea style="width: 100%; height: 300px" v-model="comment" />
  </form>
</template>
