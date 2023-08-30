<script setup lang="ts">
import { ref } from 'vue';
import NavbarBuger from './NavbarBuger.vue';

const visible = ref<boolean>(false);

function toggle() {
  visible.value = !visible.value;
}
</script>

<template>
  <nav class="navbar">
    <header class="navbar__header">Jhon</header>
    <div class="navbar__links" :class="visible ? 'navbar__links--visible': 'navbar__links--hidden'">
      <a class="link" href="#home" @click="toggle()">{{ $t('navbar.home') }}</a>
      <a class="link" href="#about" @click="toggle()">{{ $t('navbar.about') }}</a>
      <a class="link" href="#skills" @click="toggle()">{{ $t('navbar.skills') }}</a>
      <a class="link" href="#projects" @click="toggle()">{{ $t('navbar.projects') }}</a>
      <a class="link" href="#contact" @click="toggle()">{{ $t('navbar.contact') }}</a>
    </div>
    <NavbarBuger class="navbar__burger" @click="visible = !visible"></NavbarBuger>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background-color: transparent;
  padding: 1rem 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .navbar__header {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    user-select: none;
    color: #33a5f1;
  }

  .navbar__links {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;

    .link {
      position: relative;
      font-family: Roboto, Arial, Helvetica, sans-serif;
      text-decoration: none;
      color: #ffffff;
      transition: .25s ease-in;
      font-weight: 600;

      &:hover {
        color: #33a5f1;
        transform: scale(1.2);
      }
    }
  }

  .navbar__burger {
    display: none;
  }
}

@media only screen and (max-width: 720px) {
  .navbar {
    padding: 1rem;

    .navbar__header {
      z-index: 1;
    }

    .navbar__links {
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      width: 100%;
      background-color: #2c2c2c;
      flex-flow: column nowrap;
      gap: .25rem;
      padding: 3.25rem 0 0 0;
      transition: transform .25s ease-in;

      &.navbar__links--visible {
        transform: translateY(0);
      }

      &.navbar__links--hidden {
        transform: translateY(-100%);
      }
      
      .link {
        padding: .5rem 1rem;

        &:hover {
          color: #33a5f1;
          background-color: #1b1b1b;
          transform: scale(1);
        }
      }
    }

    .navbar__burger {
      display: block;
    }
  }
}
</style>
