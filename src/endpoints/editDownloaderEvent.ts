import { gql } from '../types/graphql'
import { useMutation } from '@apollo/client'
import API4Context from '../context/API4Context'
import React from 'react'

const UPDATE_DOWNLOADER_EVENT = gql(`
  mutation UpdateDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {
  updateDownloaderEvent(chainId: $chainId, eventData: $eventData)
}`)

export const useUpdateDownloaderEvent = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(UPDATE_DOWNLOADER_EVENT, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

const DELETE_DOWNLOADER_EVENT = gql(`
  mutation DeleteDownloaderEvent($chainId: Int!, $contractAddress: String!, $eventHash: String!) {
  deleteDownloaderEvent(chainId: $chainId, contractAddress: $contractAddress, eventHash: $eventHash)
}`)

export const useDeleteDownloaderEvent = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(DELETE_DOWNLOADER_EVENT, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}

const CREATE_DOWNLOADER_EVENT = gql(`
  mutation AddDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {
  addDownloaderEvent(chainId: $chainId, eventData: $eventData)
}`)

export const useCreateDownloaderEvent = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation(CREATE_DOWNLOADER_EVENT, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}