<template>
  <div
    class="flex flex-col items-center p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md"
  >
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
      Praktik Spiritual Kami
    </h2>

    <p class="text-gray-600 text-base md:text-lg mb-6 text-center">
      Kami menjalankan berbagai praktik spiritual untuk mencapai keseimbangan
      batin dan kedamaian. Dengan meditasi, pernapasan sadar, dan ritual
      refleksi diri, kami memperdalam perjalanan menuju kedamaian dan pemahaman
      yang lebih mendalam.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center w-full max-w-screen-lg mx-auto">
      <div>
        <video
          class="w-full rounded-lg shadow-lg"
          autoplay="false"
          controls
          src="/videos/ct1.mp4"
        >
          Browser Anda tidak mendukung video.
        </video>
      </div>
      <div>
        <video
          class="w-full rounded-lg shadow-lg"
          autoplay="true"
          controls
          src="/videos/ct2.mp4"
        >
          Browser Anda tidak mendukung video.
        </video>
      </div>
    </div>
    <!-- <iframe class="w-full h-80" src="https://www.youtube.com/embed/HlyxIeEJmjo?si=WstxBC-MeNJR7eJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
  </div>
</template>

<style scoped>
/* Tidak diperlukan style tambahan dengan penggunaan TailwindCSS */
</style>
