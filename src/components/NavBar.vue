<template>
  <div>
    <v-app-bar density="compact" :elevation="2" :color="navbarColor">
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
          <v-btn
            @click="scrollToSection(link.id)"
            variant="text"
            class="text-capitalize mx-1"
            :class="{ 'active-link': activeSection === link.id }"
          >
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
import { ref, computed, inject } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const isMobile = computed(() => display.smAndDown.value);

import { mockApiData } from "@/services/mockData.js";

const logoUrl = computed(() => mockApiData.navbar.logoUrl);
const socialLinks = computed(() => mockApiData.navbar.socialLinks);
const navbarColor = computed(() => mockApiData.navbar.backgroudColor.hexa);
const links = computed(() => mockApiData.navbar.navLinks);

const activeSection = inject('activeSection') || ref('home');

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

const scrollToSection = (id) => {
  activeSection.value = id;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.separator {
  color: #666;
  font-size: 0.9rem;
}

.active-link {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff !important;
}
</style>