<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <HomeMoleculesBannerCta/>
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
    ogDescription: 'Masalah Anda Bukan Masalah Kami, lu lu gue gue | Kang Hikmah - AlTajrib',
    ogImage: 'https://raw.githubusercontent.com/codesyariah122/kang-hikmah-alfajri/refs/heads/main/public/images/about.jpeg',
    twitterCard: 'summary_large_image',
  })

</script>
