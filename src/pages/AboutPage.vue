<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue';
</script>

<template>
  <div id="about" class="page page__about">
    <PageHeader :title="$t('about.title')" :subtitle="$t('about.subtitle')" />
  </div>
</template>

<style scoped lang="scss">
.page__about {
  background-color: rgb(15, 15, 15);

  .about__header {
    .header__card {
      width: 2rem;
      height: 2rem;
      border-radius: .25rem;
      background-color: #22282B;

      .fa-solid {
        margin: 0 auto;
      }
    }
    .header__text {}
  }
}
</style>
