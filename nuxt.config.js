module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "my-first-nuxt-app",
    titleTemplate: "%s | Nuxt.js tag items viewer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "https://nuxt-blog-service-5d322.firebaseio.com"
  },
  plugins: ["~/plugins/axios.js", "~/plugins/logger"],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  router: {
    middleware: ["auth"]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/common.css'
  ]
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = "inline-cheap-module-source-map"; // for source map
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
