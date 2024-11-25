<template>
  <div 
    v-if="isOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out" 
    :class="{'opacity-100': isOpen, 'opacity-0': !isOpen}"
    @click="closeModal"
  >
    <div
      class="relative w-full max-w-full sm:max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden opacity-0 transform transition-all duration-500 ease-in-out"
      :class="{'opacity-100 translate-y-0': isOpen, 'opacity-0 translate-y-4': !isOpen}"
      @click.stop
    >
      <!-- Video Player -->
      <div class="relative aspect-w-16 aspect-h-9">
        <video
          class="w-full h-full rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out object-contain"
          autoplay
          :src="videoUrl"
          controls
        >
          Browser Anda tidak mendukung video.
        </video>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, nextTick } from 'vue'

// Define if the modal is open
const isOpen = ref(true)
const videoUrl = ref('/videos/popup-video2.mp4')

const openModal = (url) => {
  videoUrl.value = url
  isOpen.value = true
  // Ensure the video starts playing after the modal is visible
  nextTick(() => {
    const videoElement = document.querySelector('video')
    if (videoElement) {
      videoElement.play() // Start playing the video
    }
  })
}

// Close the modal
const closeModal = () => {
  isOpen.value = false
  videoUrl.value = ''
}

defineExpose({
  openModal
})
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  width: 100%;
}

.aspect-h-9 {
  padding-top: 56.25%; /* 16:9 ratio */
}

.aspect-w-16.aspect-h-9 > video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Memastikan video tidak terpotong */
}
</style>

