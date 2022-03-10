export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title', name: 'title', content: 'Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ffffff' },
  // render: {
  //   etag: false,
  //   static: {
  //     etag: false
  //   }
  // },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/reset.css', '@/assets/styles/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/api',
    '@/plugins/core-components.js',
    { src: '@/plugins/ls.js', ssr: false },
    { src: '@/plugins/directives', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  router: {
    trailingSlash: true,
  },
  serverMiddleware: [],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxt/postcss8',
    '@nuxtjs/stylelint-module'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/eslint-module',
    [
      '@nuxtjs/axios',
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    ],
    ['cookie-universal-nuxt', { alias: 'cookie' }]
  ],

  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    // extractCSS: true,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        'postcss-hexrgba': {},
        'postcss-nested': {}
      }
    }
  }
}
