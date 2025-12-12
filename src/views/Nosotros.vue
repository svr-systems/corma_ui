<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="sections.length > 0" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row
              v-for="(section, index) in sections"
              :key="section.key"
              justify="center"
              :class="{ 'mb-16': index < sections.length - 1 }"
            >
              <v-col cols="12" md="10" lg="8">
                <div class="text-content">
                  <h2 class="section-title mb-6 text-center">
                    {{ section.title }}
                  </h2>
                  <p class="section-text text-body-1 text-left" v-html="section.description.replace(/\n/g, '<br>')">
                  </p>
                </div>
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

const sections = computed(() => {
  if (!companyInfo.value || !appDataStore.visibilityData?.showCompanyInfo) return [];
  return Object.keys(companyInfo.value)
    .filter(key => {
      const section = companyInfo.value[key];
      return section?.title && section?.description;
    })
    .map(key => ({
      key,
      title: companyInfo.value[key].title,
      description: companyInfo.value[key].description
    }));
});

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const companyInfo = computed(() => appDataStore.getCompanyInfo);

// si los datos no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>