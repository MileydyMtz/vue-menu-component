<script setup>
import {RouterView } from 'vue-router'
import Navigation from './components/TheNavigation.vue';
</script>

<template>

  <header>

  <Navigation/>

  </header>

  <main class="content">

  <RouterView />

  </main>  

</template>

<style>
body{
  background-color: #f0f0f0;
}
.content {
  margin-top: 120px;
}

p{
  color: blue;
  font-size: 24px;
  text-align: center;
}
</style>