<script setup>
defineProps({
  team: Object,
})
</script>
<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        :disabled="team.members.length === team.spots"
      >
        Add Member (remainingSpots: {{ team.spots - team.members.length }})
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <img src="https://i.pravatar.cc/50?u=${team.name}" alt="Image" class="rounded-full mr-2" />
        {{ team.name }} Team

        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute top-0 right-0"
        >
          {{ team.spots }}
        </div>
      </h3>
    </div>
  </header>
</template>
