<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showVideos" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ videosData.header.title }}</h1>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col
                v-for="(video, index) in videosData.videos"
                :key="video.id"
                cols="12"
                md="6"
                lg="4"
                class="mb-6"
              >
                <v-card
                  class="video-card"
                  elevation="4"
                  @click="openVideoDialog(video)"
                >
                  <v-img
                    :src="getVideoThumbnail(video.url)"
                    height="200"
                    cover
                    class="video-thumbnail"
                  >
                    <v-overlay
                      absolute
                      opacity="0.3"
                      class="d-flex align-center justify-center"
                    >
                      <v-icon size="64" color="white">mdi-play-circle</v-icon>
                    </v-overlay>
                  </v-img>
                  <v-card-text class="video-info">
                    <p class="video-date">Agregado: {{ formatDate(video.addedAt) }}</p>
                    <p class="video-date">Última edición: {{ formatDate(video.updatedAt) }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>

  <v-dialog v-model="dialogOpen" max-width="800">
    <v-card>
      <v-card-title>
        <v-row dense>
          <v-col cols="11">
            <h2 class="text-h5">Video</h2>
          </v-col>
          <v-col cols="1" class="text-right">
            <v-btn icon variant="text" size="x-small" @click="dialogOpen = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="text-center">
        <iframe
          v-if="selectedVideo"
          :src="getEmbedUrl(selectedVideo.url)"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen
          class="video-iframe"
        ></iframe>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";

const alert = inject("alert");
const dialogOpen = ref(false);
const selectedVideo = ref(null);

import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

const isLoading = computed(() => appDataStore.isLoading);

// datos desde store global
const videosData = computed(() => appDataStore.videosData);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}

const openVideoDialog = (video) => {
  selectedVideo.value = video;
  dialogOpen.value = true;
};

const getVideoThumbnail = (url) => {
  const videoId = extractVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

const getEmbedUrl = (url) => {
  const videoId = extractVideoId(url);
  return `https://www.youtube.com/embed/${videoId}`;
};

const extractVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : '';
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('es-MX');
};
</script>

<style scoped>
.video-card {
  cursor: pointer;
  transition: transform 0.2s;
  overflow: hidden;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.video-thumbnail {
  transition: transform 0.3s;
}

.video-card:hover .video-thumbnail {
  transform: scale(1.05);
}

.video-info {
  padding: 16px;
}

.video-date {
  font-size: 0.85rem;
  color: #666;
  margin: 2px 0;
}

.video-iframe {
  border: none;
  border-radius: 8px;
}
</style>