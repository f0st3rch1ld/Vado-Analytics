export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  experimental: {
    appManifest: false
  },
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
/*  ,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    [
      '@nuxt/image',
      {
        provider: 'static',
      },
    ],
  ]*/
})
