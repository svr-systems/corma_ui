<template>
  <div class="main-container">
    <div id="home">
      <Home />
    </div>

    <div id="services">
      <Services />
    </div>

    <div id="clients">
      <Clients />
    </div>

    <div id="location">
      <Location />
    </div>

    <div id="contact">
      <Contact />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide } from "vue";
import Home from './Home.vue'
import Services from './Services.vue'
import Clients from './Clients.vue'
import Location from './Location.vue'
import Contact from './Contact.vue'

const activeSection = ref('home');
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

provide('activeSection', activeSection);
</script>
<style scoped>
.main-container {
  min-height: 100vh;
}
</style>

