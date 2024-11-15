<template>
  <nav
    :class="{ 'bg-white shadow-sm': isScrolled, 'bg-transparent': !isScrolled }"
    class="fixed w-full z-20 top-0 start-0 transition-all duration-300"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/alfajri.webp" class="h-8" alt="Flowbite Logo" />
        <span :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >AlTajrib</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a
          href="#get-started"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Get started</a
        >
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <a
              href="#home"
              :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
              class="block"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
              href="#about"
              class="block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 "
              >About</a
            >
          </li>
          <li>
            <a
              :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
              href="#services"
              class="block  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
              >Services</a
            >
          </li>
          <li>
            <a
              :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
              href="#testimonial"
              class="block rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
              >Testimonial</a
            >
          </li>
          <li>
            <a
              :class="['block', isScrolled ? 'text-gray-900' : 'text-white']"
              href="#contact"
              class="block rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false); // State untuk kontrol menu

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Ganti 50 dengan nilai yang diinginkan
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // Toggle menu saat hamburger diklik
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav {
  transition: background-color 0.3s, box-shadow 0.3s; /* Tambahkan efek transisi */
}
</style>
