<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0" style="min-height: 100vh">
      <div class="full-width-container">
        <div class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">Ubicación</h1>
              </v-col>
            </v-row>

            <v-row align="center" justify="center" class="mb-16">
              <v-col
                cols="12"
                md="6"
                class="d-flex align-center justify-center mb-4 mb-md-0"
              >
                <div class="location-content text-center">
                  <p class="location-text mb-6">
                    {{ locationData.address.displayAddress }}
                  </p>
                  <v-btn
                    color="primary"
                    variant="flat"
                    :href="locationData.map.directionsUrl"
                    target="_blank"
                    class="location-btn"
                  >
                    Ver en Maps
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="d-flex justify-center">
                <div class="map-preview">
                  <iframe
                    :src="locationData.map.embedUrl"
                    width="100%"
                    height="300"
                    style="border: 0; border-radius: 8px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    :title="`Ubicación de CORMA Consulting - ${locationData.address.displayAddress}`"
                    class="map-iframe"
                  ></iframe>
                </div>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <v-dialog v-model="privacyDialog" max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      v-bind="activatorProps"
                      color="grey-darken-1"
                      variant="flat"
                      class="rounded-pill px-8 privacy-btn"
                    >
                      Aviso de Privacidad
                    </v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <PrivacyNotice
                      :privacy-notice-data="privacyNoticeData"
                      :is-active="isActive"
                    />
                  </template>
                </v-dialog>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-16">
              <v-col cols="12" sm="4" class="mb-6 mb-sm-0">
                <v-card class="contact-card text-center pa-6" elevation="2">
                  <v-icon size="48" color="primary" class="mb-4"
                    >mdi-whatsapp</v-icon
                  >
                  <h3 class="contact-title mb-2">WhatsApp</h3>
                  <p class="contact-info mb-4">{{ locationData.contact.whatsapp }}</p>
                  <v-btn
                    variant="outlined"
                    color="primary"
                    class="text-capitalize"
                    :href="locationData.contact.whatsappUrl"
                    target="_blank"
                  >
                    Mensaje
                  </v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" class="mb-6 mb-sm-0">
                <v-card class="contact-card text-center pa-6" elevation="2">
                  <v-icon size="48" color="primary" class="mb-4"
                    >mdi-phone</v-icon
                  >
                  <h3 class="contact-title mb-2">Teléfono</h3>
                  <p class="contact-info mb-4">{{ locationData.contact.phone }}</p>
                  <v-btn
                    variant="outlined"
                    color="primary"
                    class="text-capitalize"
                    :href="`tel:+52${locationData.contact.phone.replace(/-/g, '')}`"
                  >
                    Llamar
                  </v-btn>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4">
                <v-card class="contact-card text-center pa-6" elevation="2">
                  <v-icon size="48" color="primary" class="mb-4"
                    >mdi-email</v-icon
                  >
                  <h3 class="contact-title mb-2">Email</h3>
                  <p class="contact-info mb-4">{{ locationData.contact.email }}</p>
                  <v-btn
                    variant="outlined"
                    color="primary"
                    class="text-capitalize"
                    :href="locationData.contact.emailUrl"
                  >
                    Email
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { inject } from "vue";
import PrivacyNotice from "@/components/PrivacyNotice.vue";

const alert = inject("alert");
const isLoading = ref(false);
const privacyDialog = ref(false);

import { mockApiData } from "@/services/mockData.js";

const locationData = computed(() => mockApiData.location);
const privacyNoticeData = computed(() => mockApiData.privacyNotice);


// modo alternativo: api global con pinia
// para usar api global, sigue estos pasos:
// 1. comenta la línea: import { mockApiData } from "@/services/mockData.js";
// 2. descomenta todo el bloque de abajo
// 3. comenta/elimina la línea: const locationData = computed(() => mockApiData.location);

/*
import { useAppDataStore } from "@/stores/appData.js";

const appDataStore = useAppDataStore();

// datos desde store global
const locationData = computed(() => appDataStore.locationData);

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
.content-sections {
  width: 100%;
  background-color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
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
  background: #007bff;
  border-radius: 2px;
}

/* sección de ubicación */
.location-content {
  max-width: 350px;
  text-align: center;
}

.location-text {
  font-size: 1.1rem !important;
  line-height: 1.6;
  color: #5a6c7d;
}

.location-btn {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.map-preview {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.map-iframe {
  width: 100%;
  height: 300px;
  border: none;
}

/* tarjetas de contacto (whats, tel, email) */
.contact-card {
  border-radius: 12px;
  height: 100%;
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 1.25rem !important;
  font-weight: 500;
  color: #2c3e50;
}

.contact-info {
  font-size: 1rem;
  color: #5a6c7d;
  font-weight: 500;
}

.privacy-btn {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* adaptar el tamaño de los títulos en pantallas pequeñas */
@media (max-width: 960px) {
  .section-title-main {
    font-size: 3.5rem !important;
  }
}

@media (max-width: 768px) {
  .section-title-main {
    font-size: 2.5rem !important;
  }
  .content-wrapper {
    padding: 0 16px;
  }
  .location-content {
    max-width: unset;
  }
  .map-preview {
    max-width: 100%;
  }
}
</style>
