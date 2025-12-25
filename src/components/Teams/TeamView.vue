<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue'
</script>

<template>
  <div class="place-self-center flex flex-col gap-y-3">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <TeamMember name="Sarah Doe" email="sa@gmail.com" status="Active" />
      </tbody>
    </table>
  </div>
</template>
