<template>
	<teleport to=".modals-container">
		<div v-if='showVModal' class="modal">
			<h1>{{ title }}</h1>
			<slot />
			<button @click="$emit('update:showVModal', false)">Hide modal</button>
		</div>
	</teleport>
</template>

<script setup>
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

defineEmits(['update:showVModal'])
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
