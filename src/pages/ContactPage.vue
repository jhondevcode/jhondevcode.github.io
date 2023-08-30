<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue';
</script>

<template>
  <div id="contact" class="page page__contact">
    <PageHeader :title="$t('contact.title')"/>
  </div>
</template>

<style scoped lang="scss">
.page__contact {
  background-color: rgb(30, 30, 30);
}
</style>
