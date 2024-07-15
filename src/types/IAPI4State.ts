export enum EPrivatTokenStatus {
  NOT_REQUESTED,
  REQUESTED,
  RECEIVED
}

export interface IAPI4State {
  // User denied message signature
  userDenied: boolean
  privatTokenStatus: EPrivatTokenStatus
  privatTokenValue: string | null
  siwe: {
    eip4361message: string
    signature: string
  } | null
}
