<script setup>
import { useStorage } from '../composables/useStorage'

const name = useStorage('UserName')
const age = useStorage('UserAge')
</script>

<template>
  <p>what is your name?</p>
  <input type="text" v-model="name" />

  <p>what is your age?</p>
  <input type="number" v-model="age" />
</template>
