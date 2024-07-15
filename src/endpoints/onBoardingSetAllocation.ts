import { gql } from '../types/graphql'
import { useMutation } from '@apollo/client'
import { DEFAULT_TOKEN } from '../constants'

const ON_BOARDING_SET_ALLOCATION = gql(`
  mutation OnboardingSetAllocation($dataOnAuth: DataOnAuth!, $chatId: Long!, $tokenAllocation: [OnboardingTokenAllocation!]!, $chainId: Long!, $tokenAddress: String!) {
    onboardingSetAllocation(dataOnAuth: $dataOnAuth, chatId: $chatId, chainId: $chainId, tokenAddress: $tokenAddress, tokenAllocation: $tokenAllocation) {
      Success
      ErrorMessage
    }
}`)

export const useOnBoardingSetAllocation = () => {
  return useMutation(ON_BOARDING_SET_ALLOCATION, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}