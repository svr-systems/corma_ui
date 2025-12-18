<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showLocation" class="content-sections">
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
                    elevation="1"
                  >
                    Ver en Maps
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="d-flex justify-center">
                <div class="map-preview rounded">
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
                <v-dialog v-if="appDataStore.visibilityData.showPrivacyNotice" v-model="privacyDialog" max-width="800">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      v-bind="activatorProps"
                      color="grey-darken-1"
                      variant="flat"
                      class="rounded-pill px-8 privacy-btn"
                      elevation="1"
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

          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";
import PrivacyNotice from "@/components/PrivacyNotice.vue";

const alert = inject("alert");
const privacyDialog = ref(false);

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

const isLoading = computed(() => appDataStore.isLoading);

// datos desde store global
const locationData = computed(() => appDataStore.locationData);
const privacyNoticeData = computed(() => appDataStore.privacyNoticeData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>

