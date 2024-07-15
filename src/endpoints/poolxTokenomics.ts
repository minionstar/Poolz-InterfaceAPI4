import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_POOLX_TOKENMICS = gql(`
  query GetPoolxTokenomics {
    poolxTokenomics {
      CirculatingSupply
      Locked
      Data {
        TotalSupply
        BuyBack
        LockedDealV2
        DelayVault
        DelayVaultV2
        Reserved
      }
      Trade {
        Sum
        Huobi
        GateIO
        PancakeSwapV3_01
        PancakeSwapV3
        Mexc
      }
    }
  }
`)

export const usePoolxTokenomics = () => {
  return useQuery(GET_POOLX_TOKENMICS, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
