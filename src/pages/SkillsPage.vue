<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue';
import IconCard from '@components/IconCard.vue';
import IconGroup from '@components/IconGroup.vue';

import IconHTML from '@icons/IconHTML.vue';
import IconJavaScript from '@icons/IconJavaScript.vue';

import IconReact from '@icons/IconReact.vue';
import IconVue from '@icons/IconVue.vue';

import IconPython from '@icons/IconPython.vue';
import IconGolang from '@icons/IconGolang.vue';
import IconDart from '@icons/IconDart.vue';
</script>

<template>
  <div id="skills" class="page page__skills">
    <PageHeader :title="$t('skills.title')" :subtitle="$t('skills.subtitle')" />
    <IconGroup header="Web Group">
      <IconCard><IconHTML /></IconCard>
      <IconCard>Hello</IconCard>
      <IconCard><IconJavaScript /></IconCard>
    </IconGroup>
    <IconGroup header="Web Frameworks">
      <IconCard><IconReact /></IconCard>
      <IconCard><IconVue /></IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
    </IconGroup>
    <IconGroup header="Backend Frameworks" :columns="3">
      <IconCard><IconPython /></IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
    </IconGroup>
    <IconGroup header="Programing Languages">
      <IconCard><IconGolang /></IconCard>
      <IconCard><IconDart /></IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
      <IconCard>Hello</IconCard>
    </IconGroup>
  </div>
</template>

<style scoped lang="scss">
.page__skills {
  background-color: rgb(20, 20, 20);
  display: grid;
  gap: 1rem;
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
}
</style>
