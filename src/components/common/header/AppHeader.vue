<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import path from '@/constants/path'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <router-link :to="path.root.PATH"><icon-logo /></router-link>
    </div>

    <nav class="gnb">
      <ul>
        <li>
          <p class="gnb__list">WOMEN</p>
        </li>
        <li>
          <p class="gnb__list">MEN</p>
        </li>
        <li>
          <p class="gnb__list">KIDS</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  z-index: var(--z-index--header);
  width: 100%;
  left: 0;
  top: 0;
  padding: 30px 40px;
}

.logo {
  width: 86px;
}

.logo a {
  display: block;
  width: 100%;
  transition: opacity 0.15s;
}

.logo a:hover {
  opacity: 0.7;
}

.logo a svg {
  width: 100%;
}

.gnb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.gnb ul {
  display: flex;
}

.gnb ul li {
  margin-right: 30px;
  cursor: pointer;
}

.gnb ul li:last-child {
  margin-right: 0;
}

.gnb ul li .gnb__list {
  font-size: 18px;
  font-weight: 700;
}

.gnb ul li:hover .gnb__list {
  text-decoration: underline;
}
</style>
