<template>
	<div class="modals">
		<h1>Modals</h1>
		<button @click="showModal = true">Show modal</button>
		<Modal v-if="showModal">
    <template v-slot:title>My new Slot title</template>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi
				numquam ducimus itaque qui fugiat odio recusandae error suscipit ipsum!
				Doloremque aliquid ab recusandae nostrum quaerat dolor, quod corrupti
				accusamus?
			</p>
		</Modal>
	</div>
</template>

<script setup>
/**
 * imports
 */
import { ref } from 'vue';
import Modal from '@/views/Modal.vue';

/**
 * modals
 */
const showModal = ref(false);
</script>
