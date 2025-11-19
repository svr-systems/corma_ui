<template>
  <v-row justify="center" class="mb-16">
    <v-col cols="12" sm="4" class="mb-6 mb-sm-0">
      <v-card class="contact-card text-center pa-6" elevation="2">
        <v-icon size="48" color="primary" class="mb-4"
          >mdi-whatsapp</v-icon
        >
        <h3 class="contact-title mb-2">WhatsApp</h3>
        <p class="contact-info mb-4">{{ contact.whatsapp }}</p>
        <v-btn
          variant="outlined"
          color="primary"
          class="text-capitalize"
          :href="contact.whatsappUrl"
          target="_blank"
        >
          Mensaje
        </v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" class="mb-6 mb-sm-0">
      <v-card class="contact-card text-center pa-6" elevation="2">
        <v-icon size="48" color="primary" class="mb-4"
          >mdi-phone</v-icon
        >
        <h3 class="contact-title mb-2">Teléfono</h3>
        <p class="contact-info mb-4">{{ contact.phone }}</p>
        <v-btn
          variant="outlined"
          color="primary"
          class="text-capitalize"
          :href="`tel:+52${contact.phone.replace(/-/g, '')}`"
        >
          Llamar
        </v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4">
      <v-card class="contact-card text-center pa-6" elevation="2">
        <v-icon size="48" color="primary" class="mb-4"
          >mdi-email</v-icon
        >
        <h3 class="contact-title mb-2">Email</h3>
        <p class="contact-info mb-4">{{ contact.email }}</p>
        <v-btn
          variant="outlined"
          color="primary"
          class="text-capitalize"
          :href="contact.emailUrl"
        >
          Email
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.contact-card {
  border-radius: 12px;
  height: 100%;
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.contact-title {
  font-size: 1.25rem !important;
  font-weight: 500;
  color: #2c3e50;
}

.contact-info {
  font-size: 1rem;
  color: #5a6c7d;
  font-weight: 500;
}
</style>