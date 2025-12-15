<template>
  <div class="main-container">
    <div v-for="section in availableSections" :key="section.id" :id="section.id">
      <component :is="components[section.id]" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, computed } from "vue";
import { useApiDataStore } from "@/stores/apiData.js";
import Home from './Home.vue'
import AboutUs from './AboutUs.vue'
import Services from './Services.vue'
import Products from './Products.vue'
import Clients from './Clients.vue'
import Location from './Location.vue'
import Contact from './Contact.vue'
import Galery from './Galery.vue'
import Videos from './Videos.vue'
import Documents from './Documents.vue'

const appDataStore = useApiDataStore();

const components = {
  home: Home,
  aboutus: AboutUs,
  services: Services,
  products: Products,
  clients: Clients,
  location: Location,
  contact: Contact,
  galery: Galery,
  videos: Videos,
  documents: Documents
};

const availableSections = computed(() => appDataStore.navbarData?.navLinks?.filter(link => {
  if (link.id === 'home') return appDataStore.visibilityData?.showCarousel;
  if (link.id === 'aboutus') return appDataStore.visibilityData?.showAboutUs;
  if (link.id === 'services') return appDataStore.visibilityData?.showServices;
  if (link.id === 'products') return appDataStore.visibilityData?.showProducts;
  if (link.id === 'clients') return appDataStore.visibilityData?.showClients;
  if (link.id === 'location') return appDataStore.visibilityData?.showLocation;
  if (link.id === 'contact') return appDataStore.visibilityData?.showContact;
  if (link.id === 'galery') return appDataStore.visibilityData?.showGallery;
  if (link.id === 'videos') return appDataStore.visibilityData?.showVideos;
  if (link.id === 'documents') return appDataStore.visibilityData?.showDocuments;
  return false;
}) || []);

const activeSection = inject('activeSection');
const observer = ref(null);

const updateActiveSection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  const sections = document.querySelectorAll('[id]');
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  observer.value = new IntersectionObserver(updateActiveSection, options);
  sections.forEach((section) => {
    observer.value.observe(section);
  });

  // scroll al hash de la URL
  if (window.location.hash) {
    const element = document.getElementById(window.location.hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

