<template>
  <section id="testimonial" class="py-20 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Testimoni Klien</h2>
      <swiper
        :slides-per-view="3"
        :space-between="20"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        :navigation="{ clickable: true }"
        :breakpoints="{
          0: { slidesPerView: 1 }, // 1 slide untuk layar kecil (mobile)
          768: { slidesPerView: 2 }, // 2 slide untuk layar sedang (tablet)
          1024: { slidesPerView: 3 }, // 3 slide untuk layar besar (desktop)
        }"
      >
        <swiper-slide
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="polaroid-card"
        >
          <div class="image-wrapper">
            <!-- Tampilkan video di slide pertama -->
            <template v-if="index === 0 && testimonial.video">
              <video
                :src="`/images/testimonial/${testimonial.video}`"
                autoplay
                muted
                loop
                class="testimonial-video"
              ></video>
            </template>
            <!-- Tampilkan gambar di slide lainnya -->
            <template v-else>
              <img
                :src="`/images/testimonial/${testimonial.img}`"
                :alt="testimonial.name"
                class="testimonial-image"
              />
            </template>
          </div>
        </swiper-slide>

        <swiper-pagination></swiper-pagination>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";

const testimonials = [
  { video: "testi-video1.mp4", name: "Ahmad" },
  {
    message: "Proses mudah dan hasil nyata.",
    name: "Budi",
    img: "testi2.jpeg",
  },
  {
    message: "Pelayanan ramah dan profesional.",
    name: "Siti",
    img: "testi3.jpeg",
  },
  {
    message: "Pelayanan ramah dan profesional.",
    name: "Anita",
    img: "testi4.jpeg",
  },
  {
    message: "Pelayanan ramah dan profesional.",
    name: "Rita",
    img: "testi5.jpeg",
  },
  {
    message: "Pelayanan ramah dan profesional.",
    name: "Rita",
    img: "testi6.jpeg",
  },
  {
    message: "Pelayanan ramah dan profesional.",
    name: "Rita",
    img: "testi7.jpeg",
  },
];
</script>

<style scoped>
.polaroid-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.image-wrapper {
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 10px;
  border: 2px solid #eee;
  transform: rotate(-3deg);
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: rotate(0deg) scale(1.05);
}

.testimonial-image,
.testimonial-video {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-wrapper:hover .testimonial-image,
.image-wrapper:hover .testimonial-video {
  transform: scale(1.1);
}
</style>
