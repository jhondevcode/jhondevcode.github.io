<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <header class="navbar__header">Jhon</header>
    <div class="navbar__links">
      <a class="link" href="#home">{{ $t('navbar.home') }}</a>
      <a class="link" href="#about">{{ $t('navbar.about') }}</a>
      <a class="link" href="#skills">{{ $t('navbar.skills') }}</a>
      <a class="link" href="#projects">{{ $t('navbar.projects') }}</a>
      <a class="link" href="#contact">{{ $t('navbar.contact') }}</a>
    </div>
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
    flex-flow: row;
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
}
</style>
