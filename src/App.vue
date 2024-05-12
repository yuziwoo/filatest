<script setup lang="ts">
import AppHeader from './components/common/header/AppHeader.vue'
</script>

<template>
  <app-header />

  <main id="content">
    <RouterView />
  </main>
</template>

<style scoped></style>
