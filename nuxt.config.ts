// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: { name: "history", mode: "out-in" },
  },
});
