export const ETH_NETWORK = 'goerli'
export const ETH_MUMBAI_NETWORK = 'maticmum'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'

export const SEAL_HUB_VERIFIER_CONTRACT_ADDRESS =
  '0x0F23197D6aEAea3713B5C6853972eB0e751D99AE'
export const SEAL_HUB_CONTRACT_ADDRESS =
  '0xfD1ee65505d87e48B919367FbA12791E515782C7'
export const SEAL_HUB_PROVER_ADDRESS = 'https://prover.hub.sealcred.xyz'

export const BALANCE_VERIFIER_CONTRACT_ADDRESS =
  '0xB49100DbA396803079e26442690754335A16874d'
export const EMAIL_VERIFIER_CONTRACT_ADDRESS =
  '0xECa199Df30452Ee3233dc5c3f7D68dE727ca7e60'
export const FARCASTER_VERIFIER_CONTRACT_ADDRESS =
  '0xA6b6bF1773188d462b65b288f51C70A065F29493'

export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0x01f02c186fB728F34870d713F82A9e8e53AA7b6a'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xE7e6Eb8ab85Ed62DC516350110a842B894E0dED8'
export const SC_EXTERNAL_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x9de29Bc15a9bEf98411Abea59A8E994a119b5FF6'
export const SC_FARCASTER_LEDGER_CONTRACT_ADDRESS =
  '0x42d026a22b4B6bc73E2C117Ae561f7d8fA4DCE68'

export const SC_EMAIL_POSTS_CONTRACT_ADDRESS =
  '0xf74e7dACE2011418cae3d70573458799cefE259e'
export const SC_ERC721_POSTS_CONTRACT_ADDRESS =
  '0x6447869D9A787C9Ef848f0c2397a5230BDd6eA30'
export const SC_EXTERNAL_ERC721_POSTS_CONTRACT_ADDRESS =
  '0xF509C983E04aB172cE5e10D06addDf998D40b56e'
export const SC_FARCASTER_POSTS_CONTRACT_ADDRESS =
  '0xEE4EF23D2C980AaF5bD110fbBd09a0b7fAd6687F'

export const GSN_FORWARDER_CONTRACT_ADDRESS =
  '0xB2b5841DBeF766d4b521221732F9B618fCf34A87'
export const GSN_RELAY_HUB_CONTRACT_ADDRESS =
  '0x7DDa9Bf2C0602a96c06FA5996F715C7Acfb8E7b0'
export const GSN_PAYMASTER_CONTRACT_ADDRESS =
  '0xa6DEFb7EC5708497d8b53BF52A2c94f739a4E698'
export const GSN_MUMBAI_FORWARDER_CONTRACT_ADDRESS =
  '0xb2b5841dbef766d4b521221732f9b618fcf34a87'
export const GSN_MUMBAI_RELAY_HUB_CONTRACT_ADDRESS =
  '0x3232f21a6e08312654270c78a773f00dd61d60f5'
export const GSN_MUMBAI_PAYMASTER_CONTRACT_ADDRESS =
  '0xA99D942723748EB28f1AC25434F6bB6184C29018'
export const KETL_OBSS_CONTRACT_ADDRESS =
  '0xc2f11f5D624e1f7e9E8e8918D1D545CBF8279C6E'

export const METADATA_LEDGER_CONTRACT_ADDRESS =
  '0x770850Cc00a3accAd0Dc527022AD2fA084c576B9'

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
