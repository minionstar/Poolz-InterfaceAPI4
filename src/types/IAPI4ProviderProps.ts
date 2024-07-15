export enum EPrivatTokenStatus {
  NOT_REQUESTED,
  REQUESTED,
  RECEIVED
}

type TSiwe = {
  eip4361message: string
  signature: string
}

export interface IAPI4ProviderProps {
  children: React.ReactNode
  account?: string
  options: {
    uri: string
    siweCallBack: () => Promise<TSiwe>
  }
}

export interface IAPI4ProviderInitionalState {
  account?: string
  userDenied: boolean
  privatTokenStatus: EPrivatTokenStatus
  siweResult: TSiwe | null
}
