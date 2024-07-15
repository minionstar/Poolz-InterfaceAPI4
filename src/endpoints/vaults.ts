import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_VAULTS_QUERY = gql(`
    query Data($chainId: Int, $tokenAddress: String, $fetchBalance: Boolean) {
    vaults(chainId: $chainId, tokenAddress: $tokenAddress, fetchBalance: $fetchBalance) {
      Data {
        VaultId
        VaultAddress
        VaultCreationTx
        TokenAddress
        TokenName
        TokenSymbol
        TokenDecimals
        Balance {
          BalanceOfToken
          FetchTime
        }
      }
      ChainId
    }
  }
`)

type ChainIdType = number | null;
type TokenAddressType = string | null;
type FetchBalanceType = boolean | null;

export const useVaults = (
    chainId: ChainIdType,
    tokenAddress: TokenAddressType,
    fetchBalance: FetchBalanceType
  ) => {
  return useQuery(GET_VAULTS_QUERY, {
    variables: { chainId, tokenAddress, fetchBalance },
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  });
};