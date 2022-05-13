import { reactive, computed, watch, nextTick, onMounted } from "vue";

export function useCounter() {

  const counterData = reactive({
    count: 0,
    title: "My counter",
  });

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      if (newCount === 20) {
        alert("20 is the limit!");
      }
    }
  );

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? "even" : "odd";
  });

  const increaseCounter = async (amount = 1, e) => {
    counterData.count += amount;
    await nextTick(() => {
      console.log("Next tick! -> So something whencounter has updated in the dom");
    })
  }

  const decreaseCounter = () => counterData.count--;

  onMounted(() => {
    console.log("Counter mounted!");
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}