import { gql } from '../types/graphql'
import { useQuery } from '@apollo/client'
import { DEFAULT_TOKEN } from '../constants'
import sha256 from 'crypto-js/sha256'

const TOKEN_INFO = gql(`
  query TokenInfo($hashKey: String!) {
    tokenInfo(hashKey: $hashKey) {
      Address
      ChainId
      Decimals
      Name
      Symbol
      TotalSupply
    }
  }
`)

export const useTokenInfo = (hashKey: string) => {
  return useQuery(TOKEN_INFO, {
    variables: { hashKey },
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}

export const useTokenInfoByChainAndAddress = (chainId: number, tokenAddress: string) => {
  const hashKey = sha256(`${chainId}-${tokenAddress}`).toString()
  return useTokenInfo(hashKey)
}