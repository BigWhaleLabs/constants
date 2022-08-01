export const ETH_NETWORK = 'goerli'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'
export const EXTERNAL_SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x0DFDbE6284ed9B97AEcAef1c8cfFE00B46D94E71'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xE8130c7004430E882D3A49dF497C2Acb08612EC0'
export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0xCd990C45d0B794Bbb47Ad31Ee3567a36c0c872e0'
export const SC_EMAIL_POSTS = '0x589591327cF8230559b743c65ddC8d1D075eA2eF'
export const SC_NFT_POSTS = '0xB49A96b55417424c5c13eDb9dd923978265a0a40'
export const reservedContractMetadata = {
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
