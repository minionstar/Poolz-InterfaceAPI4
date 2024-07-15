import React from "react"
import { useQuery, useLazyQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const GET_MY_ROLE = gql(`
  query MyRole {
    myRole
}`)

export const useMyRole = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account, privatTokenStatus } = State

  const privatTokenValue = account && localStorage.getItem(account)

  const skip = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  return useQuery(GET_MY_ROLE, {
    skip,
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useLazyMyRole = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useLazyQuery(GET_MY_ROLE, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
