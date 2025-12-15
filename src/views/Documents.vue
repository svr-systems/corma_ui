<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showDocuments" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ documentsData.header.title }}</h1>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col
                v-for="(document, index) in documentsData.documents"
                :key="document.title"
                cols="12"
                md="6"
                lg="4"
                class="mb-6"
              >
                <v-card
                  class="document-card"
                  elevation="4"
                >
                  <v-card-title class="document-title">{{ document.title }}</v-card-title>
                  <v-card-text class="document-actions">
                    <v-btn
                      color="primary"
                      variant="outlined"
                      prepend-icon="mdi-file-pdf-box"
                      :href="'data:application/' + document.statement_b64.ext + ';base64,' + document.statement_b64.cnt"
                      :download="document.statement_b64.statement_path"
                      class="download-btn"
                    >
                      Descargar PDF
                    </v-btn>
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
const documentsData = computed(() => appDataStore.documentsData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>

<style scoped>
.document-card {
  border-radius: 8px;
  overflow: hidden;
  height: auto;
  display: flex;
  flex-direction: column;
}

.document-title {
  font-size: 1.25rem !important;
  font-weight: 500;
  color: #2c3e50;
  text-align: center;
}

.document-actions {
  display: flex;
  justify-content: center;
  padding: 16px;
}

.download-btn {
  width: 100%;
}
</style>