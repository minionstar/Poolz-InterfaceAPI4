import { gql } from '../types/graphql'
import { useMutation } from '@apollo/client'
import API4Context from '../context/API4Context'
import React from 'react'

const UPDATE_MAPPING = gql(`
  mutation UpdateMapping($updateMapping: MappingInput!, $updateMappingId: Int!) {
  updateMapping(updateMapping: $updateMapping, id: $updateMappingId)
}`)

export const useUpdateMapping = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(UPDATE_MAPPING, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
