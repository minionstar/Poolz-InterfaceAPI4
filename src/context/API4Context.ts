import React from "react"
import type { IAPI4ProviderInitionalState } from "../types/IAPI4ProviderProps"

interface IAPI4Context {
  apiState: [IAPI4ProviderInitionalState, React.Dispatch<React.SetStateAction<IAPI4ProviderInitionalState>>]
}

const API4Context = React.createContext<IAPI4Context>(null as any)

export const useAPI4State = () => {
  return React.useContext(API4Context)
}

export default API4Context
