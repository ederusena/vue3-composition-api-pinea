<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li class='post-detail'>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>

      <li class='post-detail'>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>

      <li class='post-detail'>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul>
    <textarea v-AutoFocus></textarea>
  </div>
</template>

<script setup>

import { vAutoFocus } from '@/directives/vAutoFocus'
</script>

<style scoped>
ul {
  margin-bottom: 40px;
}

.post-detail {
  list-style: none;
}
</style>