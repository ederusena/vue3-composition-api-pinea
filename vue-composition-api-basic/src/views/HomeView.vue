<template>
  <div class="home">
    <h3 ref="appTitleRef">{{ appTitle }}</h3>
    <h4>{{ counter.title }}</h4>
    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>

      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven  }}</p>
    <div class="edit">
      <h4>{{ counter.title }}:</h4>
      <input v-model='counter.title' type="text" v-AutoFocus />
    </div>
  </div>
</template>

<script setup>
/**
 * imports
 */
import {
  ref,
  onMounted,
} from "vue";
import { vAutoFocus } from "@/directives/vAutoFocus";
import { useCounterStore } from "@/stores/counter";
/**
 * useCounterStore
 */
const counter = useCounterStore();

/**
 * data
 */
const appTitle = "My Awesome App";
const appTitleRef = ref(null);

/**
 * life cycle hooks
 */
onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

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
