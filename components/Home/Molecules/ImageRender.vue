<template>
  <div>
      <img
        :src="`${image}.${format}`"
        class="w-96 h-auto md:w-full md:h-auto mb-8"
        alt="Profile Image"
      />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  format: {
    type: String,
    default: 'webp'
  }
})
</script>