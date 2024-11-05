<template>
    <section id="services" class="py-20 bg-gray-50">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">Layanan Jasa</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <li
            v-for="(service, index) in services"
            :key="index"
            class="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            <div class="flex flex-col items-center">
              <div class="text-blue-500 text-5xl mb-4">
                <i :class="service.icon"></i>
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      title: "Jasa Pengasihan dan Penyuksesan Pilkada",
      description: "Membantu Anda dalam kesuksesan di dunia politik.",
      icon: "fas fa-handshake",
    },
    {
      title: "Jasa Pemikat Sukma dan Khodam",
      description: "Pelayanan untuk pemikat spiritual dan khodam.",
      icon: "fas fa-heart",
    },
    {
      title: "Jasa Rukyah Online",
      description: "Layanan rukyah jarak jauh secara online.",
      icon: "fas fa-cross",
    },
    {
      title: "Jasa Gendam Multi Dimensi",
      description: "Teknik gendam untuk berbagai keperluan.",
      icon: "fas fa-brain",
    },
  ];
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus jika diperlukan */
  </style>
  