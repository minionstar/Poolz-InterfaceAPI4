import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_SIMPLE_URL_SHORTENER = gql(`
query SimpleUrlShortener($input: TxHashChainIdInput!) {
  simpleUrlShortener(input: $input) {
    ShortUrl
    ContainerText
    UrlToScan
    XPostText
  }
}`)

export const useSimpleUrlShortener = (TxHash: string, ChainId: number) => {
  const skip = !TxHash
  return useQuery(GET_SIMPLE_URL_SHORTENER, {
    skip,
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      input: { TxHash, ChainId }
    }
  })
}
