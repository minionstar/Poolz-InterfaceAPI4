import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const GET_ADMIN_AUTO_SIGN_UP = gql(`
  query AdminAutoSignUp($note: String) {
    adminAutoSignUp(note: $note) {
      Address
      PoolzAmount
      Note
    }
  }`)

  const GET_ADMIN_AUTO_SIGN_UP_ALL = gql(`
  query AdminAutoSignUpAll{
    adminAutoSignUp{
      Address
      PoolzAmount
      Note
    }
  }`)

  const ADD_AUTO_SIGN_UP = gql(`
  mutation addAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {
    addAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {
      Address
      PoolzAmount
      Note
    }
  }`)

  const UPDATE_AUTO_SIGN_UP = gql(`
  mutation updateAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {
    updateAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {
      Address
      PoolzAmount
      Note
    }
  }`)

  const DELETE_AUTO_SIGN_UP = gql(`
  mutation deleteAutoSignUp($address: String!) {
    deleteAutoSignUp(address: $address) {
      Address
      PoolzAmount
      Note
    }
  }`)

  const getAuthorizationToken = () => {
    const { apiState: [state] } = React.useContext(API4Context);
    const { account } = state;
    return account ? localStorage.getItem(account) : null;
  };

  export const useGetAutoSignUp = (note: string) => {
    const { apiState: [state] } = React.useContext(API4Context)
    const { account, privatTokenStatus } = state
    const authorizationToken = account ? localStorage.getItem(account) : null
  
    const skipQuery = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  
    return useQuery(GET_ADMIN_AUTO_SIGN_UP, {
      skip: skipQuery,
      variables: { note },
      context: {
        headers: {
          Authorization: authorizationToken
        }
      }
    })
  }

  export const useGetAutoSignUpAll = () => {
    const { apiState: [state] } = React.useContext(API4Context)
    const { account, privatTokenStatus } = state
    const authorizationToken = account ? localStorage.getItem(account) : null

    const skipQuery = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  
    return useQuery(GET_ADMIN_AUTO_SIGN_UP_ALL, {
      skip: skipQuery,
      context: {
        headers: {
          Authorization: authorizationToken
        }
      }
    })
  }

  export const useAddAutoSignUp = (address: string, poolzAmount: number, note: string) => {
    const authorizationToken = getAuthorizationToken();

    return useMutation(ADD_AUTO_SIGN_UP, {
      variables: { address, poolzAmount, note },
      context: {
        headers: {
          Authorization: authorizationToken
        }
      }
    })
  }

  export const useUpdateAutoSignUp = (address: string, poolzAmount: number, note: string) => {
     const authorizationToken = getAuthorizationToken();

    return useMutation(UPDATE_AUTO_SIGN_UP, {
      variables: { address, poolzAmount, note },
      context: {
        headers: {
          Authorization: authorizationToken
        }
      }
    })
  }

  export const useDeleteAutoSignUp = (address: string) => {
    const authorizationToken = getAuthorizationToken();

    return useMutation(DELETE_AUTO_SIGN_UP, {
      variables: { address },
      context: {
        headers: {
          Authorization: authorizationToken
        }
      }
    })
  }