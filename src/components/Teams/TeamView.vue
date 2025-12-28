<script setup>
import team from '@/components/Teams/team.json'
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
</script>

<template>
  <TeamHeader :team="team" />
  <TeamMembers :team="team" />
  <TeamFooter :team="team" />
</template>
