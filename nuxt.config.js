import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Dashboard',
    title: 'LASK',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron&display=swap")' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~assets/scss/mixins.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/echarts.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-socket-io',
  ],
  io: {
    // module options
    sockets: [{
      default: true, // make this the default socket
      name: 'main',
      // url: 'http://localhost:3000'
      url: 'http://188.166.210.48:7777'
    }]
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          firstIcon:'#db7e22',
          secondIcon:'#328f2b',
          thirdIcon:'#f44336',
          fourthIcon:'#2b7e8f'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    styleResources: {
      scss:'./assets/scss/mixins.scss',
        // '~assets/scss/variables.scss'
    },
    extend(config, ctx) {
    },
  transpile: [
      "three"
    ]
  },
  server: {
    port: 8000 // default: 3000
  },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        // expires: 0.001
        maxAge:100000
      }
    },
    resetOnError: true,
    redirect: {
      login: '/login', // User will be redirected to this path if login is required.
      home: '/', // User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
      logout: '/login', // User will be redirected to this path if after logout, current route is protected.
      user: '/user/profile',
      callback: '/callback' // User will be redirect to this path by the identity provider after login. (Should match configured Allowed Callback URLs (or similar setting) in your app/client with the identity provider)
    },
    strategies: {
      local: {
        scheme: 'local',
        token: {
          maxAge: 10000,
          type: 'Bearer',
        },
        endpoints: {
          login: {
            // url: "http://178.128.29.241/api/auth/login",
            // url: "http://localhost:7777/api/auth/login",
            url: "http://188.166.210.48:7777/api/auth/login",
            // url: "http://104.248.158.194/api/auth/login",
            method: 'post',
          },
          logout: false,
          user: {
            // url: "http://127.0.0.1:5000/api/auth/me",
            // url: "http://localhost:7777/api/auth/me",
            url: "http://188.166.210.48:7777/api/auth/me",
            // url: "http://104.248.158.194/api/auth/me",
            method: 'GET',
            // VERY IMPORTANT
            propertyName: false
          }
        },
        // tokenRequired: true,
        tokenType: 'Bearer',
        localStorage:false
      }
  }
  },
}