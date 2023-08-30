<script setup lang="ts">
defineProps({ title: { type: String, required: true }, subtitle: { type: String } });
</script>

<template>
  <div class="page__title">
    <h2>{{ $props.title }}</h2>
    <h3 v-if="$props.subtitle">{{ $props.subtitle }}</h3>
  </div>
</template>

<style scoped lang="scss">
.page__title {
  color: #fff;
}
</style>
