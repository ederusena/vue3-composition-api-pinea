<template>
	<teleport to=".modals-container">
		<div class="modal">
			<h1>{{ title }}</h1>
			<!-- <h1><slot name="title" /></h1> -->
			<slot />
			<!-- <pre>{{ slots.title() }}</pre> -->
			<!-- <button @click="$emit('hideModal')">Hide modal</button> -->
			<button @click="handleButtonClick">Hide modal</button>
		</div>
	</teleport>
</template>

<script setup>
/**
 * imports
 */
// import { useSlots } from 'vue'

// const slots = useSlots()

/**
 * props
 */
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
	title: {
		type: String,
		default: 'default title',
	},
});

/**
 * emits
 */
const emit = defineEmits(['hideModal'])

/**
 * methods
 */
const handleButtonClick = () => {
  emit('hideModal')
}


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
