import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import API4Inner from "./API4Inner"
import API4Context from "../context/API4Context"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"
import type { IAPI4ProviderProps, IAPI4ProviderInitionalState } from "../types/IAPI4ProviderProps"

interface RequestError {
  code?: number
}

function isRequestError(x: unknown): x is RequestError {
  if (x && typeof x === "object" && "code" in x) {
    return true
  }
  return false
}

const API4Provider = ({ children, account, options: { siweCallBack, uri } }: IAPI4ProviderProps) => {

  const initionalAPI4pState: IAPI4ProviderInitionalState = {
    account: undefined,
    userDenied: false,
    privatTokenStatus: EPrivatTokenStatus.NOT_REQUESTED,
    siweResult: null
  }

  const apiState = React.useState(initionalAPI4pState)
  const [State, setState] = apiState

  const ProviderValues = React.useMemo(() => ({ apiState }), [apiState])

  const generatePrivatToken = React.useCallback(async () => {
    const { account, userDenied, privatTokenStatus } = State
    try {
      if (!userDenied && account && privatTokenStatus !== EPrivatTokenStatus.REQUESTED) {
        setState((state) => ({ ...state, privatTokenStatus: EPrivatTokenStatus.REQUESTED }))
        localStorage.removeItem(account)
        const siweResult = await siweCallBack()
        setState((state) => ({ ...state, siweResult }))
      }
    } catch (error) {
      if (isRequestError(error)) {
        if (!error.code || error.code === 4001) setState((state) => ({ ...state, userDenied: true }))
      }
    }
  }, [State, setState, siweCallBack])

  const errorLink = onError(({ networkError }) => {
    if (networkError &&
      'statusCode' in networkError &&
      networkError.statusCode === 401) generatePrivatToken()
  })

  const httpLink = new HttpLink({ uri })

  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
  })

  // Save account
  React.useEffect(() => {
    if (!account) return
    setState((state) => ({ ...state, account }))
  }, [account, setState])

  return (
    <API4Context.Provider value={ProviderValues}>
      <ApolloProvider client={client}>
        <API4Inner>{children}</API4Inner>
      </ApolloProvider>
    </API4Context.Provider>
  )
}

export default API4Provider