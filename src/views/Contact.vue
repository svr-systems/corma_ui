<template>
  <v-card elevation="24" :disabled="isLoading">
    <v-card-text class="pa-0">
      <div class="full-width-container">
        <div class="content-sections">
          <div class="content-wrapper py-16">
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="section-title-main mb-4">Contacto</h1>
              </v-col>
            </v-row>

            <v-row v-if="mockApiData.location?.contact" justify="center" class="mb-16">
              <v-col cols="12" sm="12" md="12" lg="10">
                <div class="form-title text-h6 d-flex align-center mb-4">
                  <v-icon size="30" class="mr-2">mdi-email-fast</v-icon>
                  Compártenos tu información:
                </div>

                <v-card class="form-card pa-8" elevation="2">
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
                    class="elevation-4 text-white text-h6 font-weight-regular submit-button"
                    @click="submitForm"
                  >
                    Enviar
                  </v-btn>
                </div>
              </v-col>
            </v-row>

            <ContactCards v-if="mockApiData.contact" :contact="mockApiData.contact" />
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
import { mockApiData } from "@/services/mockData.js";
const contactInfo = computed(() => mockApiData.contact?.info || {});

// api global con pinia:
/*
import { useAppDataStore } from "@/stores/appData.js";

const appDataStore = useAppDataStore();

// datos desde store global
const contactInfo = computed(() => appDataStore.contactData?.info || {});

// cargar datos si no están cargados
if (!appDataStore.isLoaded && !appDataStore.isLoading) {
  appDataStore.loadAllData();
}

// mostrar error si hay problemas
if (appDataStore.hasError && alert) {
  alert?.show("red-darken-1", `Error al cargar datos: ${appDataStore.error}`);
}
*/

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

<style scoped>
.content-sections {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 100vh;
}

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

/* título del formulario */
.form-title {
  color: #333;
}

/* tarjeta que envuelve los campos de entrada */
.form-card {
  background-color: #d3d8dc !important;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

/* botón enviar */
.submit-button {
  background-color: #548c45 !important;
  border-radius: 8px;
  letter-spacing: normal;
  font-weight: 500 !important;
}

/* campos de entrada */
:deep(.v-text-field .v-field__input),
:deep(.v-textarea .v-field__input) {
  background-color: white !important;
  border-radius: 8px !important;
}

/* adapta el tamaño de los títulos en pantallas pequeñas */
@media (max-width: 960px) {
  .section-title-main {
    font-size: 3.5rem !important;
  }
}

@media (max-width: 768px) {
  .section-title-main {
    font-size: 2.5rem !important;
  }
  .content-wrapper {
    padding: 0 16px;
  }
}

@media (max-width: 600px) {
  .section-title-main {
    font-size: 2rem !important;
  }
}
</style>
