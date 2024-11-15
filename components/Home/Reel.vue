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
      <!-- Video Container 1 -->
      <div class="relative group video-container">
        <video
          ref="video1"
          class="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          autoplay="false"
          src="/videos/ct1.mp4"
        >
          Browser Anda tidak mendukung video.
        </video>
        <!-- Play/Pause Icon Overlay -->
        <div
          @click="togglePlay($refs.video1, 'icon1')"
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            :id="'icon1'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M8 5v14l11-7L8 5z"
            />
          </svg>
        </div>
      </div>

      <!-- Video Container 2 -->
      <div class="relative group video-container">
        <video
          ref="video2"
          class="w-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          autoplay="false"
          src="/videos/ct2.mp4"
        >
          Browser Anda tidak mendukung video.
        </video>
        <!-- Play/Pause Icon Overlay -->
        <div
          @click="togglePlay($refs.video2, 'icon2')"
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
        >
          <svg
            :id="'icon2'"
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M8 5v14l11-7L8 5z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    togglePlay(video, iconId) {
      const icon = document.getElementById(iconId);
      if (video.paused) {
        video.play();
        icon.innerHTML = `<path d="M6 4h4v16H6zm8 0h4v16h-4z"/>`;
      } else {
        video.pause();
        icon.innerHTML = `<path d="M8 5v14l11-7L8 5z"/>`;
      }
    }
  }
}
</script>

<style scoped lang="css">
.video-container {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
  padding-top: 56.25%;
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.video-container:hover video {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

/* Overlay play/pause button */
.video-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0.5rem;
}

.video-container:hover::before {
  opacity: 1;
}
</style>
