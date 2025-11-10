<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ servicesData.header.title }}</h1>
              </v-col>
            </v-row>

            <div v-for="(category, categoryIndex) in servicesData.categories" :key="category.id">
              <v-row justify="center" class="mb-10">
                <v-col cols="12" class="text-center">
                  <h2 class="section-title mb-6">{{ category.title }}</h2>
                </v-col>
              </v-row>

              <v-row justify="center" class="mb-16">
                <v-col
                  cols="12"
                  md="6"
                  lg="4"
                  class="mb-6"
                  v-for="(service, serviceIndex) in category.services"
                  :key="serviceIndex"
                >
                  <v-card class="service-card mx-auto" max-width="500">
                    <v-img
                      class="align-end text-white service-image"
                      height="200"
                      :src="'data:' + service.imageUrl.ext + ';base64,' + service.imageUrl.b64"
                      cover
                    >
                      <v-card-title>{{ service.title }}</v-card-title>
                    </v-img>

                    <v-card-text class="service-card-text">
                      <div class="service-description">{{ service.description }}</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { inject } from "vue";

const alert = inject("alert");
const isLoading = ref(false);

import { mockApiData } from "@/services/mockData.js";

const servicesData = computed(() => mockApiData.services);


// api global con pinia:
// 1. comenta la línea: import { mockApiData } from "@/services/mockData.js";
// 2. descomenta todo el bloque de abajo
// 3. comenta/elimina la línea: const servicesData = computed(() => mockApiData.services);

/*
import { useAppDataStore } from "@/stores/appData.js";

const appDataStore = useAppDataStore();

// datos desde store global
const servicesData = computed(() => appDataStore.servicesData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}


*/

onMounted(() => {
  isLoading.value = true;
  try {
    isLoading.value = false;
  } catch (err) {
    
    isLoading.value = false;
  }
});
</script>

<style scoped>
.full-width-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.content-sections {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: white;
}

.content-wrapper {
  width: 100%;
  padding: 0 24px;
}

/* título principal */
.section-title-main {
  font-size: 5rem !important;
  font-weight: 300 !important;
  color: #2c3e50;
  line-height: 1;
  margin-bottom: 2rem;
  position: relative;
}

.section-title-main::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* subtítulo */
.section-title {
  font-size: 2.5rem !important;
  font-weight: 300 !important;
  color: #2c3e50;
  line-height: 1;
  margin-bottom: 2rem;
  position: relative;
}

/* tarjetas */
.service-card {
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.service-card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-description {
  min-height: 80px;
  line-height: 1.4;
}

/* oscurecimiento para las imágenes de las tarjetas */
.service-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* asegura título sobre el overlay */
.service-image .v-card-title {
  position: relative;
  z-index: 2;
}

/* adaptar el tamaño de los títulos en pantallas pequeñas */
@media (max-width: 960px) {
  .section-title-main {
    font-size: 3.5rem !important;
  }
  .section-title {
    font-size: 2rem !important;
  }
}

@media (max-width: 768px) {
  .section-title-main {
    font-size: 2.5rem !important;
  }
  .section-title {
    font-size: 1.8rem !important;
  }
  .content-wrapper {
    padding: 0 16px;
  }
}

@media (max-width: 600px) {
  .section-title-main {
    font-size: 2rem !important;
  }
  .section-title {
    font-size: 1.5rem !important;
  }
}
</style>
