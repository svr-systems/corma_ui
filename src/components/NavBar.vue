<template>
  <div>
    <v-app-bar density="compact" :elevation="2" color="grey-darken-3">
      <v-toolbar-title>
        <v-img
          :src="'data:' + logoUrl.ext + ';base64,' + logoUrl.b64"
          max-height="60"
          max-width="150"
          contain
        />
      </v-toolbar-title>
      <v-spacer />
      <div v-if="!isMobile" class="d-flex align-center">
        <template v-for="(link, index) in links" :key="link.name">
          <v-btn :to="link.route" variant="text" class="text-capitalize mx-1">
            {{ link.name }}
          </v-btn>
          <span v-if="index < links.length - 1" class="separator mx-1">|</span>
        </template>
      </div>
      <v-spacer />
      <div class="d-flex align-center">
        <v-btn icon variant="text" :href="socialLinks?.facebookUrl" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon variant="text" :href="socialLinks?.instagramUrl" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon variant="text" :href="socialLinks?.whatsappUrl" target="_blank">
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
        <v-btn icon variant="text" :href="socialLinks?.linkedinUrl" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
// importaciones de librerías
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const isMobile = computed(() => display.smAndDown.value);

import { mockApiData } from "@/services/mockData.js";

const logoUrl = computed(() => mockApiData.navbar.logoUrl);
const socialLinks = computed(() => mockApiData.navbar.socialLinks);


/*
import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const logoUrl = computed(() => appDataStore.navbarData?.logoUrl || "");
const socialLinks = computed(() => appDataStore.getNavbarSocialLinks);

//  cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}
*/

const links = [
  { name: "Nosotros", route: "/" },
  { name: "Servicios", route: "/servicios" },
  { name: "Clientes", route: "/clientes" },
  { name: "Ubicación", route: "/ubicacion" },
  { name: "Contacto", route: "/contacto" },
];
</script>

<style scoped>
.separator {
  color: #666;
  font-size: 0.9rem;
}
</style>