<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
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
                <v-card class="client-logo-card" elevation="2">
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

// datos desde store global
const clientsData = computed(() => appDataStore.clientsData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// si hay error
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>

<style scoped>
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
  min-height: 100vh;
}

.content-wrapper {
  width: 100%;
  padding: 0 24px;
}

/* estilo tarjetas */
.client-logo-card {
  border-radius: 8px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* adaptar el diseño en pantallas pequeñas */
@media (max-width: 768px) {
  .section-title-main {
    font-size: 2.5rem !important;
  }
  .content-wrapper {
    padding: 0 16px;
  }
  .client-logo-card {
    height: 100px;
  }
  .client-logo {
    max-height: 60px !important;
  }
}

@media (max-width: 600px) {
  .section-title-main {
    font-size: 2rem !important;
  }
  .client-logo-card {
    height: 80px;
  }
  .client-logo {
    max-height: 50px !important;
  }
}
</style>
