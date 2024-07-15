import React from "react"
import API4Context from "../context/API4Context"
import { useGetGeneratedToken } from "../endpoints/getGeneratedToken"
import { EPrivatTokenStatus } from "../types/IAPI4ProviderProps"

const API4Inner = ({ children }: {
  children: React.ReactNode
}) => {
  const { apiState: [State, setState] } = React.useContext(API4Context)
  const { account, privatTokenStatus, siweResult } = State

  const [generateToken] = useGetGeneratedToken()

  React.useEffect(() => {
    if (!account || privatTokenStatus !== EPrivatTokenStatus.REQUESTED || !siweResult) return

    const load = async () => {
      const { data } = await generateToken({ variables: siweResult, fetchPolicy: "no-cache" })
      if (data?.generateTokenFromSignature) {
        localStorage.setItem(account, data.generateTokenFromSignature.token)
        setState((state) => ({ ...state, siweResult: null, privatTokenStatus: EPrivatTokenStatus.RECEIVED }))
      }
    }
    load()
  }, [account, privatTokenStatus, siweResult, generateToken])

  return <React.Fragment>{children}</React.Fragment>
}


export default API4Inner