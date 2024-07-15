import { useMutation } from "@apollo/client";
import API4Context from "context/API4Context";
import React from "react";
import { gql } from "../types/graphql"

const SET_MY_TELEGRAM = gql(`
  mutation MyLinkTelegram($dataOnAuth: DataOnAuth!) {
    myLinkTelegram(dataOnAuth: $dataOnAuth)
}`)

export const useSetMyTelegram = () => {
  const {
    apiState: [State]
  } = React.useContext(API4Context)
  const { account } = State

  const privatTokenValue = account && localStorage.getItem(account)

  return useMutation( SET_MY_TELEGRAM, {
    context: {
      headers: {
        Authorization: privatTokenValue
      }
    }
  })
}