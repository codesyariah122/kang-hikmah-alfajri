<template>
    <div class="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
      <img :src="image" :alt="alt" class="w-full h-48 object-cover" />
      <div class="p-4 flex flex-col items-center">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h2>
        <p class="text-gray-500 mb-4">{{ price }}</p>
        <button
          @click="addToCart"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const props = defineProps({
    image: { type: String, required: true },
    alt: { type: String, default: 'Product Image' },
    title: { type: String, default: 'Product Title' },
    price: { type: String, default: 'Rp. 0' }
  })
  
  function addToCart() {
  // Here you would typically update the cart state with the selected product
  // For demonstration, we're just redirecting to the cart page
  router.push('/cart')
}
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  