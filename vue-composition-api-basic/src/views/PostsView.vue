<template>
  <div class="posts">
    <h1>Posts </h1>
    <ul>
      <li v-for='post in posts' :key="post.id" class='post-detail'>
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>

    </ul>
    <textarea v-AutoFocus></textarea>
  </div>
</template>

<script setup>
/**
 * import
 */
import { vAutoFocus } from '@/directives/vAutoFocus'
import { ref } from 'vue'
/**
 * State
 */
const posts = ref([
  { id: 'id1', title: 'Post 1' },
  { id: 'id2', title: 'Post 2' },
  { id: 'id3', title: 'Post 3' }
])
</script>

<style scoped>
ul {
  margin-bottom: 40px;
}

.post-detail {
  list-style: none;
}
</style>