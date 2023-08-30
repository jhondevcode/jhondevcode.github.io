<script setup lang="ts">
import PageNavbar from "@components/PageNavbar.vue";

import WelcomePage from "@pages/WelcomePage.vue";
import AboutPage from "@pages/AboutPage.vue";
import SkillsPage from "@pages/SkillsPage.vue";
import ProjectsPage from "@pages/ProjectsPage.vue";
import ContactPage from "@pages/ContactPage.vue";
</script>

<template>
  <!-- Main Navbar -->
  <PageNavbar />
  
  <!-- Body pages -->
  <WelcomePage />
  <AboutPage />
  <SkillsPage />
  <ProjectsPage />
  <ContactPage />
</template>

<style scoped lang="scss">
</style>
