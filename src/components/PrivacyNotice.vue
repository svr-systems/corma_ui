<template>
  <v-card title="Aviso de Privacidad">
    <template v-slot:text>
      <p class="text-body-1" v-html="privacyNoticeData.description.replace(/\n/g, '<br>')">
      </p>
    </template>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        text="Cerrar"
        variant="text"
        @click="isActive.value = false"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  privacyNoticeData: {
    type: Object,
    required: true
  },
  isActive: {
    type: Object,
    required: true
  }
});
</script>