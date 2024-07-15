import React from "react"
import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const GET_MY_SIGNUP_CHECK = gql(`
  query SignUpCheck($poolIDs: [Int!]!) {
    mySignUpCheck(poolIDs: $poolIDs) {
      PoolId
      SignUp
    }
  }`)

export const useMySignUpCheck = (poolIDs: number[]) => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account, privatTokenStatus } = State

  const privatTokenValue = account && localStorage.getItem(account)

  const skip = !poolIDs.length || privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  return useQuery(GET_MY_SIGNUP_CHECK, {
    skip,
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    },
    variables: {
      poolIDs
    }
  })
}
