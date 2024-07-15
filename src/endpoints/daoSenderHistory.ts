import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from '../constants'

const DAOSENDER_HISTORY = gql(`
  query DaoSenderHistory($page: Int!) {
    daoSenderHistory(page: $page) {
      items {
        ChainId
        TxHash
        Token
        UserCount
        TotalAmount
      }
      currentPage
      totalPages
    }
  }
`)


export const useDaoSenderHistory = (page: number) => {
  return useQuery(DAOSENDER_HISTORY, {
    variables: { page },
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}