import { useQuery } from '@apollo/client'
import { gql } from '../types/graphql'
import { DEFAULT_TOKEN } from '../constants'

const GET_DOWNLOADER = gql(`
  query Downloader {
  downloader {
    ChainId
    ChainName
    RpcUrl
    CovalentLastBlock
    SecondsToWarning
    SecondsToError
    BlockPerSecond
    Events {
      ContractAddress
      EventHash
      Active
      StartingBlock
      EndingBlock
      MaxBatchSize
      ResponseType
      MaxPageNumber
      UrlSet
      Mapping {
        Id
        Path
        Converter
        Name
      }
    }
  }
}`)

export const useGetDownloader = () => {
  return useQuery(GET_DOWNLOADER, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
