const { resolve } = require('path');

module.exports = {
  ssr: false,
  target: 'static',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '../.nuxt'),
  srcDir: __dirname,
  modules: [
    '@walletconnect/web3-provider',
    '@coinbase/wallet-sdk',
    {
      handler: require('../').default,
      options: {
        provider: {
          walletconnect: {
            package: null, // Required
            options: {
              infuraId: "" // Required
            }
          },
          coinbasewallet: {
            package: null, // Required
            options: {
              appName: "", // Required
              infuraId: "", // Required
              rpc: "", // Optional if `infuraId` is provided; otherwise it's required
              chainId: 1, // Optional. It defaults to 1 if not provided
              darkMode: false // Optional. Use dark theme, defaults to false
            }
          }
        }
      }
    },
  ],
  plugins: [
    '~/plugins/walletconnect.js',
    '~/plugins/coinbase.js'
  ],
};
