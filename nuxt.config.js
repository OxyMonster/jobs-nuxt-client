export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jobs-place-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
      { name: 'format-detection', content: 'telephone=599123270' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#2388e5',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/styles.css',
    // "@/assets/variables.less"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],
  router: {
    prefetchLinks: true,
    default: 'jobs/list'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { filename: '.env' }],
  ],

  axios: {
    proxy: true
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [{ code: 'en', iso: 'en-US', file: 'en' }, { code: 'ge', iso: 'ge-GE', file: 'ge' }],
    defaultLocale: 'ge',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      };

      loaders: {
        less: {
          lessOptions: {
            javascriptEnabled: true
          }
        }

      }
    }

  }
}
