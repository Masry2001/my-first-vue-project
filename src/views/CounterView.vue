<script setup>
import { useCounterStore } from '@/stores/CounterStore'

const counter = useCounterStore()
</script>

<template>
  <h1>Counter</h1>
  <p>{{ counter.count }}</p>
  <button @click="counter.increment" :disabled="!counter.remaining">Increment</button>
  <p v-if="counter.remaining">Remaining: {{ counter.remaining }}</p>
</template>
