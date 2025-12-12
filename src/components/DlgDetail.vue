<template>
  <v-dialog :model-value="isActive" width="70vw" height="70vh" @update:model-value="$emit('update:isActive', $event)">
    <v-card class="dialog-card">
      <v-card-title class="d-flex justify-end pa-1">
        <v-btn icon @click="$emit('update:isActive', false)">
          <v-icon>mdi-close</v-icon>
          <v-tooltip activator="parent" location="left">Cerrar</v-tooltip>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-row class="fill-height">
          <v-col cols="12" md="6" class="left-col">
            <div v-if="service.imageUrl" class="image-container">
              <v-img
                :src="'data:' + service.imageUrl.ext + ';base64,' + service.imageUrl.b64"
                class="service-image"
                cover
                :alt="service.title"
              />
              <div class="image-overlay">
                <h2 v-if="service.title" class="image-title">{{ service.title }}</h2>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="right-col">
            <div class="content-container">
              <div v-if="service.catalogPdfUrl" class="catalog-section">
                <v-btn
                  color="primary"
                  variant="outlined"
                  :href="service.catalogPdfUrl"
                  target="_blank"
                  download
                  prepend-icon="mdi-file-pdf-box"
                >
                  Catálogo Descargable
                </v-btn>
              </div>

              <div class="descriptions-section">
                <p v-if="service.detailedDescription || service.descriptionDlg" class="text-body-1 mb-4">{{ service.detailedDescription || service.descriptionDlg }}</p>
                <p v-if="service.description" class="text-body-1">{{ service.description }}</p>
              </div>

              <div v-if="service.price" class="price-section">
                <p class="text-body-1">Precio: ${{ service.price }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

defineEmits(['update:isActive']);
</script>
