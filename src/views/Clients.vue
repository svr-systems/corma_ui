<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showClients" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">Clientes</h1>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-6">
              <v-col
                v-for="(client, index) in clientsData.logos"
                :key="index"
                cols="6"
                sm="3"
                class="mb-6"
              >
                <v-card class="client-logo-card rounded" elevation="2">
                  <v-card-text class="text-center pa-4">
                    <v-img
                      v-if="appDataStore.isLoaded && client.logoUrl?.b64"
                      :src="'data:' + client.logoUrl.ext + ';base64,' + client.logoUrl.b64"
                      max-height="100"
                      contain
                      :alt="client.name"
                    />
                    <div v-else>
                      {{ client.name }}
                    </div>
                  </v-card-text>
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
import { computed } from "vue";
import { inject } from "vue";

const alert = inject("alert");

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

const isLoading = computed(() => appDataStore.isLoading);

// datos desde store global
const clientsData = computed(() => appDataStore.clientsData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>

