<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showGallery" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ galleryData.header.title }}</h1>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                v-for="(category, index) in galleryData.categories"
                :key="index"
                :cols="cardCols[index]"
              >
                <v-card
                  class="gallery-category-card"
                  elevation="4"
                  @click="openCategoryDialog(category)"
                >
                  <v-img
                    v-if="category.images && category.images.length > 0"
                    :src="'data:' + category.images[0].imageUrl.ext + ';base64,' + category.images[0].imageUrl.b64"
                    height="200"
                    cover
                    class="gallery-image"
                  />
                  <v-card-title class="gallery-title">{{ category.title }}</v-card-title>
                  <v-card-text class="gallery-text">
                    {{ category.images ? category.images.length : 0 }} imágenes
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>

  <v-dialog v-model="dialogOpen" max-width="1200">
    <v-card>
      <v-card-title>
        <v-row dense>
          <v-col cols="11">
            <h2 class="text-h5">{{ selectedCategory?.title }}</h2>
          </v-col>
          <v-col cols="1" class="text-right">
            <v-btn icon variant="text" size="x-small" @click="dialogOpen = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            v-for="(image, imgIdx) in selectedCategory?.images"
            :key="imgIdx"
            cols="12"
            md="6"
            class="mb-4"
          >
            <v-card elevation="2" class="image-card" @click="openImageDialog(image)">
              <v-img
                :src="'data:' + image.imageUrl.ext + ';base64,' + image.imageUrl.b64"
                height="200"
                cover
              />
              <v-card-title class="image-title">{{ image.name }}</v-card-title>
              <v-card-text class="image-description">{{ image.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Dialog para mostrar imagen individual -->
  <v-dialog v-model="imageDialogOpen" max-width="800">
    <v-card>
      <v-card-title>
        <v-row dense>
          <v-col cols="11">
            <h2 class="text-h5">{{ selectedImage?.name }}</h2>
          </v-col>
          <v-col cols="1" class="text-right">
            <v-btn icon variant="text" size="x-small" @click="imageDialogOpen = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="text-center">
        <v-img
          v-if="selectedImage"
          :src="'data:' + selectedImage.imageUrl.ext + ';base64,' + selectedImage.imageUrl.b64"
          max-height="500"
          contain
          class="mb-4"
        />
        <p class="image-full-description">{{ selectedImage?.description }}</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";

const alert = inject("alert");
const dialogOpen = ref(false);
const selectedCategory = ref(null);
const imageDialogOpen = ref(false);
const selectedImage = ref(null);

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

const isLoading = computed(() => appDataStore.isLoading);

const galleryData = computed(() => appDataStore.galleryData);

// anchos variables para asimetría, alternando patrones por fila
const cardCols = computed(() => {
  const numCategories = galleryData.value.categories.length;
  const cols = [];
  for (let i = 0; i < numCategories; i++) {
    const row = Math.floor(i / 3);
    const pos = i % 3;
    const pattern = row % 2 === 0 ? [5, 4, 3] : [6, 2, 4];
    cols.push(pattern[pos]);
  }
  return cols;
});

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}

const openCategoryDialog = (category) => {
  selectedCategory.value = category;
  dialogOpen.value = true;
};

const openImageDialog = (image) => {
  selectedImage.value = image;
  imageDialogOpen.value = true;
};

</script>

<style scoped>
.gallery-category-card {
  cursor: pointer;
  transition: transform 0.2s;
  overflow: hidden;
}

.gallery-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  transition: transform 0.3s;
}

.gallery-category-card:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-title {
  font-size: 1.25rem !important;
  font-weight: 500;
}

.gallery-text {
  font-size: 0.9rem;
  color: #666;
}

.image-title {
  font-size: 1.1rem !important;
  font-weight: 500;
}

.image-description {
  font-size: 0.9rem;
  color: #555;
}
</style>