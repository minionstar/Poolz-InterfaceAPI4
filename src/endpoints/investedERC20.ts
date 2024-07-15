import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const INVESTED_ERC20 = gql(`
  query InvestedErc20($investedErc20Id: Int!) {
  investedErc20(id: $investedErc20Id) {
    Wallet
    AmountIn
    TokenOut
  }
}`)

export const useInvestedERC20 = (investedErc20Id: number) => {
  return useQuery(INVESTED_ERC20, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      investedErc20Id
    }
  })
}