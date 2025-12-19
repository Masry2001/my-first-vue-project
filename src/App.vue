<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

let message = ref('hello world')
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
    <p>{{ message }}</p>
    <input type="text" v-model="message" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

nav a.router-link-active {
  color: #35495e;
  text-decoration: underline;
}

main {
  padding: 1rem 0;
}
</style>
