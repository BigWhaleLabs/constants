export const ETH_NETWORK = 'goerli'
export const ETH_MUMBAI_NETWORK = 'maticmum'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'

export const SEAL_HUB_VERIFIER_CONTRACT_ADDRESS =
  '0xAa55A7bc08913d4A05990Bc6eFf5ac8478A8b307'
export const SEAL_HUB_CONTRACT_ADDRESS =
  '0x91F4f39120bAccC6ceC7d9f5C8bcF3fAb0fBb623'
export const SEAL_HUB_PROVER_ADDRESS = 'https://prover.hub.sealcred.xyz'

export const BALANCE_VERIFIER_CONTRACT_ADDRESS =
  '0xB49100DbA396803079e26442690754335A16874d'
export const EMAIL_VERIFIER_CONTRACT_ADDRESS =
  '0xECa199Df30452Ee3233dc5c3f7D68dE727ca7e60'
export const FARCASTER_VERIFIER_CONTRACT_ADDRESS =
  '0xA6b6bF1773188d462b65b288f51C70A065F29493'
export const ATTESTATION_VERIFIER_CONTRACT_ADDRESS =
  '0x3C62f429a8e9a42b5E6Cce09239266593DB3747f'
export const PASSWORD_VERIFIER_CONTRACT_ADDRESS =
  '0xBeD245BdAE228F006E60BE50aB2cA97282eD8a91'

export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0x01f02c186fB728F34870d713F82A9e8e53AA7b6a'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xE7e6Eb8ab85Ed62DC516350110a842B894E0dED8'
export const SC_EXTERNAL_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x4680C0fBaC723C680eF6272951f929218471ce06'
export const SC_FARCASTER_LEDGER_CONTRACT_ADDRESS =
  '0x22bCED69B7e7F6a57fa10EF766e3Bf71ED72B31D'

export const SC_EMAIL_POSTS_CONTRACT_ADDRESS =
  '0xf74e7dACE2011418cae3d70573458799cefE259e'
export const SC_ERC721_POSTS_CONTRACT_ADDRESS =
  '0x6447869D9A787C9Ef848f0c2397a5230BDd6eA30'
export const SC_EXTERNAL_ERC721_POSTS_CONTRACT_ADDRESS =
  '0xB18EF2d1e23a49d7C520DB85408154bCde84b56e'
export const SC_FARCASTER_POSTS_CONTRACT_ADDRESS =
  '0x0De0146C24870a6b3213A71605c805d31C74AdB8'

export const GSN_FORWARDER_CONTRACT_ADDRESS =
  '0xB2b5841DBeF766d4b521221732F9B618fCf34A87'
export const GSN_RELAY_HUB_CONTRACT_ADDRESS =
  '0x7DDa9Bf2C0602a96c06FA5996F715C7Acfb8E7b0'
export const GSN_PAYMASTER_CONTRACT_ADDRESS =
  '0x499FE0eA2d9F42AcF8f9AF8a1b6C2DAb6DCB3289'
export const GSN_MUMBAI_FORWARDER_CONTRACT_ADDRESS =
  '0xb2b5841dbef766d4b521221732f9b618fcf34a87'
export const GSN_MUMBAI_RELAY_HUB_CONTRACT_ADDRESS =
  '0x3232f21a6e08312654270c78a773f00dd61d60f5'
export const GSN_MUMBAI_PAYMASTER_CONTRACT_ADDRESS =
  '0x7054054ACC8088B963a50D8A6bbbD70c3F59b60A'
export const DEV_KETL_OBSS_CONTRACT_ADDRESS =
  '0x47347276474A9Cd91862b07413e6437a2B150E14'
export const PROD_KETL_OBSS_CONTRACT_ADDRESS =
  '0x6049f02448aD46D0f80AF92D9F2c6F22F0C49349'
export const DEV_KETL_FEEDS_CONTRACT_ADDRESS =
  '0x9da6FfBbd8656206294Ea77658a389d4208B2822'
export const PROD_KETL_FEEDS_CONTRACT_ADDRESS =
  '0xFE2Ec015e2C25E121E05FD039eA251a9709f7dE5'
export const DEV_KETL_ATTESTATION_CONTRACT =
  '0x1351C42f51FD1bC11099C733DfBBa093f6007125'
export const PROD_KETL_ATTESTATION_CONTRACT =
  '0xacCE6586e66eA392ee4875D2289A6D7C4e4705c6'
export const INCREMENTAL_BINARY_TREE_ADDRESS =
  '0x96b8a618Bb30539D45164b6E0c046280E067b3B5'

export const KETL_NOTIFICATIONS_BACKEND = 'https://notifications.ketl.xyz'
export const KETL_AI_BACKEND = 'https://ai.ketl.xyz'
export const KETL_PFP_GENERATOR = 'https://pfp.ketl.xyz'

export const METADATA_LEDGER_CONTRACT_ADDRESS =
  '0x770850Cc00a3accAd0Dc527022AD2fA084c576B9'

export const GSN_SC_RELAY = 'https://goerli.v3.relays.bwl.gg/'
export const VERIFY_URL = 'https://verify.sealcred.xyz'
export const POSTER_URL = 'https://poster.sealcred.xyz'
export const ZK_KETL_ALLOWMAPS = 'https://zk.ketl.xyz/#/allow-map'

export const ATTESTOR_PUBLIC_KEY =
  '3022588728262621016474471722865235652573366639695808085248430151628770415819'
export const ATTESTOR_EDDSA_PUBLIC_KEY =
  '4602787175697261409382197598473250464164410905837709881682647730492142844036'
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
