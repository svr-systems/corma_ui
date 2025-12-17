<template>
  <div>
    <v-app-bar density="compact" :elevation="2" :color="navbarColor">
      <v-toolbar-title>
        <v-img
          v-if="appDataStore.isLoaded && logoUrl?.b64"
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
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { useDisplay } from "vuetify";

const display = useDisplay();
const isMobile = computed(() => display.smAndDown.value);

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const logoUrl = computed(() => appDataStore.navbarData?.logoUrl || {});
const socialLinks = computed(() => appDataStore.navbarData?.socialLinks || {});
const navbarColor = computed(() => appDataStore.navbarData?.backgroudColor?.hexa || "#757575");
const links = computed(() => appDataStore.navbarData?.navLinks?.filter(link => {
  if (link.id === 'home') return appDataStore.visibilityData?.showCarousel;
  if (link.id === 'aboutus') return appDataStore.visibilityData?.showAboutUs;
  if (link.id === 'products') return appDataStore.visibilityData?.showProducts;
  if (link.id === 'services') return appDataStore.visibilityData?.showServices;
  if (link.id === 'clients') return appDataStore.visibilityData?.showClients;
  if (link.id === 'location') return appDataStore.visibilityData?.showLocation;
  if (link.id === 'contact') return appDataStore.visibilityData?.showContact;
  if (link.id === 'galery') return appDataStore.visibilityData?.showGallery;
  if (link.id === 'videos') return appDataStore.visibilityData?.showVideos;
  if (link.id === 'documents') return appDataStore.visibilityData?.showDocuments;
  return true;
}) || []);

const activeSection = inject('activeSection') || ref('home');

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

const scrollToSection = (id) => {
  activeSection.value = id;
  const element = document.getElementById(id);
  if (element) {
    const navbar = document.querySelector('.v-app-bar');
    const navbarHeight = navbar ? navbar.offsetHeight : 48;
    const rect = element.getBoundingClientRect();
    const offsetTop = rect.top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};
</script>
