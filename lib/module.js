import { resolve } from 'path'
import pkg from '../package.json'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
// import WalletConnectProvider from '@walletconnect/web3-provider';
// import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function getProviderOptions (_moduleOptions) {
  return {
    walletconnect: {
      // package: WalletConnectProvider,
      options: {
        infuraId: process.env.INFURA_PROJECT_ID
      }
    },
    coinbasewallet: {
      // package: CoinbaseWalletSDK,
      options: {
        appName: process.env.APP_NAME,
        infuraId: process.env.INFURA_PROJECT_ID,
        rpc: "",
        chainId: 4,
        darkMode: false
      }
    }
  }
}

export default function nuxtWeb3Modal(_moduleOptions) {
  const { addPlugin } = this


  const options = {
    Web3,
    Web3Modal,
    provider: getProviderOptions
  }

  // console.log(_moduleOptions.provider)




  // const nuxtWeb3Modal = {
  //   Web3,
  //   Web3Modal,
      //  provider
  // }

  /**
   * nuxtWeb3Modal: {
   *   Web3: ['asdsa', 'agrrf']
   */

  // console.log('nuxtWeb3Modal:', options)

  addPlugin({
    src: resolve(__dirname, 'plugin.client.js'),
    fileName: 'nuxt-web3modal-module.client.js',
    options,
    mode: 'client'
  })
}

export { pkg as meta }

