<script setup lang="ts">
const props = defineProps({
  icon: { required: false },
  bgColor: { type: String, required: false },
  color: { type: String, required: false, default: '' }
});
</script>

<template>
  <div class="icon__card" :style="{ backgroundColor: !$props.bgColor ? `#${$props.icon.hex}` : $props.bgColor }">
    <svg class="card__svg" :fill="$props.color" role="img" view-box="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path :d="$props.icon.path"></path>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.icon__card {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  border-radius: .25rem;
  background-color: #1e1e1e;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  .card__svg {
    max-width: 24px;
    max-height: 24px;
  }
}
</style>
