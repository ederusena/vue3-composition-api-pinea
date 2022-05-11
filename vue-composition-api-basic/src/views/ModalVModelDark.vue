<template>
	<teleport to=".modals-container">
		<div v-if='showVModal' class="modal-dark">
			<h1>{{ title }}</h1>
			<slot />
			<button @click="$emit('update:showVModal', false)">Hide modal</button>
		</div>
		{{ userState.username }}
	</teleport>
</template>

<script setup>
/**
 * import
 */
import { inject } from 'vue'

/**
 * props
 */
defineProps({
  showVModal: {
    type: Boolean,
    default: false,
  },
	title: {
		type: String,
		default: 'default title',
	},
});

/**
 * inject
 */
const userState = inject('userState')

/**
 * emits
 */
defineEmits(['update:showVModal'])
</script>

<style>
.modal-dark {
	background: var(--vt-c-black-soft);
	color: var(--vt-c-white-soft);
	padding: 10px;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>