<script setup>
defineProps({
  member: Object,
})
</script>

<template>
  <tr class="bg-gray-100 px-12 hover:bg-gray-200 cursor-pointer">
    <td class="text-xl font-mdedium flex items-center gap-x-4 px-6 py-4">
      <img :src="`https://i.pravatar.cc/50?u=${member.email}`" alt="image" class="rounded-xl" />
      {{ member.name }}
    </td>

    <td class="text-gray-500 px-6 py-4">{{ member.email }}</td>

    <td class="px-6 py-4">
      <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded">{{ member.status }}</button>
    </td>
  </tr>
</template>
