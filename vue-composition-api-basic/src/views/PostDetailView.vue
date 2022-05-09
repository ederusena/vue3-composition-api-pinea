<template>
	<div class="post-details">
		<h1>This is a post page!</h1>
		<p>Display the content of the post with ID of {{ $route.params.id }} here!</p>
		<div>
			<button @click="showPostId">Show id!</button>
		</div>
		<div>
			<button @click="goHomeIn3Seconds">Go home in 3 seconds!</button>
		</div>
		<p><RouterLink to="/posts">&lt; Back!</RouterLink></p>
	</div>
</template>

<script setup>
/**
 * import
 */
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

/**
 * methods
 */
const showPostId = () => {
	alert(route.params.id);
};

// const goHomeIn3Seconds = () => {
// 	setTimeout(() => {
// 		router.push('/');
// 	}, 3000);
// };
const goHomeIn3Seconds = () => {
	setTimeout(() => {
		router.push({ name: 'home' });
	}, 3000);
};

</script>
