<template>
  <div class="profile-wrapper">
    <img
      :src="`${image}.${format}`"
      class="rounded-full w-48 h-48 md:w-96 md:h-96 mb-8 profile-image"
      alt="Profile Image"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    default: "webp",
  },
});
</script>

<style>
.profile-wrapper {
  position: relative;
  width: 12rem;
  height: 12rem;
}

@media (min-width: 768px) {
  /* Sesuaikan ukuran untuk layar lebih besar */
  .profile-wrapper {
    width: 24rem;
    height: 24rem;
  }
}

.profile-image {
  border-radius: 10%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.profile-wrapper::before,
.profile-wrapper::after {
  content: "";
  position: absolute;
  top: -10%; /* Offset responsif */
  left: -10%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 0.5),
    rgba(255, 69, 0, 0.6)
  );
  filter: blur(1.5vw); /* Blur responsif */
  animation: flame 1.5s infinite ease-in-out alternate;
  mix-blend-mode: screen;
  z-index: 0;
}

.profile-wrapper::after {
  animation-delay: 0.75s;
  filter: blur(2vw); /* Blur responsif */
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.profile-image:hover {
  animation: rotate 5s linear infinite;
}

@keyframes flame {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3) translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 0.8;
  }
}
</style>
