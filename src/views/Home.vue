<template>
  <div v-if="appDataStore.visibilityData?.showCarousel && carouselData.length > 0" class="full-width-container">
    <v-carousel
      height="95vh"
      show-arrows="hover"
      cycle
      interval="5000"
    >
      <v-carousel-item
        v-for="(slide, index) in carouselData"
        :key="index"
      >
        <div class="carousel-overlay" :style="getSlideStyle(slide.image)">
          <div class="carousel-content">
            <h1 class="carousel-title">{{ slide.description }}</h1>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";
import { useApiDataStore } from "@/stores/apiData.js";

const alert = inject("alert");

const appDataStore = useApiDataStore();

const carouselData = computed(() => appDataStore.getCarouselData);

// obtener el estilo de background para cada slide
const getSlideStyle = (image) => {
  if (image?.b64) {
    return {
      background: `url(data:${image.ext};base64,${image.b64}) center center / cover no-repeat, rgba(0, 0, 0, 0.5)`
    };
  }
  return {
    background: 'gray'
  };
};

// si los datos no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>


