import React from "react"
import { useQuery, useLazyQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const GET_KYC_STATUS = gql(`
  query KYC {
    myProxyKYC {
      Proxy
      RequestStatus
      Status
    }
}`)

export const useGetKYCStatus = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account, privatTokenStatus } = State

  const privatTokenValue = account && localStorage.getItem(account)

  const skip = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  return useQuery(GET_KYC_STATUS, {
    skip,
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useLazyKYCStatus = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useLazyQuery(GET_KYC_STATUS, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
