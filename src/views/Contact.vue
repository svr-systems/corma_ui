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

            <ContactCards v-if="appDataStore.contactData" :contact="appDataStore.contactData" />

            <v-row v-if="appDataStore.contactType === 'form'" justify="center" class="mb-16">
              <v-col cols="12" sm="12" md="12" lg="10">
                <div class="form-title text-h6 d-flex align-center mb-4">
                  <v-icon size="30" class="mr-2">mdi-email-fast</v-icon>
                  Compártenos tu información:
                </div>

                <v-card class="form-card pa-8 rounded" elevation="2">
                  <v-form ref="form" @submit.prevent="submitForm">
                    <v-row dense>
                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formData.nombreEmpresa"
                          label="Nombre de la empresa"
                          variant="solo"
                          flat
                          density="compact"
                          required
                          hide-details
                          class="rounded-lg"
                        />
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formData.email"
                          label="E-mail"
                          type="email"
                          variant="solo"
                          flat
                          density="compact"
                          required
                          hide-details
                          class="rounded-lg"
                        />
                      </v-col>

                      <v-col cols="12" md="4">
                        <v-text-field
                          v-model="formData.telefono"
                          label="Teléfono"
                          type="tel"
                          variant="solo"
                          flat
                          density="compact"
                          required
                          hide-details
                          class="rounded-lg"
                        />
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          v-model="formData.servicio"
                          label="Servicio a cotizar"
                          variant="solo"
                          flat
                          density="compact"
                          rows="4"
                          required
                          hide-details
                          class="rounded-lg"
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card>

                <div class="d-flex justify-center mt-6">
                  <v-btn
                    type="submit"
                    color="#548C45"
                    size="large"
                    class="elevation-4 text-white text-h6 font-weight-regular submit-button rounded"
                    @click="submitForm"
                  >
                    Enviar
                  </v-btn>
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
import { ref, computed, onMounted } from "vue";
import { inject } from "vue";
import ContactCards from "@/components/ContactCards.vue";

const alert = inject("alert");
const isLoading = ref(false);

const formData = ref({
  nombreEmpresa: "",
  email: "",
  telefono: "",
  servicio: "",
});

const form = ref(null);
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

const submitForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    isLoading.value = true;
    
    try {
      /*
      const endpoint = `${import.meta.env.VITE_API_URL}/contact/send`
      await axios.post(endpoint, formData.value, {
        headers: { Authorization: `Bearer ${token}` }
      })
      */
      
      
      alert?.show("success", "Información enviada con éxito");
      form.value?.reset();
      
    } catch (err) {
      alert?.show("red-darken-1", `Error al enviar: ${err.message}`);
      
    } finally {
      isLoading.value = false;
    }
  } else {
    alert?.show(
      "red-darken-1",
      "Por favor, completa todos los campos requeridos"
    );
  }
};

onMounted(() => {
  isLoading.value = true;
  try {
    isLoading.value = false;
  } catch (err) {
    
    isLoading.value = false;
  }
});
</script>

