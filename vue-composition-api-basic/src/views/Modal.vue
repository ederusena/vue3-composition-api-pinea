<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title" /></h1>
      <slot />
      <!-- <pre>{{ slots.title() }}</pre> -->
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
/**
 * imports
 */
// import { useSlots } from 'vue'

// const slots = useSlots()

</script>
<style>
.modal {
  background: var(--color-background);
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
