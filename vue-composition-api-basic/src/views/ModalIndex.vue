<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal
      @hideModal="showModal = false"
      v-if="showModal"
      title="My props title"
    >
      <!-- <template v-slot:title>My new Slot title</template> -->
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi
      </p>
    </Modal>

    <div class="show-dark-modals">
      <label>Show dark modals!</label>
      <input type="checkbox" v-model="showDarkModals" />
      <br />
    </div>

    <button @click="showVModal = true">Show modal</button>
    <component
      :is="showDarkModals ? ModalVModelDark : ModalVModel"
      v-model:show-v-modal="showVModal"
      title="My props title"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi
      </p>
    </component>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalVModel from "@/components/ModalVModel.vue";
import ModalVModelDark from "@/components/ModalVModelDark.vue";

/**
 * modals
 */
const showModal = ref(false);
const showVModal = ref(false);
const showDarkModals = ref(false);

</script>

<style scoped>
.show-dark-modals {
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
