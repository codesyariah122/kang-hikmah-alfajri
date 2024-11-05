<template>
    <section id="testimonials" class="py-20 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Testimoni Klien</h2>
        <swiper :slides-per-view="1" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }">
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="p-8 bg-white rounded-lg shadow-lg"
          >
            <p class="text-lg italic">"{{ testimonial.message }}"</p>
            <p class="mt-4 font-bold">{{ testimonial.name }}</p>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = [
    { message: 'Layanan yang sangat membantu.', name: 'Ahmad' },
    { message: 'Proses mudah dan hasil nyata.', name: 'Budi' },
    { message: 'Pelayanan ramah dan profesional.', name: 'Siti' },
  ]
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus untuk slider jika diperlukan */
  </style>
  