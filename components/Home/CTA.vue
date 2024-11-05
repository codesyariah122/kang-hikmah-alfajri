<template>
  <section class="py-20 bg-blue-600 text-center text-white">
    <h2 class="text-4xl font-bold mb-4">Butuh Bantuan? Kami di sini untuk Anda</h2>
    <p class="text-lg mb-8">Dapatkan konsultasi gratis sekarang</p>
    <button @click="openModal" class="bg-white text-blue-600 font-bold py-2 px-4 rounded">
      Konsultasi Sekarang
    </button>

    <!-- Modal untuk Input Email -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal text-black">
        <h3 class="text-xl font-bold mb-4">Masukkan Email Anda</h3>
        <input v-model="email" type="email" placeholder="Email Anda" class="input-email"/>
        <button @click="startChat" class="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          Mulai Chat
        </button>
        <button @click="closeModal" class="bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4">
          Tutup
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      email: ''
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    startChat() {
      if (this.email) {
        // Set email pengguna di Crisp
        window.$crisp.push(["set", "user:email", [this.email]]);
        // Tampilkan chat setelah email diatur
        window.$crisp.push(["do", "chat:show"]);
        window.$crisp.push(["do", "chat:send", "Halo kang, saya ingin konsultasi seputar titit kecil"]);
        // Tutup modal
        this.closeModal();
      } else {
        alert("Silakan masukkan email Anda");
      }
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
.input-email {
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
