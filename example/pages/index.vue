<template>
  <div>
    <button @click="connectWallet">Connect Wallet</button>
  </div>
</template>

<script>
export default {
  async asyncData({ $nuxtWeb3Modal }) {
    console.log($nuxtWeb3Modal)
  },
  methods: {
    async connectWallet() {
      // provider = $nuxtWeb3Modal
      // const provider = await this.$nuxtWeb3Modal.connect()

      console.log('trying to console log provider events')
      // window.ethereum = this.$provider
      // this.$provider.request({
      //   method: 'eth_requestAccounts',
      // })

      // provider.on("connect", connect);
    }
  }
};
</script>
