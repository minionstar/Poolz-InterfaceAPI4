import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_POOLX_PRICE = gql(`
  query PoolxPrice {
    poolxPrice {
        Price
        Timestamp
      }
  }`)

export const usePoolxPrice = () => {
  return useQuery(GET_POOLX_PRICE, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
