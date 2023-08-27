// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/strapi'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      strapi: {
        url: process.env.STRAPI_URL,
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
        {
          rel: "apple-touch-icon",
          sizes: '180x180',
          href: "/images/icons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: 'image/png',
          sizes:'32x32',
          href: "/images/icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: 'image/png',
          sizes:'16x16',
          href: "/images/icons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/images/icons/site.html",
        },
        {
          rel: "mask-icon",
          href: "/images/icons/safari-pinned-tab.svg",
          color: '#666666',
        },
        {
          rel: "shortcut icon",
          href: ".",
        },
      ],
      title: 'Công ty Cổ Phần Đức Hà',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          "http-equiv": 'X-UA-Compatible',
          content: 'IE=edge'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'keywords',
          content: 'HTML5 Template'
        },
        {
          name: 'description',
          content: 'Molla - Bootstrap eCommerce Template'
        },
        {
          name: 'author',
          content: 'p-themes'
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'Molla'
        },
        {
          name: 'application-name',
          content: 'Molla'
        },
        {
          name: 'msapplication-TileColor',
          content: '#cc9966'
        },
        {
          name: 'msapplication-config',
          content: 'assets/images/icons/browserconfig.xml'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        },
      ]
    },
  },
})
