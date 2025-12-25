<script setup>
defineProps({
  name: String,
  email: String,
  status: String,
})
</script>

<template>
  <tr class="bg-gray-100 px-12">
    <td class="text-xl font-mdedium flex items-center gap-x-4 px-6 py-4">
      <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="image" class="rounded-xl" />
      {{ name }}
    </td>

    <td class="text-gray-500 px-6 py-4">{{ email }}</td>

    <td class="px-6 py-4">
      <button class="bg-blue-500 text-white text-sm px-4 py-2 rounded">{{ status }}</button>
    </td>
  </tr>
</template>
