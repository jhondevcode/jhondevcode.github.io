<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue';
</script>

<template>
  <div id="projects" class="page page__projects">
    <PageHeader :title="$t('projects.title')" :subtitle="$t('projects.subtitle')" />
  </div>
</template>

<style scoped lang="scss">
.page__projects {
  background-color: rgb(25, 25, 25);
}
</style>
