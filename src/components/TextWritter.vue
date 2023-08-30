<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Typed from 'typed.js';

const props = defineProps({
  words: { type: Array<string>, required: true },
  prefix: { type: String, required: false },
  step: { type: Number, default: 50 },
  wait: { type: Number, default: 2000 },
  className: { type: String }
});

const writter = ref<any>();

onMounted(() => {
  const options = {
    strings: props.words,
    typeSpeed: props.step,
    backSpeed: props.step / 4,
    backDelay: props.wait,
    startDelay: props.wait,
    loop: true,
  };
  new Typed(writter.value, options);
});
</script>

<template>
  <div class="textwritter">
    <span ref="writter"></span>
  </div>
</template>

<style scoped lang="scss">
.textwritter {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2.1rem;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}
</style>
