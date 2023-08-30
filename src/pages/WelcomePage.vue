<script setup lang="ts">
import { ref } from "vue";
import TextWritter from '@components/TextWritter.vue';
import { useLangStore } from "@stores/lang";
import dict from "@i18n/index";


const { $state } = useLangStore();
const words = ref<Array<String>>([]);

if ($state.currentLang === 'es') {
  words.value = dict.es.home.words;
} else {
  words.value = dict.en.home.words;
}
</script>

<template>
  <div id="home" class="page page__welcome flex flex-row justify-content-center align-items-center">
    <div class="welcome__content flex flex-column align-items-center gap-5">
      <img class="content__image" src="/profile.jpeg" />
      <div class="content__description flex flex-column align-items-center gap-1">
        <TextWritter :words="words" :step="100" :wait="3000" />
        <!-- <h1 class="description__name">{{ $t('home.name') }}</h1> -->
        <h2 class="description__info">{{ $t('home.description') }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page__welcome {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url("./public/background-home.jpg") center center/cover no-repeat;

  .welcome__content {
    .content__image {
      max-height: 10rem;
      border-radius: 50%;
      border: .5rem solid #0465a5;
      box-shadow: 0 0 0 1.5rem rgba(4, 101, 165, 0.3);
    }

    .content__description {
      color: #DCDDE1;
      text-align: center;

      .description__info {
        font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
