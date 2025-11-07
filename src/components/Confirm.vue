<template>
  <v-dialog v-model="show" max-width="400">
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="cancel">Cancelar</v-btn>
        <v-btn color="primary" text @click="confirm">Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const title = ref('')
const message = ref('')
let resolvePromise = null

const showConfirm = (options) => {
  title.value = options.title || 'Confirmar'
  message.value = options.message || '¿Estás seguro?'
  show.value = true

  return new Promise((resolve) => {
    resolvePromise = resolve
  })
}

const confirm = () => {
  show.value = false
  if (resolvePromise) resolvePromise(true)
}

const cancel = () => {
  show.value = false
  if (resolvePromise) resolvePromise(false)
}

defineExpose({
  show: showConfirm
})
</script>