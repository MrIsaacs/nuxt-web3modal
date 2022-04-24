export default ({ app }, inject) => {
  // const web3modal = = op
  // const provider = 
  // const asdd = new options.Web3Modal({
  //   network: 'rinkeby',
  //   cacheProvider: true,
  //   providerOptions: {}
  // })
  
  
  // console.log(nuxtWeb3Modal)

  inject('nuxtWeb3Modal', <%= options.Web3 %>)
  inject('web3Modal', <%= options.Web3Modal %>)
  inject('provider', <%= options.provider %>)

  // console.log('asdasds:', options.Web3)


  // console.log('nuxtWeb3Modal:', ctx)
  // inject('provider', 'options.provider')
}
