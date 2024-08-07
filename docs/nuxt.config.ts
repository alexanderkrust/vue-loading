// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@alexanderkrust/vue-loading/nuxt', 'radix-vue/nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@alexanderkrust/vue-loading/index.css'],
  vueLoading: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  experimental: {
    externalVue: false
  },
  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
