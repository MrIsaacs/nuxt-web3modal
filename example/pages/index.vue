<template>
  <div>
    {{ $nuxtWeb3Modal }}
  </div>
</template>

<script>
// import { WalletConnectProvider } from 'walletconnect';
// import { CoinbaseWalletProvider } from 'coinbase';

export default {
  async asyncData({ $nuxtWeb3Modal, $web3Modal, $provider }) {
    // let providerOptions = $nuxtWeb3Modal.provider();
    // providerOptions.walletconnect.package = WalletConnectProvider;
    // providerOptions.coinbasewallet.package = CoinbaseWalletProvider;
    
    const nuxtWeb3Modal = new $web3Modal({
      network: process.env.INFURA_NETWORK,
      // providerOptions
    });
    return {
      $nuxtWeb3Modal
    }
  }
};
</script>
