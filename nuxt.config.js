const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css' },
    ],
    script: [
      // { src: '/js/hls.js' },
      // { src: '/js/DPlayer.min.js' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [
  {
    src: '~static/css/video-js.min.css',
    src: '~static/css/DPlayer.min.css',
  },
],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src:'~/plugins/element',
    },
    {
      src:'~/plugins/v-select.js',
      ssr:false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  serverMiddleware: [
    // 'redirect-ssl',
    { path: '/userLogin', handler: '~/api/userLogin.js' },
  ],
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    babel:{        //配置按需引入规则
      "plugins":[
          [
              "component",
              {
                  "libraryName":"element-ui",
                  "style": false
              }
          ]
      ]
    },
    extend(config, ctx) {
    }
  }
}
