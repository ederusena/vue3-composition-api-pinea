<template>
  <div class="home">
    <h3 ref="appTitleRef">{{ appTitle }}</h3>
    <h4>{{ counterData.title }}</h4>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter title:</h4>
      <input v-model="counterData.title" type="text" v-AutoFocus />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted
} from "vue";

import { vAutoFocus } from "@/directives/vAutoFocus";
const appTitle = "My Awesome App";

const counterData = reactive({
  count: 0,
  title: "My counter",
});

const appTitleRef = ref(null);

watch(
  () => counterData.count,
  (newCount, oldCount) => {
    if (newCount === 20) {
      alert("20 is the limit!");
    }
  }
);

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? "even" : "odd";
});

const increaseCounter = () => counterData.count++;
const decreaseCounter = () => counterData.count--;

// onBeforeMount(() => {
//   console.log('before mount')
// })

// onMounted(() => {
//   console.log('mounted')
// })

// onBeforeUnmount(() => {
//   console.log('before unmount')
// })

// onUnmounted(() => {
//   console.log('unmounted')
// })

// onActivated(() => {
//   console.log('activated')
// })

// onDeactivated(() => {
//   console.log('deactivated')
// })

// onBeforeUpdate(() => {
//   console.log('before update')
// })

// onUpdated(() => {
//   console.log('updated')
// })

// /*
//   Directives
// */
// const vAutoFocus = {
//   mounted(el) {
//     el.focus()
//   }
// }
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 40px;
}
</style>
