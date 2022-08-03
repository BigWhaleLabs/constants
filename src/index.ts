export const ETH_NETWORK = 'goerli'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'
export const EXTERNAL_SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x0DFDbE6284ed9B97AEcAef1c8cfFE00B46D94E71'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xE8130c7004430E882D3A49dF497C2Acb08612EC0'
export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0xCd990C45d0B794Bbb47Ad31Ee3567a36c0c872e0'
export const SC_EMAIL_POSTS = '0x93DfFe54D12dB10b495CdB078C76205D6b865c88'
export const SC_NFT_POSTS = '0x2f4bA78C72241c1353d011AfDd6Ca23F55c05d6e'
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
