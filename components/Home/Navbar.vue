<template>
  <nav :class="{'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled}" class="fixed w-full z-20 transition-all duration-300">
    <div class="container mx-auto flex justify-between items-center p-4">
      <a href="#" class="text-2xl font-bold">
        <img src="/public/kanjeng.webp" style="width: 45px;" alt="">
      </a>
      <ul class="flex space-x-4" :class="isScrolled ? 'text-black' : 'text-white'">
        <li><a href="#hero" class="hover:text-blue-500">Home</a></li>
        <li><a href="#about" class="hover:text-blue-500">About Us</a></li>
        <li><a href="#services" class="hover:text-blue-500">Services</a></li>
        <li><a href="#testimonials" class="hover:text-blue-500">Testimonials</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  // Cek posisi scroll
  isScrolled.value = window.scrollY > 50; // Ganti 50 dengan nilai yang diinginkan
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
nav a {
  scroll-behavior: smooth;
}
</style>
