<script setup>
defineProps({
  modelValue: String,
})

defineEmits(['update:modelValue'])

function onTabDown(e) {
  let t = e.target
  let val = t.value
  let start = t.selectionStart
  let end = t.selectionEnd

  t.value = val.substring(0, start) + '\t' + val.substring(end)
  t.selectionStart = t.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabDown($event)"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
