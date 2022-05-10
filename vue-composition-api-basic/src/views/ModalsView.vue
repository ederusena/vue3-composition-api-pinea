<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <teleport to='.modals-container'>
      <div v-if='showModal' class="modal">
        <h1>This is a modal</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi numquam ducimus itaque qui fugiat odio recusandae error suscipit ipsum! Doloremque aliquid ab recusandae nostrum quaerat dolor, quod corrupti accusamus?</p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
/**
 * imports
 */
import {ref} from 'vue';

/**
 * modals
 */
const showModal = ref(false);

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>