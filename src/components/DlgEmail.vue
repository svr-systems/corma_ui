<template>
  <v-dialog v-model="show" persistent scrim="black" max-width="800">
    <v-card flat>
      <v-card-title>
        <v-row dense>
          <v-col cols="11">
            <h2 class="text-h5">Enviar Email</h2>
          </v-col>
          <v-col cols="1" class="text-right">
            <v-btn icon variant="text" size="x-small" @click="show = false">
              <v-icon>mdi-close</v-icon>
              <v-tooltip activator="parent" location="left">Cerrar</v-tooltip>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text v-if="contact">
        <v-card class="form-card pa-8 rounded" elevation="2">
          <v-form ref="form" @submit.prevent="submitForm">
            <v-row dense>
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
                  v-model="formData.companyName"
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
                  v-model="formData.phone"
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
                  v-model="formData.service"
                  label="Mensaje"
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
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="show = false">Cancelar</v-btn>
        <v-btn
          type="submit"
          color="#548C45"
          size="large"
          class="elevation-4 text-white text-h6 font-weight-regular submit-button"
          @click="submitForm"
        >
          Enviar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
// Importaciones
import { computed, ref, inject } from "vue";

// Props
const props = defineProps({
  modelValue: Boolean,
  contact: Object,
});

// Emit
const emit = defineEmits(["update:modelValue"]);

const alert = inject("alert");

// Modelo bidireccional
const show = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

// Form data
const formData = ref({
  email: "",
  companyName: "",
  phone: "",
  service: "",
});

const form = ref(null);
const isLoading = ref(false);

// Función para enviar formulario
const submitForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    isLoading.value = true;

    try {
      // Simular envío
      console.log("Enviando formulario:", formData.value);
      alert?.show("success", "Información enviada con éxito");
      form.value?.reset();
      show.value = false;
    } catch (err) {
      alert?.show("red-darken-1", `Error al enviar: ${err.message}`);
    } finally {
      isLoading.value = false;
    }
  } else {
    alert?.show("red-darken-1", "Por favor, completa todos los campos requeridos");
  }
};
</script>