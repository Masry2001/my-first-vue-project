<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'
import AppModal from '@/components/AppModal.vue'
import { ref } from 'vue'

const teamStore = useTeamStore()
await teamStore.fill()
teamStore.modifySpots(10)

const show = ref(false)
</script>

<template>
  <TeamHeader @add="show = true" />
  <TeamMembers />
  <TeamFooter />

  <Teleport to="body">
    <AppModal :show="show" @close="show = false">
      <template #default>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </form>
      </template>
    </AppModal>
  </Teleport>
</template>
