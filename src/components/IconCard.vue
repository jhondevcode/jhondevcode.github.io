<script setup lang="ts"></script>

<template>
  <div class="icon__card flex flex-row justify-content-center align-items-center">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.icon__card {
  display: inline-flex;
  padding: .5rem;
  border-radius: .25rem;
  background-color: #1e1e1e;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}
</style>
