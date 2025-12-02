<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <v-sheet
          v-if="appDataStore.visibilityData?.showHero"
          class="hero-section d-flex align-center"
          height="100vh"
          :style="getBackgroundStyle()"
          :color="heroData?.backgroundImage ? 'transparent' : 'grey-darken-2'"
        >
          <div class="hero-content-wrapper">
            <v-row align="start" justify="start" class="fill-height">
              <v-col cols="12" md="6" class="text-left">
                <div class="hero-content">
                  <v-img
                    v-if="appDataStore.isLoaded && heroData?.logoUrl?.b64"
                    :src="'data:' + heroData.logoUrl.ext + ';base64,' + heroData.logoUrl.b64"
                    max-width="400"
                    contain
                  />
                </div>
              </v-col>
            </v-row>
          </div>
        </v-sheet>

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
  if (!companyInfo.value) return [];
  return Object.keys(companyInfo.value)
    .filter(key => {
      const section = companyInfo.value[key];
      if (!section?.title || !section?.description) return false;
      if (key === 'mission') return appDataStore.visibilityData?.showMission;
      if (key === 'vision') return appDataStore.visibilityData?.showVision;
      if (key === 'values') return appDataStore.visibilityData?.showValues;
      if (key === 'history') return appDataStore.visibilityData?.showHistory;
      return true;
    })
    .map(key => ({
      key,
      title: companyInfo.value[key].title,
      description: companyInfo.value[key].description
    }));
});

// obtener el estilo de background
const getBackgroundStyle = () => {
  if (heroData.value?.backgroundImage?.b64) {
    return {
      backgroundImage: `url(data:${heroData.value.backgroundImage.ext};base64,${heroData.value.backgroundImage.b64})`
    };
  }
  return {
    backgroundImage: 'transparent'
  };
};


import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const heroData = computed(() => appDataStore.getHeroData);
const companyInfo = computed(() => appDataStore.getCompanyInfo);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}

// No se necesita onMounted ya que no hay lógica específica de carga
</script>

<style scoped>
.full-width-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero-section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 0 24px;
}

.hero-content {
  position: relative;
  z-index: 2;
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

.text-content {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem !important;
  font-weight: 300 !important;
  color: #502c2c;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #a24b4b);
  border-radius: 2px;
}

.section-text {
  font-size: 1.1rem !important;
  line-height: 1.7;
  color: #5a6c7d;
  margin: 0;
  text-align: left !important;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem !important;
  }

  .hero-content-wrapper,
  .content-wrapper {
    padding: 0 16px;
  }
}
</style>
