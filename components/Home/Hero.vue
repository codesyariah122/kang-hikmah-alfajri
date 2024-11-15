<template>
  <section id="home" class="relative h-screen flex items-center justify-center">
    <!-- Video Background -->
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/bg-video3.mp4" type="video/mp4" />
    </video>

    <!-- Overlay Background -->
    <div class="absolute inset-0 bg-black opacity-20 z-5"></div>

    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white md:mt-24 max-w-screen-lg mx-auto px-4">
      <div class="flex justify-center">
        <HomeMoleculesProfile image="/images/alfajri" format="webp"/>
      </div>
      <h1 class="text-3xl md:text-5xl font-bold mb-12 vujahday-script-regular">
        HajatKu HajatMu Wujud, Ragumu Rugimu
      </h1>
      <small class="mb-12 merienda">Salaam ... </small>
      <p class="text-lg md:text-xl mb-12 merienda">
        ~Jangan Lupa Tirakat - AlTajrib
      </p>
      <a id="get-started"
        @click="showPopup = true"
        class="bg-blue-500 mb-36 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >Hubungi Kami </a>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="showPopup"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-bold mb-4">Hubungi Kami Melalui:</h2>
        <div class="flex flex-col space-y-2">
          <a
            href="https://wa.me/6285923158567?text=Halo kang, saya bisa gak yah konsultasi permasalah hidup saya , saya sedang seret keuangan, dana dari investor sulit cair"
            target="_blank"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >Chat via WhatsApp</a
          >
          <button
            @click="openModalLiveChat"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Live Chat
          </button>
        </div>
        <div class="flex justify-center my-6">
          <div>
            <button
              @click="showPopup = false"
              type="button"
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Nanti Aja Deh
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Chat Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-4 text-black">Masukkan Email Anda</h3>
        <input
          v-model="email"
          type="email"
          placeholder="Email Anda"
          class="input-email text-black border border-gray-300 rounded px-3 py-2"
        />
        <div class="flex justify-between mt-4">
          <button
            @click="startChat"
            class="bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Mulai Chat
          </button>
          <button
            @click="closeModal"
            class="bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const showPopup = ref(false);
const isModalOpen = ref(false);
const email = ref("");

const openModalLiveChat = () => {
  isModalOpen.value = true;
  showPopup.value = false;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const startChat = () => {
  if (email.value) {
    window.$crisp.push(["set", "user:email", [email.value]]);
    window.$crisp.push(["do", "chat:show"]);
    $crisp.push(["set", "message:text", ["Halo kang, saya bisa gak yah konsultasi permasalah hidup saya , saya sedang seret keuangan."]]);

    closeModal();
  } else {
    alert("Silakan masukkan email Anda");
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&family=Vujahday+Script&display=swap');
nav a {
  scroll-behavior: smooth;
}

.vujahday-script-regular {
  font-family: "Vujahday Script", cursive;
  font-weight: 800;
  font-style: normal;
}

.merienda{
  font-family: "Merienda", cursive;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
