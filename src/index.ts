export const ETH_NETWORK = 'goerli'
export const ETH_RPC = 'https://goerli.sealcred.xyz/rpc'
export const ETH_RPC_MAINNET = 'https://eth.sealcred.xyz/rpc'
export const EXTERNAL_SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0x78941Ab71Be88cAF6A0749c10dEc315F7D9F6073'
export const SC_ERC721_LEDGER_CONTRACT_ADDRESS =
  '0xBaC9e2acB03bD6D37Efb2Ee24AF678F32651D3e2'
export const SC_EMAIL_LEDGER_CONTRACT_ADDRESS =
  '0x5f4B91Cc6da3593881Ef0dEF4937550114E24CCd'
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
