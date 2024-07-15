import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const SET_MY_AGREE = gql(`
  mutation setMyAgree {
    setMyAgree
}`)

const GET_MY_DATA = gql(`
  query MyData {
    myData {
        Agree
        NonEvmWallet {
            ChainName
            Wallet
        }
        EvmWallets
    }
}`)

const SET_EVM_WALLET = gql(`
  mutation AddEvmWallet($wallet: String!) {
    addEvmWallet(wallet: $wallet) {
      EvmWallet
    }
}`)

const DELETE_EVM_WALLET = gql(`
  mutation DeleteEvmWallet($wallet: String!) {
    deleteEvmWallet(wallet: $wallet) {
      EvmWallet
    }
}`)

const SET_NON_EVM_WALLET = gql(`
  mutation AddNonEvmWallet($chainName: String!, $wallet: String!) {
    addNonEvmWallet(chainName: $chainName, wallet: $wallet) {
      Agree
      NonEvmWallet {
        ChainName
        Wallet
      }
      EvmWallet
    }
}`)

const DELETE_NON_EVM_WALLET = gql(`
  mutation DeleteNonEvmWallet($chainName: String!) {
    deleteNonEvmWallet(chainName: $chainName) {
      Agree
      NonEvmWallet {
          ChainName
          Wallet
      }
    }
}`)

const UPDATE_NON_EVM_WALLET = gql(`
  mutation UpdateNonEvmWallet($chainName: String!, $wallet: String!) {
    updateNonEvmWallet(chainName: $chainName, wallet: $wallet) {
      Agree
      NonEvmWallet {
          ChainName
          Wallet
      }
    }
}`)

export const useAddEvmWallet = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(SET_EVM_WALLET, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
export const useDeleteEvmWallet = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(DELETE_EVM_WALLET, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useSetNonEvmWallet = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(SET_NON_EVM_WALLET, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useSetMyAgree = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(SET_MY_AGREE, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useMyData = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account, privatTokenStatus } = State

  const privatTokenValue = account && localStorage.getItem(account)

  const skip = privatTokenStatus === EPrivatTokenStatus.REQUESTED || !account
  return useQuery(GET_MY_DATA, {
    skip,
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useDeleteNonEvmWallet = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(DELETE_NON_EVM_WALLET, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

export const useUpdateNonEvmWallet = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(UPDATE_NON_EVM_WALLET, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}
