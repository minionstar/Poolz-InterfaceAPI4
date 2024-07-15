import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_STATUS = gql(`
query Status {
    status {
      ChainId
      ChainName
      RpcUrl
      CovalentLastBlock
      SecondsToWarning
      SecondsToError
      BlockPerSecond
      Events {
        Active
        StartingBlock
        EndingBlock
        ResponseType
      }
    }
  }`)

export const useStatus = () => {
  return useQuery(GET_STATUS, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
