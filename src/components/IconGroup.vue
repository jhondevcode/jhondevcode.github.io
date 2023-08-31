<script setup lang="ts">
defineProps({
  header: {
    type: String,
    required: true,
  },
  columns: {
    type: Number,
    required: false,
    default: 3,
  },
});
</script>

<template>
  <div class="icon__group">
    <span class="group__header">{{ $props.header }}</span>
    <div class="group__icons" :style="{gridTemplateColumns: `repeat(${$props.columns}, 1fr)`}">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon__group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .group__header {
    color: #fff;
  }

  .group__icons {
    display: grid;
    gap: .5rem;
  }
}
</style>
