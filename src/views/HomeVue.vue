<script setup>
import TeamView from '@/components/Teams/TeamView.vue'
</script>

<template>
  <Suspense>
    <!-- Main content -->
    <TeamView />

    <!-- Loading state -->
    <template #fallback>
      <p>Loading team data...</p>
    </template>
  </Suspense>
</template>
