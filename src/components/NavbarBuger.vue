<script setup lang="ts">
import { ref } from "vue";

defineProps({ class: { type: String } });
const emits = defineEmits(["click"]);

const state = ref<boolean>(false);

function onClick() {
  state.value = !state.value;
  emits("click", state.value);
}
</script>

<template>
  <span :class="$props.class">
    <button class="burger" @click="onClick()">
      <div class="burger__line" :class="state ? 'burger__line--enabled': 'burger__line--disabled'"></div>
      <div class="burger__line" :class="state ? 'burger__line--enabled': 'burger__line--disabled'"></div>
      <div class="burger__line" :class="state ? 'burger__line--enabled': 'burger__line--disabled'"></div>
    </button>
  </span>
</template>

<style scoped lang="scss">
.burger {
  position: relative;
  width: 2rem;
  height: 2rem;
  border:  none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .25rem;
  padding: .25rem;
  border-radius: .25rem;
  transition: background-color .25s ease-in;

  .burger__line {
    background-color: #fff;
    height: 3px;
    border-radius: 2px;
    transition: transform .5s, opacity .25s;

    &.burger__line--enabled {
      width: 1.75rem;
      position: absolute;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }
      
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }

    &.burger__line--disabled {
      width: 1.5rem;

      &:nth-child(1) {
        transform: rotate(0deg);
      }

      &:nth-child(2) {
        opacity: 1;
      }
      
      &:nth-child(3) {
        transform: rotate(0deg);
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
