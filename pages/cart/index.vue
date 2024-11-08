<template>
    <div class="p-6">
      <h1 class="text-2xl font-semibold mb-6">Shopping Cart</h1>
  
      <div v-if="cartItems.length" class="space-y-4">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center bg-white p-4 shadow rounded-lg"
        >
          <img :src="item.image" :alt="item.title" class="w-20 h-20 object-cover" />
          <div class="flex-1 px-4">
            <h2 class="font-semibold">{{ item.title }}</h2>
            <p class="text-gray-500">{{ item.price }}</p>
          </div>
          <button @click="removeFromCart(index)" class="text-red-500">Remove</button>
        </div>
  
        <div class="mt-6 flex justify-between items-center">
          <p class="text-lg font-semibold">Total: {{ totalPrice }}</p>
          <button @click="processCheckout" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
  
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Mocking cart items in local storage or a global state
  const cartItems = ref([
    { title: 'Minyak Khodam - Alfajri', price: 'Rp. 10,000', image: '/images/sample1.jpeg' },
    { title: 'Pelet Pengikat Suka Alfajri', price: 'Rp. 25,000', image: '/images/sample2.jpeg' }
  ])
  
  // Calculate total price
  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + parseFloat(item.price.replace(/[Rp.,]/g, '')), 0)
  })
  
  // Remove item from cart
  function removeFromCart(index) {
    cartItems.value.splice(index, 1)
  }

  const processCheckout = () => {
    // Placeholder for checkout process
    alert('Sedang mempersiapkan dana dari investor ... meni lila nunggu dana ti investor ge')
    cartItems.value = [] // Clear the cart after checkout
  }
  </script>
  
  <style scoped>
  /* Add additional styles for the cart page if necessary */
  </style>
  