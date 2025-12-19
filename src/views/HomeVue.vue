<script>
import flash from '@/mixins/flash'
export default {
  mixins: [flash],
}
</script>

<template>
  <h1>Home</h1>
  <button @click="flash('Success', 'It Works On the Home Page')">Click me</button>
</template>
