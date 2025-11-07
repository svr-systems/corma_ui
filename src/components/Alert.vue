<template>
  <v-snackbar
    v-model="show"
    :color="color"
    :timeout="timeout"
    top
    right
  >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="show = false"
      >
        Cerrar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const color = ref('')
const message = ref('')
const timeout = ref(6000)

const showAlert = (alertColor, alertMessage) => {
  color.value = alertColor
  message.value = alertMessage
  show.value = true
}

defineExpose({
  show: showAlert
})
</script>