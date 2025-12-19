<script setup>
import { useFlash } from '@/composables/useFlash'

const flash = useFlash()
</script>

<template>
  <h1>About</h1>
  <button @click="flash('Success', 'It Works On the About Page')">Click me</button>
</template>
