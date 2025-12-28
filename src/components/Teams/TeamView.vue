<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'

const teamStore = useTeamStore()
teamStore.fill()
setTimeout(() => {
  teamStore.modifySpots(10)
}, 5000)
</script>

<template>
  <TeamHeader />
  <TeamMembers />
  <TeamFooter />
</template>
