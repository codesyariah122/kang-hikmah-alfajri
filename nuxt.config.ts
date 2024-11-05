// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
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
  device: {
    refreshOnResize: true
  },
})
