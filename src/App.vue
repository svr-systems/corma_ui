<template>
  <v-app>
    <Alert ref="alert" />
    <NavBar />

    <v-main style="height: 100vh;">
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script setup>
// Importaciones de librerías
import { ref, computed, getCurrentInstance, provide } from "vue";

// Importaciones internas del proyecto
import Alert from "@/components/Alert.vue";
import NavBar from "@/components/NavBar.vue";

// Estado y referencias
const alert = ref(null);
const app = getCurrentInstance()?.appContext.app;
const activeSection = ref('home');

// Proveedores globales
provide("alert", {
  show: (color, msg) => alert.value?.show(color, msg),
});

provide('activeSection', activeSection);
</script>

<style>
@import "@/style.css";
</style>