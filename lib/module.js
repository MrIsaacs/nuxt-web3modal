import { resolve } from 'path'
import pkg from '../package.json'

const CONFIG_KEY = 'nuxtWeb3Modal'

export default async function nuxtWeb3Modal(moduleOptions) {
  const { addPlugin } = this

  const options = {
    provider: moduleOptions
  }

  /**
   * 
   */
  addPlugin({
    src: resolve(__dirname, 'plugin.client.js'),
    fileName: 'nuxt-web3modal-module.client.js',
    options,
    mode: 'client',
    ssr: false
  })
}

export { pkg as meta }

