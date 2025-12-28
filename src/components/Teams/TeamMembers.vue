<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue'

defineProps({
  team: Object,
})
</script>
<template>
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <table>
      <thead>
        <tr>
          <th class="text-left px-6 py-4">Name</th>
          <th class="text-left px-6 py-4">Email</th>
          <th class="text-left px-6 py-4">Status</th>
        </tr>
      </thead>
      <tbody>
        <TeamMember
          v-for="member in team.members"
          :key="member.id"
          :name="member.name"
          :email="member.email"
          :status="member.status"
        />
      </tbody>
    </table>

    <p v-if="team.members.length === team.spots" class="text-gray-500 italic text-center">
      There are no remaining team spots. Upgrade to add more
    </p>
  </div>
</template>
