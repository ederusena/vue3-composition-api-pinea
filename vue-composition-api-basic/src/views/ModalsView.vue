<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = true">Show modal</button>
		<Modal @hideModal="showModal = false" v-if="showModal" title="My props title">
			<!-- <template v-slot:title>My new Slot title</template> -->
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi</p>
		</Modal>

    <button @click="showVModal = true">Show modal</button>
    <ModalVModel v-model:show-v-modal="showVModal" title="My props title">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi</p>
		</ModalVModel>
	</div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from 'vue';
import Modal from '@/views/Modal.vue';
import ModalVModel from '@/views/ModalVModel.vue';

/**
 * modals
 */
const showModal = ref(false);
const showVModal = ref(false);
</script>
