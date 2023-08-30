<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  words: { type: Array<String>, required: true },
  prefix: { type: String, required: false },
  step: { type: Number, default: 50 },
  wait: { type: Number, default: 2000 },
  className: { type: String }
});

const typed = ref<string>("");

onMounted(async () => {
  let start = 0;
  let end = props.words.length;

  function calcAnimationTime(word: String, step: number, wait: number) {
    return (word.length * step) + wait;
  }

  async function write(word: String) {
    return new Promise<Number>((resolve) => {
      const eta = calcAnimationTime(word, props.step, props.wait);
      let startWord = 0;
      let endWord = word.length;
      const interval = setInterval(() => {
        typed.value = typed.value.concat(word.slice(startWord, startWord + 1));
        startWord++;
        if (startWord >= endWord) {
          clearInterval(interval);
        }
      }, props.step);

      const timeout = setTimeout(() => {
        resolve(eta);
        clearTimeout(timeout);
      }, eta);
    })
  }

  while (start < end) {
    typed.value = "";
    await write(props.words[start]);
    start++;
    if (start === end) {
      start = 0;
    }
  }
});
</script>

<template>
  <div class="textwritter">
    <p class="textwritter__text" v-if="prefix">{{ $props.prefix }} {{ typed }} <span aria-hidden="true"
        class="text__cursor">|</span></p>
    <p class="textwritter__text" v-else>{{ typed }} <span aria-hidden="true" class="text__cursor">|</span></p>
  </div>
</template>

<style scoped lang="scss">
.textwritter {
  margin-top: 1rem;
  display: flex;
  align-items: center;

  .textwritter__text {
    font-weight: bold;
    font-size: 2.5rem;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    .text__cursor {
      color: #ffffff;
      font-size: 2.5rem;
      opacity: 1;
      animation: blink-cursor 1s steps(2) infinite;
    }
  }
}

@keyframes blink-cursor {
  0% {
    opacity: 0;
  }
}
</style>
