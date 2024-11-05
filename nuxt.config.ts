// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets"
  },
  body: true,
  components: true,
  css: [
    "@/assets/css/main.css"
  ],
  modules: ['@nuxtjs/tailwindcss'],

  head: {
    title: "HKang Hikmah - AlTajrib",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Temukan informasi Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawianKang Hikmah - AlTajrib dan konsultasikan masalah diet anda dengan Dokter profesional.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keyword",
        content: "Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        name: "description",
        content: "Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://kang-hikmah-alfajri.vercel.app",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Kang Hikmah - AlTajrib",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Kang Hikmah - AlTajrib",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:"Konsultasi masalah titit kecil, masalah percintaan, modal kawin , modal usaha dan segala macam permasalahan keduniawian",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://raw.githubusercontent.com/codesyariah122/kang-hikmah-alfajri/refs/heads/main/public/kanjeng.webp",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "600",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "600",
      },
      ],
    link: [
      ],
    script: [
      ]
  },

  device: {
    refreshOnResize: true
  },
  plugins: [
    '~/plugins/fontawesome',
    {src: '~/plugins/crisp', mode: 'client', ssr: false}
    ]
})
