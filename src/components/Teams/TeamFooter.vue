<script setup>
import { useTeamStore } from '@/stores/TeamStore'
const teamStore = useTeamStore()
</script>

<template>
  <footer class="mt-2 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ teamStore.name }} - {{ teamStore.spots }} Member Team</h5>
  </footer>
</template>
