import Web3Modal from 'web3modal'
import detectEthereumProvider from '@metamask/detect-provider'

export default async function(ctx, inject) {
  const moduleOptions = <%= serialize(options) %>

  if (process.client) {
    const provider = await detectEthereumProvider()

    if (provider) {
      // const web3Modal = new Web3Modal({
      //   network: 'rinkeby',
      //   cacheProvider: true,
      //   providerOptions: moduleOptions.provider
      // })

      inject('provider', provider)
      // inject('nuxtWeb3Modal', web3Modal)
    } else {
      console.log('Please install MetaMask!');
    }
  }
}
