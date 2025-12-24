<script setup>
import { useCounterStore } from '@/stores/CounterStore'

const counter = useCounterStore()
</script>

<template>
  <p>{{ counter.count }}</p>
</template>
