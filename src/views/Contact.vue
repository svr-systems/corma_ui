<template>
  <v-card elevation="24" :disabled="appDataStore.isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div v-if="appDataStore.visibilityData.showContact" class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">{{ contactTitle }}</h1>
              </v-col>
            </v-row>

            <ContactCards v-if="appDataStore.contactData" :contact="appDataStore.contactData" @email-click="emailDialog = true" />
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>

  <DlgEmail v-model="emailDialog" :contact="appDataStore.contactData" />
</template>

<script setup>
import { ref, computed } from "vue";
import { inject } from "vue";
import ContactCards from "@/components/ContactCards.vue";
import DlgEmail from "@/components/DlgEmail.vue";

const alert = inject("alert");
const emailDialog = ref(false);
import { useApiDataStore } from "@/stores/apiData.js";

const appDataStore = useApiDataStore();

// datos desde store global
const contactInfo = computed(() => appDataStore.contactData?.info || {});
const contactTitle = computed(() =>
  appDataStore.navbarData?.navLinks?.find(link => link.id === 'contact')?.name || 'Contacto'
);

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
</script>

