<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
  <transition name="fade">
    <div class="modal-mask" v-if="show">
      <div class="modal-content">
        <header>
          <slot name="header"> Add Member </slot>
        </header>
        <div>
          <slot name="default"> default content </slot>
        </div>
        <footer class="border-t border-gray-200 pt-2">
          <slot name="footer">
            <div class="flex justify-end gap-2">
              <button
                class="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
                @click="$emit('close')"
              >
                Close
              </button>
              <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                @click="$emit('add')"
              >
                Add
              </button>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 80vw;
  max-width: 600px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
