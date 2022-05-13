<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-detail">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-AutoFocus />
    <div>
      <button @click="increaseCounter(1)" :class="['counter-button', {'yellow' : oddOrEven === 'odd'}]">
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
/**
 * import
 */
import { vAutoFocus } from "@/directives/vAutoFocus";
import { useCounter } from "@/use/useCounter";
import { ref } from "vue";

/**
 * State
 */

const posts = ref([
  { id: "id1", title: "Post 1" },
  { id: "id2", title: "Post 2" },
  { id: "id3", title: "Post 3" },
]);
/**
 * Counter Button
 */
const {
  counterData,
  increaseCounter,
oddOrEven
} = useCounter();

</script>

<style scoped>
.counter-button {
  padding: 15px 25px;
  font-size: 24px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.counter-button.yellow {
  padding: 15px 25px;
  font-size: 24px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #991b1b;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}


/* .counter-button:hover {
  background-color: #3e8e41;
} */

.counter-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

ul {
  margin-bottom: 40px;
}
.post-detail {
  list-style: none;
}
</style>