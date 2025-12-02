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
import Services from './Services.vue'
import Clients from './Clients.vue'
import Location from './Location.vue'
import Contact from './Contact.vue'

const appDataStore = useApiDataStore();

const components = {
  home: Home,
  services: Services,
  clients: Clients,
  location: Location,
  contact: Contact
};

const availableSections = computed(() => appDataStore.navbarData?.navLinks?.filter(link => link.id === 'contact' || appDataStore[link.id + 'Data']) || []);

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
<style scoped>
.main-container {
  min-height: 100vh;
}
</style>

