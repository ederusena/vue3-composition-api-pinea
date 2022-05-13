<template>
  <div class="home">
    <h3 ref="appTitleRef">{{ appTitle }}</h3>
    <h4>{{ counterData.title }}</h4>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter title:</h4>
      <input v-model="counterData.title" type="text" v-AutoFocus />
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
import { useCounter } from "@/use/useCounter";
import { vAutoFocus } from "@/directives/vAutoFocus";

/**
 * data
 */
const appTitle = "My Awesome App";
const appTitleRef = ref(null);

/**
 * counter Composable Hook
 */
 const {
  counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  } = useCounter();

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
