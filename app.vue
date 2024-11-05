<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
  useHead({
    title: 'Kang Hikmah - AlTajrib',
    meta: [
      { name: 'description', content: 'Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian' }
      ],
  });

  useSeoMeta({
    title: 'Kang Hikmah - AlTajrib',
    ogTitle: 'Kang Hikmah - AlTajrib',
    description: 'Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian',
    ogDescription: 'Masalah Anda Bukan Masalah Kami, jangan menyerah karna kami akan Temukan pencerahan hanya bersama Kang Hikmah - AlTajrib',
    ogImage: 'https://raw.githubusercontent.com/codesyariah122/kang-hikmah-alfajri/refs/heads/main/public/kanjeng.png',
    twitterCard: 'summary_large_image',
  })

</script>
