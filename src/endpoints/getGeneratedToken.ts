import { useMutation } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_GENERATED_TOKEN = gql(`
mutation GenerateTokenFromSignature($eip4361message: String!, $signature: String!) {
  generateTokenFromSignature(eip4361message: $eip4361message, signature: $signature){
    token
    validUntil
  }
}`)

export const useGetGeneratedToken = () => {
  return useMutation(GET_GENERATED_TOKEN, {
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
