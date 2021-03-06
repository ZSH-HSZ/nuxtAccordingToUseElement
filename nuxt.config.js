const pkg = require('./package')


module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css'
      },
    ],
    script: [
      { src: '/js/hmac-sha256.js' },
      { src: '/js/enc-base64-min.js' },
      { src: '/js/base64js.js' },
      { src: '/js/transform.worker.js' },
    ]
  },
  loading: {
    color: '#fff'
  },
  css: [
    './static/css/index.less',
  ],
  plugins: [{
      src: '~/plugins/element',
    },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/getapi11': {
      target: 'http://192.168.10.223:60021/v1.1.0',
      pathRewrite: {
        '^/getapi11': '/'
      }
    }
  },
  serverMiddleware: [
    // 'redirect-ssl',
    {
      path: '/userLogin',
      handler: '~/api/userLogin.js'
    },
  ],
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    babel: { //配置按需引入规则
      "plugins": [
        ["@babel/plugin-proposal-decorators", {
          legacy: true
        }],
        ["@babel/plugin-proposal-class-properties", {
          loose: true
        }],
        [
          "component",
          {
            "libraryName": "element-ui",
            "style": false
          }
        ]
      ]
    },
    extend(config, ctx) {}
  }
}
