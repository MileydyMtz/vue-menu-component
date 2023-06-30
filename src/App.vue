<script setup>
import {RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <header>
  <TheNavbar/>
  </header>
  <div class="content">
  <RouterView />
  </div>
  
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