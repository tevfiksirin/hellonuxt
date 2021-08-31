export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hellonuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/i18n"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  components: [
    "~/components/templates",
    "~/components/global",
    "~/components/atoms",
    "~/components/molecules",
    "~/components/organisms"
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://github.com/nuxt-community/svg-module
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/i18n"
  ],
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English"
      },
      {
        code: "tr",
        iso: "tr-TR",
        file: "tr-TR.js",
        name: "Türkçe"
      },
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr-FR.js",
        name: "Français"
      }
    ],
    vueI18n: {
      fallbackLocale: "en"
    },
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      onlyOnRoot: false
    },
    lazy: true,
    langDir: "i18n/"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
