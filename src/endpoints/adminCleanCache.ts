import { useContext } from "react"
import { useMutation } from "@apollo/client"
import { gql } from "../types/graphql"
import API4Context from "../context/API4Context"

const ADMIN_CLEAN_CACHE = gql(`
mutation AdminCleanCache {
  adminCleanCache {
    result {
      id
    }
    messages {
      code
      message
    }
    errors {
      code
      message
    }
    success
  }
}`)

export const useAdminCleanCache = () => {
  const authorizationToken = useAuthorizationToken()

  return useMutation(ADMIN_CLEAN_CACHE, {
    context: {
      headers: {
        Authorization: authorizationToken
      }
    }
  })
}

const useAuthorizationToken = () => {
  const {
    apiState: [state]
  } = useContext(API4Context)
  const { account } = state
  return account ? localStorage.getItem(account) : null
}
