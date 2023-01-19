export const ETH_NETWORK = 'goerli'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'

export const SEAL_HUB_VERIFIER_CONTRACT_ADDRESS =
  '0x7C02e6202391E7Cbfa7467E8806934D0A3654702'
export const SEAL_HUB_CONTRACT_ADDRESS =
  '0x3B178deEed990dB8F11ECFe42fFA9Ad14b6E3e18'
export const SEAL_HUB_PROVER_ADDRESS = 'https://prover.hub.sealcred.xyz'

export const BALANCE_VERIFIER_CONTRACT_ADDRESS =
  '0xB49100DbA396803079e26442690754335A16874d'
export const EMAIL_VERIFIER_CONTRACT_ADDRESS =
  '0xECa199Df30452Ee3233dc5c3f7D68dE727ca7e60'
export const FARCASTER_VERIFIER_CONTRACT_ADDRESS =
  '0xA6b6bF1773188d462b65b288f51C70A065F29493'

export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0xf6605a714D18f55687f8B50683B2ed054425A5DB'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x69249CC5BEF51041248107135c89E2f0dB08Bf9F'
export const SC_EXTERNAL_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x558fFf0c9e265F807B05F7ff5DA33c8E2031fe6e'
export const SC_FARCASTER_LEDGER_CONTRACT_ADDRESS =
  '0x55EA2cdCA3a2B63F88104C790705f26Fb340f186'

export const SC_EMAIL_POSTS_CONTRACT_ADDRESS =
  '0xdF5A6252654988D29e1c46Fafbf780A5C1d1E5E1'
export const SC_ERC721_POSTS_CONTRACT_ADDRESS =
  '0x17005855BbcEbA8C6d384e2Ce87d78201e0bbC37'
export const SC_EXTERNAL_ERC721_POSTS_CONTRACT_ADDRESS =
  '0x49AED51DC34Df290edD3282852A96b5E0e797502'
export const SC_FARCASTER_POSTS_CONTRACT_ADDRESS =
  '0x7CE90c714Dbc48538Ec2838E5e6483155D506AAb'

export const GSN_FORWARDER_CONTRACT_ADDRESS =
  '0x7A95fA73250dc53556d264522150A940d4C50238'
export const GSN_RELAY_HUB_CONTRACT_ADDRESS =
  '0x40bE32219F0F106067ba95145e8F2b3e7930b201'
export const GSN_PAYMASTER_CONTRACT_ADDRESS =
  '0xe66fcE4FA95a94fdE5d277e113012686FFBF28d2'

export const GSN_SC_RELAY = 'https://gsn.sealcred.xyz'
export const VERIFY_URL = 'https://verify.sealcred.xyz'
export const POSTER_URL = 'https://poster.sealcred.xyz'

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
