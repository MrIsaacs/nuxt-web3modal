const { resolve } = require('path');

module.exports = {
  ssr: false,
  target: 'static',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '../.nuxt'),
  srcDir: __dirname,
  head: {
    title: 'nuxt-web3modal-module',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: 'nuxt-web3modal module'
    }]
  },
  modules: [
    {
      handler: require('../').default,
      options: {
        method: 'eth_chainId'
      }
    }
  ]
};
