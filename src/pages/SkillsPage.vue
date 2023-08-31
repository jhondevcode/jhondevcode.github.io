<script setup lang="ts">
import {
  siHtml5,
  siCss3,
  siJavascript,
  siAngular,
  siReact,
  siVuedotjs,
  siNuxtdotjs,
  siSvelte,
  siSolid,
  siSass,
  siVuetify,
  siIonic,
  siFlutter,
  
  siNodedotjs,
  siLaravel,
  siNestjs,
  siDjango,
  siFastapi,
  siDotnet,
  siRubyonrails,
  siSpring,
  
  siPython,
  siGo,
  siPhp,
  siCsharp,
  siDart,
  siRuby,
  siKotlin,

  siDocker,
  siKubernetes,
  siGooglecloud,
  siAmazonaws,
  siDynatrace,
  siGrafana,
  siPrometheus,
  siJira,
  siBitbucket,
  siGithub,
  siGitlab
} from "simple-icons";
import PageHeader from '@components/PageHeader.vue';
import IconCard from '@components/IconCard.vue';
import IconGroup from '@components/IconGroup.vue';
</script>

<template>
  <div id="skills" class="page page__skills">
    <PageHeader :title="$t('skills.title')" :subtitle="$t('skills.subtitle')" />
    <div class="skills__icons">
      <IconGroup header="Frontend Development" :columns="5">
        <IconCard :icon="siHtml5" color="#fff" />
        <IconCard :icon="siCss3" color="#fff"/>
        <IconCard :icon="siJavascript" />
        <IconCard :icon="siAngular" color="#fff" />
        <IconCard :icon="siReact" />
        <IconCard :icon="siVuedotjs" />
        <IconCard :icon="siSvelte" />
        <IconCard :icon="siNuxtdotjs" />
        <IconCard :icon="siSolid" color="#fff" />
        <IconCard :icon="siSass" color="#fff" />
        <IconCard :icon="siVuetify" color="#fff" />
        <IconCard :icon="siIonic" color="#fff" />
        <IconCard :icon="siFlutter" color="#fff" />
      </IconGroup>
      <IconGroup header="Backend Frameworks" :columns="3">
        <IconCard :icon="siDotnet" color="#fff" />
        <IconCard :icon="siNodedotjs" color="#fff" />
        <IconCard :icon="siNestjs" color="#fff" />
        <IconCard :icon="siDjango" color="#fff" />
        <IconCard :icon="siFastapi" color="#fff" />
        <IconCard :icon="siSpring" color="#fff" />
        <IconCard :icon="siLaravel" color="#fff" />
      </IconGroup>
      <IconGroup header="Programing Languages" :columns="3">
        <IconCard :icon="siJavascript" />
        <IconCard :icon="siPython" color="#fff" />
        <IconCard :icon="siGo" />
        <IconCard :icon="siPhp" />
        <IconCard :icon="siCsharp" color="#fff" />
        <IconCard :icon="siDart" color="#fff" />
        <IconCard :icon="siKotlin" />
      </IconGroup>
      <IconGroup header="Cloud Tools" :columns="4">
        <IconCard :icon="siDocker" color="#fff" />
        <IconCard :icon="siKubernetes" color="#fff" />
        <IconCard :icon="siGooglecloud" />
        <IconCard :icon="siAmazonaws" color="#F69118" />
        <IconCard :icon="siDynatrace" />
        <IconCard :icon="siGrafana" />
        <IconCard :icon="siPrometheus" />
        <IconCard :icon="siJira" color="#fff" />
        <IconCard :icon="siBitbucket" color="#fff" />
        <IconCard :icon="siGithub" bgColor="#ddd" />
        <IconCard :icon="siGitlab" color="#fff" />
      </IconGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page__skills {
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .skills__icons {
    display: grid;
    gap: 1rem;
    grid-auto-rows: auto;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  }
}
</style>
