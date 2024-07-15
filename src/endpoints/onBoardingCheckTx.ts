import { gql } from '../types/graphql'
import { useMutation } from "@apollo/client"
import { DEFAULT_TOKEN } from "../constants"

const ON_BOARDING_CHECK_TX = gql(`
  mutation OnboardingCheckTx($chatId:Long!, $dataOnAuth: DataOnAuth!, $tokenTransfer: OnboardingTokenTransfer!) {
    onboardingCheckTx(chatId: $chatId, dataOnAuth: $dataOnAuth, tokenTransfer: $tokenTransfer) {
      Success
      ErrorMessage
    }
}`)

export const useOnBoardingCheckTx = () => {
  return useMutation(ON_BOARDING_CHECK_TX, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}