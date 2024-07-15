import React from "react"
import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"
import { DEFAULT_TOKEN } from "../constants"

const SIGNUP = gql(`
  query Signup($signUpId: Int!) {
    signUp(id: $signUpId) {
      Address
      Amount
    }
}`)
const MY_SIGNUP = gql(`
  query MySignup {
    mySignup {
      SignupId
  }
}`)

export const useSignup = (signUpId: number) => {
  return useQuery(SIGNUP, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      signUpId
    }
  })
}

export const useMySignup = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account, privatTokenStatus } = State

  const privatTokenValue = account && localStorage.getItem(account)

  const skip = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  return useQuery(MY_SIGNUP, {
    skip,
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
