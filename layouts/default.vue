<template>
    <div>
      <HomeNavbar />
      <HomeHero />
      <Nuxt /> <!-- Konten dari halaman yang aktif akan ditampilkan di sini -->
      <HomeContactUs />
      <HomeFooter />
    </div>
</template>

<script setup>
// Pastikan Anda mengimpor semua komponen yang diperlukan di sini
import HomeNavbar from '@/components/HomeNavbar.vue';
import HomeHero from '@/components/HomeHero.vue';
import HomeContactUs from '@/components/HomeContactUs.vue';
import HomeFooter from '@/components/HomeFooter.vue';
</script>