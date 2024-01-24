// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/content'
  ],
  css: [
    '@/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  routeRules: {
    'previous-engagements': {
      redirect: {
        to: '/',
        statusCode: 307
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml'
      ]
    }
  },
  content: {
    experimental: {
      clientDB: true
    }
  }
})
