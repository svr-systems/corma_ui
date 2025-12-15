<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showProducts" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ productsData.header.title }}</h1>
              </v-col>
            </v-row>

            <div v-for="(category, categoryIndex) in productsData.categories" :key="category.id">
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
                  v-for="(product, productIndex) in category.products"
                  :key="productIndex"
                >
                  <v-card
                    class="service-card mx-auto rounded"
                    max-width="500"
                    :class="{ 'clickable-card': product.detailedDescription || product.descriptionDlg }"
                    @click="(product.detailedDescription || product.descriptionDlg) ? openProductDialog(product) : null"
                  >
                    <v-img
                      v-if="appDataStore.isLoaded && product.imageUrl?.b64"
                      class="align-end text-white service-image"
                      height="200"
                      :src="'data:' + product.imageUrl.ext + ';base64,' + product.imageUrl.b64"
                      cover
                    >
                      <v-card-title>{{ product.title }}</v-card-title>
                    </v-img>

                    <v-card-text v-if="product.description" class="service-card-text">
                       <div class="service-description">{{ product.description }}</div>
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

  <ServiceDetailDialog
    v-if="selectedProduct"
    :service="selectedProduct"
    :is-active="dialogOpen"
    @update:is-active="dialogOpen = $event"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";
import ServiceDetailDialog from "@/components/DlgDetail.vue";

const alert = inject("alert");
const isLoading = ref(false);
const dialogOpen = ref(false);
const selectedProduct = ref(null);

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const productsData = computed(() => appDataStore.productsData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}

const openProductDialog = (product) => {
  selectedProduct.value = product;
  dialogOpen.value = true;
};
</script>