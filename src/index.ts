export const ETH_NETWORK = 'goerli'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'
export const BALANCE_VERIFIER_CONTRACT_ADDRESS =
  '0x241F40004e124E7a19b523e8Fb797Fe03d86DaAb'
export const EMAIL_VERIFIER_CONTRACT_ADDRESS =
  '0xE7a9EbF2AE3BB850486Ddf63895011305E0a42D4'
export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0x71a1D7996A8EC34c731E9510780305CF81D9B86C'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xd6f41e9Fd9C94e9E87aeDecC2E402f8677B3f0c4'
export const SC_EXTERNAL_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x03142727359C948ccf2791d5B006e7A5850AC015'
export const SC_EMAIL_POSTS_CONTRACT_ADDRESS =
  '0x820Ee65C9b59821B08F9a011a75Dbc25Beb25326'
export const SC_NFT_POSTS_CONTRACT_ADDRESS =
  '0xD9802f3c8e11b92251c493152EA8Cdd77c7B13E9'
export const SC_EXTERNAL_NFT_POSTS_CONTRACT_ADDRESS =
  '0xc56F48f684F0bAa53B1841B0BcD0A1c01A544748'
export const GSN_FORWARDER_CONTRACT_ADDRESS =
  '0x7A95fA73250dc53556d264522150A940d4C50238'
export const GSN_SC_RELAY = 'https://gsn.sealcred.xyz'
export const GSN_RELAY_HUB_CONTRACT_ADDRESS =
  '0x40bE32219F0F106067ba95145e8F2b3e7930b201'
export const GSN_PAYMASTER_CONTRACT_ADDRESS =
  '0xe66fcE4FA95a94fdE5d277e113012686FFBF28d2'
export const ATTESTOR_PUBLIC_KEY =
  '3022588728262621016474471722865235652573366639695808085248430151628770415819'
export const ATTESTOR_ECDSA_ADDRESS =
  '0xb0d7480ac6af8ba423d49554c5b3473201b96fd4'

export const RESERVED_CONTRACT_METADATA = {
  '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85': {
    name: 'Ethereum Name Service',
    symbol: 'ENS',
  },
} as {
  [address: string]: {
    name: string
    symbol: string
  }
}
