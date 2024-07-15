import { DataOnAuth } from '../types/graphql/graphql'
import { gql } from '../types/graphql'
import { useQuery } from '@apollo/client'
import { DEFAULT_TOKEN } from "../constants"

const ON_BOARDING_DATA = gql(`
query OnboardingData($dataOnAuth: DataOnAuth!, $chatId:Long!) {
    onboardingData(dataOnAuth: $dataOnAuth, chatId: $chatId) {
      TokenAddress
      ChainId
      TokenTransfers {
          Amount
          TxHash
          Timestamp
      }
      TokenAllocations {
          StartDate
          FinishDate
          Ratio
      }
    }
}`)

export const useOnBoardingData = (dataOnAuth: DataOnAuth, chatId:number) => {
  return useQuery(ON_BOARDING_DATA, {
    variables: { dataOnAuth, chatId },
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}