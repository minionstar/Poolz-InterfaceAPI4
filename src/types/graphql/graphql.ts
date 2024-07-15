/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Long type */
  Long: { input: any; output: any; }
};

export type ActionRegistry = {
  __typename?: 'ActionRegistry';
  AccountId: Scalars['Int']['output'];
  ActionId: Scalars['Int']['output'];
  ActionType: Scalars['Int']['output'];
  ChainId: Scalars['Int']['output'];
  Data: Scalars['String']['output'];
  Details_GasLimit: Scalars['Int']['output'];
  Details_MaxGasPriceGwei: Scalars['Int']['output'];
  Details_Value: Scalars['Float']['output'];
  ToAddress: Scalars['String']['output'];
};

export type ActionSettings = {
  __typename?: 'ActionSettings';
  ActionId: Scalars['Int']['output'];
  FinishRunningTime: Scalars['String']['output'];
  RepeatCount: Scalars['Int']['output'];
  Repeatable: Scalars['Boolean']['output'];
  SettingsId: Scalars['Int']['output'];
  StartingRunningTime: Scalars['String']['output'];
};

export type AddChainInput = {
  BlockPerSecond: Scalars['Float']['input'];
  ChainId: Scalars['Int']['input'];
  ChainName: Scalars['String']['input'];
  DownloadTimeDelay: Scalars['Int']['input'];
  RpcUrl: Scalars['String']['input'];
  SecondsToError: Scalars['Int']['input'];
  SecondsToWarning: Scalars['Int']['input'];
};

export type AddMappingInput = {
  Converter: Scalars['String']['input'];
  DownloaderSettingsChainId: Scalars['Int']['input'];
  DownloaderSettingsContractAddress: Scalars['String']['input'];
  DownloaderSettingsEventHash: Scalars['String']['input'];
  Name: Scalars['String']['input'];
  Path: Scalars['String']['input'];
};

export type AdminAction = {
  __typename?: 'AdminAction';
  ActionRegistry: ActionRegistry;
  ActionSettings: ActionSettings;
};

export type AdminAddAction = {
  AccountId: Scalars['Int']['input'];
  ActionType?: InputMaybe<Scalars['Int']['input']>;
  ChainId: Scalars['Int']['input'];
  Data: Scalars['String']['input'];
  Details_GasLimit: Scalars['Int']['input'];
  Details_MaxGasPriceGwei: Scalars['Int']['input'];
  Details_Value: Scalars['Float']['input'];
  FinishRunningTime: Scalars['String']['input'];
  RepeatCount: Scalars['Int']['input'];
  Repeatable: Scalars['Boolean']['input'];
  StartingRunningTime: Scalars['String']['input'];
  ToAddress: Scalars['String']['input'];
};

export type AdminAutoSignUp = {
  __typename?: 'AdminAutoSignUp';
  Address: Scalars['String']['output'];
  Note: Scalars['String']['output'];
  PoolzAmount: Scalars['Float']['output'];
};

export type AdminKycProxy = {
  __typename?: 'AdminKycProxy';
  ApprovedDate?: Maybe<Scalars['String']['output']>;
  BlockPassID?: Maybe<Scalars['String']['output']>;
  InreviewDate?: Maybe<Scalars['String']['output']>;
  IsArchived?: Maybe<Scalars['Boolean']['output']>;
  RecordId: Scalars['String']['output'];
  RefId?: Maybe<Scalars['String']['output']>;
  Status: Scalars['String']['output'];
  SubmitCount?: Maybe<Scalars['Int']['output']>;
  WaitingDate?: Maybe<Scalars['String']['output']>;
};

export type AdminNonEvmWallet = {
  __typename?: 'AdminNonEvmWallet';
  EvmWallet: Scalars['String']['output'];
  NonEvmWallet: Scalars['String']['output'];
};

export type AdminUsers = {
  __typename?: 'AdminUsers';
  RoleId: Scalars['Int']['output'];
  Wallet: Scalars['String']['output'];
};

export type ApprovedContracts = {
  __typename?: 'ApprovedContracts';
  ContractAddress: Scalars['String']['output'];
  Status: Scalars['Boolean']['output'];
};

export type BoostProxy = {
  __typename?: 'BoostProxy';
  Actions: Scalars['Int']['output'];
  CampaignCode: Scalars['String']['output'];
  CampaignName: Scalars['String']['output'];
  DataKey: Scalars['String']['output'];
  Participants: Scalars['Int']['output'];
  TotalEntries: Scalars['Int']['output'];
  TotalUsers: Scalars['Int']['output'];
  Users: Array<BoostProxyUser>;
};

export type BoostProxyUser = {
  __typename?: 'BoostProxyUser';
  Address: Scalars['String']['output'];
  Entries: Scalars['Int']['output'];
};

export type CleanCache = {
  __typename?: 'CleanCache';
  errors: Array<CleanCacheError>;
  messages: Array<CleanCacheMessage>;
  result: CleanCacheResult;
  success: Scalars['Boolean']['output'];
};

export type CleanCacheError = {
  __typename?: 'CleanCacheError';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type CleanCacheMessage = {
  __typename?: 'CleanCacheMessage';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type CleanCacheResult = {
  __typename?: 'CleanCacheResult';
  id: Scalars['String']['output'];
};

export type DaoSenderHistory = {
  __typename?: 'DaoSenderHistory';
  ChainId: Scalars['Int']['output'];
  Token: Scalars['String']['output'];
  TotalAmount: Scalars['Float']['output'];
  TxHash: Scalars['String']['output'];
  UserCount: Scalars['Int']['output'];
};

export type DaoSenderHistoryPage = {
  __typename?: 'DaoSenderHistoryPage';
  currentPage: Scalars['Int']['output'];
  items?: Maybe<Array<DaoSenderHistory>>;
  totalPages: Scalars['Int']['output'];
};

export type DataOnAuth = {
  auth_date: Scalars['Long']['input'];
  first_name: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  id: Scalars['Long']['input'];
  last_name?: InputMaybe<Scalars['String']['input']>;
  photo_url?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Downloader = {
  __typename?: 'Downloader';
  BlockPerSecond: Scalars['Float']['output'];
  ChainId: Scalars['Int']['output'];
  ChainName: Scalars['String']['output'];
  CovalentLastBlock: Scalars['Int']['output'];
  DownloadTimeDelay: Scalars['Int']['output'];
  Events?: Maybe<Array<DownloaderEvents>>;
  RpcUrl: Scalars['String']['output'];
  SecondsToError: Scalars['Int']['output'];
  SecondsToWarning: Scalars['Int']['output'];
};

export type DownloaderEventInput = {
  Active: Scalars['Boolean']['input'];
  ContractAddress: Scalars['String']['input'];
  EndingBlock?: InputMaybe<Scalars['Int']['input']>;
  EventHash: Scalars['String']['input'];
  Key: Scalars['String']['input'];
  MaxBatchSize: Scalars['Int']['input'];
  MaxPageNumber?: InputMaybe<Scalars['Int']['input']>;
  ResponseType: Scalars['String']['input'];
  StartingBlock: Scalars['Int']['input'];
  UrlSet: Scalars['String']['input'];
};

export type DownloaderEvents = {
  __typename?: 'DownloaderEvents';
  Active: Scalars['Boolean']['output'];
  ContractAddress: Scalars['String']['output'];
  EndingBlock?: Maybe<Scalars['Int']['output']>;
  EventHash: Scalars['String']['output'];
  Mapping?: Maybe<Array<Mapping>>;
  MaxBatchSize: Scalars['Int']['output'];
  MaxPageNumber?: Maybe<Scalars['Int']['output']>;
  ResponseType: Scalars['String']['output'];
  StartingBlock: Scalars['Int']['output'];
  UrlSet: Scalars['String']['output'];
};

export type GenerateTokenFromSignature = {
  __typename?: 'GenerateTokenFromSignature';
  token: Scalars['String']['output'];
  validUntil: Scalars['Int']['output'];
};

export type InvestedErc20 = {
  __typename?: 'InvestedErc20';
  AmountIn: Scalars['Float']['output'];
  TokenOut: Scalars['Float']['output'];
  Wallet: Scalars['String']['output'];
};

export type KolInvestedErc20 = {
  __typename?: 'KolInvestedErc20';
  AmountIn: Scalars['Float']['output'];
  Name: Scalars['String']['output'];
  TokenOut: Scalars['Float']['output'];
  Wallet: Scalars['String']['output'];
};

export type Kyc = {
  __typename?: 'Kyc';
  data: KycData;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type KycData = {
  __typename?: 'KycData';
  approvedDate?: Maybe<Scalars['String']['output']>;
  blockPassID?: Maybe<Scalars['String']['output']>;
  inreviewDate?: Maybe<Scalars['String']['output']>;
  isArchived?: Maybe<Scalars['Boolean']['output']>;
  recordId?: Maybe<Scalars['String']['output']>;
  refId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  submitCount?: Maybe<Scalars['Int']['output']>;
  waitingDate?: Maybe<Scalars['String']['output']>;
};

export type KycProxy = {
  __typename?: 'KycProxy';
  Proxy?: Maybe<Scalars['String']['output']>;
  RequestStatus: Scalars['String']['output'];
  Status?: Maybe<Scalars['String']['output']>;
};

export type LeaderBoard = {
  __typename?: 'LeaderBoard';
  Amount: Scalars['Float']['output'];
  Owner: Scalars['String']['output'];
  Rank: Scalars['Int']['output'];
  VaultAmount: Scalars['Float']['output'];
};

export type Mapping = {
  __typename?: 'Mapping';
  Converter: Scalars['String']['output'];
  Id: Scalars['Int']['output'];
  Name: Scalars['String']['output'];
  Path: Scalars['String']['output'];
};

export type MappingInput = {
  Converter: Scalars['String']['input'];
  Name: Scalars['String']['input'];
  Path: Scalars['String']['input'];
};

export type MappingMutation = {
  __typename?: 'MappingMutation';
  Converter: Scalars['String']['output'];
  DownloaderSettingsChainId: Scalars['Int']['output'];
  DownloaderSettingsContractAddress: Scalars['String']['output'];
  DownloaderSettingsEventHash: Scalars['String']['output'];
  Id: Scalars['Int']['output'];
  Name: Scalars['String']['output'];
  Path: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAutoSignUp: AdminAutoSignUp;
  addChain: Downloader;
  addDownloaderEvent: Scalars['Boolean']['output'];
  addEvmWallet: UserData;
  addMapping: Scalars['Boolean']['output'];
  addNonEvmWallet: UserData;
  addUser: AdminUsers;
  adminAddAction: AdminAction;
  adminCleanCache: CleanCache;
  adminDeleteAction: Scalars['Boolean']['output'];
  adminUpdateAction: ActionSettings;
  deleteAutoSignUp: AdminAutoSignUp;
  deleteDownloaderEvent: Scalars['Boolean']['output'];
  deleteEvmWallet: UserData;
  deleteMapping: Scalars['Boolean']['output'];
  deleteNonEvmWallet: UserData;
  deleteUser: AdminUsers;
  generateTokenFromSignature: GenerateTokenFromSignature;
  logout: Scalars['Boolean']['output'];
  myLinkTelegram: Scalars['Int']['output'];
  onboardingCheckTx: OnboardingMutationsResponse;
  onboardingSetAllocation: OnboardingMutationsResponse;
  sendToMonitor: Scalars['Int']['output'];
  setMyAgree: Scalars['Boolean']['output'];
  updateAutoSignUp: AdminAutoSignUp;
  updateDownloaderEvent: Scalars['Boolean']['output'];
  updateEvmWallet: UserData;
  updateMapping: Scalars['Boolean']['output'];
  updateNonEvmWallet: UserData;
  updateUser: AdminUsers;
};


export type MutationAddAutoSignUpArgs = {
  address: Scalars['String']['input'];
  note: Scalars['String']['input'];
  poolzAmount: Scalars['Float']['input'];
};


export type MutationAddChainArgs = {
  addChainInput: AddChainInput;
};


export type MutationAddDownloaderEventArgs = {
  chainId: Scalars['Int']['input'];
  eventData: DownloaderEventInput;
};


export type MutationAddEvmWalletArgs = {
  wallet: Scalars['String']['input'];
};


export type MutationAddMappingArgs = {
  addMappingInput: AddMappingInput;
};


export type MutationAddNonEvmWalletArgs = {
  chainName: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationAddUserArgs = {
  roleId: Scalars['Int']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationAdminAddActionArgs = {
  action: AdminAddAction;
};


export type MutationAdminDeleteActionArgs = {
  settingsId: Scalars['Int']['input'];
};


export type MutationAdminUpdateActionArgs = {
  action: UpdateAction;
};


export type MutationDeleteAutoSignUpArgs = {
  address: Scalars['String']['input'];
};


export type MutationDeleteDownloaderEventArgs = {
  chainId: Scalars['Int']['input'];
  contractAddress: Scalars['String']['input'];
  eventHash: Scalars['String']['input'];
};


export type MutationDeleteEvmWalletArgs = {
  wallet: Scalars['String']['input'];
};


export type MutationDeleteMappingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteNonEvmWalletArgs = {
  chainName: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  wallet: Scalars['String']['input'];
};


export type MutationGenerateTokenFromSignatureArgs = {
  eip4361message: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};


export type MutationMyLinkTelegramArgs = {
  dataOnAuth: DataOnAuth;
};


export type MutationOnboardingCheckTxArgs = {
  chatId: Scalars['Long']['input'];
  dataOnAuth: DataOnAuth;
  tokenTransfer: OnboardingTokenTransfer;
};


export type MutationOnboardingSetAllocationArgs = {
  chainId: Scalars['Long']['input'];
  chatId: Scalars['Long']['input'];
  dataOnAuth: DataOnAuth;
  tokenAddress: Scalars['String']['input'];
  tokenAllocation: Array<OnboardingTokenAllocation>;
};


export type MutationSendToMonitorArgs = {
  input: Scalars['String']['input'];
};


export type MutationUpdateAutoSignUpArgs = {
  address: Scalars['String']['input'];
  note: Scalars['String']['input'];
  poolzAmount: Scalars['Float']['input'];
};


export type MutationUpdateDownloaderEventArgs = {
  chainId: Scalars['Int']['input'];
  eventData: DownloaderEventInput;
};


export type MutationUpdateEvmWalletArgs = {
  newWallet: Scalars['String']['input'];
  oldWallet: Scalars['String']['input'];
};


export type MutationUpdateMappingArgs = {
  id: Scalars['Int']['input'];
  updateMapping: MappingInput;
};


export type MutationUpdateNonEvmWalletArgs = {
  chainName: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  roleId: Scalars['Int']['input'];
  wallet: Scalars['String']['input'];
};

export type MyData = {
  __typename?: 'MyData';
  Agree: Scalars['Boolean']['output'];
  EvmWallets: Array<Scalars['String']['output']>;
  NonEvmWallet: Array<NonEvmWallet>;
};

export type MyInvestSum = {
  __typename?: 'MyInvestSum';
  DateOfFirstTx?: Maybe<Scalars['Int']['output']>;
  InvestedTx?: Maybe<Array<Scalars['String']['output']>>;
  SumOfAmountIn?: Maybe<Scalars['Float']['output']>;
  SumOfTokenOut?: Maybe<Scalars['Float']['output']>;
  TotalTokens?: Maybe<Scalars['Float']['output']>;
  UserAddress: Scalars['String']['output'];
  WithdrawnSum?: Maybe<Scalars['Float']['output']>;
  WithdrawnTx?: Maybe<Array<Scalars['String']['output']>>;
};

export type MySignUp = {
  __typename?: 'MySignUp';
  SignupId: Scalars['Int']['output'];
};

export type NonEvmWallet = {
  __typename?: 'NonEvmWallet';
  ChainName: Scalars['String']['output'];
  Wallet: Scalars['String']['output'];
};

export type OnboardingData_Data = {
  __typename?: 'OnboardingData_Data';
  ChainId: Scalars['Long']['output'];
  TokenAddress: Scalars['String']['output'];
  TokenAllocations: Array<OnboardingData_TokenAllocation>;
  TokenTransfers: Array<OnboardingData_TokenTransfer>;
};

export type OnboardingData_TokenAllocation = {
  __typename?: 'OnboardingData_TokenAllocation';
  FinishDate?: Maybe<Scalars['String']['output']>;
  Ratio: Scalars['Float']['output'];
  StartDate: Scalars['String']['output'];
};

export type OnboardingData_TokenTransfer = {
  __typename?: 'OnboardingData_TokenTransfer';
  Amount: Scalars['Float']['output'];
  Timestamp: Scalars['Long']['output'];
  TxHash: Scalars['String']['output'];
};

export type OnboardingData_Tokens = {
  __typename?: 'OnboardingData_Tokens';
  Amount: Scalars['Float']['output'];
  ChainId: Scalars['Long']['output'];
  TokenAddress: Scalars['String']['output'];
};

export type OnboardingMutationsResponse = {
  __typename?: 'OnboardingMutationsResponse';
  ErrorMessage?: Maybe<Scalars['String']['output']>;
  Success: Scalars['Boolean']['output'];
};

export type OnboardingProject = {
  __typename?: 'OnboardingProject';
  ChatId: Scalars['Long']['output'];
  ChatTitle?: Maybe<Scalars['String']['output']>;
};

export type OnboardingTokenAllocation = {
  FinishDate?: InputMaybe<Scalars['String']['input']>;
  Ratio: Scalars['Float']['input'];
  StartDate: Scalars['String']['input'];
};

export type OnboardingTokenTransfer = {
  ChainId: Scalars['Long']['input'];
  TokenAddress: Scalars['String']['input'];
  TxHash: Scalars['String']['input'];
};

export type PoolxPrice = {
  __typename?: 'PoolxPrice';
  Price: Scalars['Float']['output'];
  Timestamp: Scalars['Int']['output'];
};

export type PoolxTokenomics = {
  __typename?: 'PoolxTokenomics';
  CirculatingSupply: Scalars['Float']['output'];
  Data: PoolxTokenomicsData;
  Locked: Scalars['Float']['output'];
  Trade: PoolxTokenomicsTrade;
};

export type PoolxTokenomicsData = {
  __typename?: 'PoolxTokenomicsData';
  BuyBack: Scalars['Float']['output'];
  DelayVault: Scalars['Float']['output'];
  DelayVaultV2: Scalars['Float']['output'];
  LockedDealV2: Scalars['Float']['output'];
  Reserved: Scalars['Float']['output'];
  TotalSupply: Scalars['Float']['output'];
};

export type PoolxTokenomicsTrade = {
  __typename?: 'PoolxTokenomicsTrade';
  GateIO: Scalars['Float']['output'];
  Huobi: Scalars['Float']['output'];
  Mexc: Scalars['Float']['output'];
  PancakeSwapV2: Scalars['Float']['output'];
  PancakeSwapV3: Scalars['Float']['output'];
  PancakeSwapV3_01: Scalars['Float']['output'];
  Sum: Scalars['Float']['output'];
};

export type PutMyDataNonEvmWallet = {
  ChainName: Scalars['String']['input'];
  NonEvmWallet: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  adminAutoSignUp: Array<AdminAutoSignUp>;
  adminKycProxy: Array<AdminKycProxy>;
  adminNonEvmWallet: Array<AdminNonEvmWallet>;
  adminRpcWallets: Array<RpcWallet>;
  adminUsers: Array<AdminUsers>;
  approvedContracts: Array<ApprovedContracts>;
  boostProxy: Array<BoostProxy>;
  daoSenderHistory: DaoSenderHistoryPage;
  downloader: Array<Downloader>;
  investedErc20: Array<InvestedErc20>;
  kolInvestedErc20: Array<KolInvestedErc20>;
  leaderBoard: Array<LeaderBoard>;
  myData?: Maybe<MyData>;
  myInvestSum: MyInvestSum;
  /** @deprecated Use a new query 'myProxyKYC'. */
  myKYC: Kyc;
  myProxyKYC: KycProxy;
  myRole: Scalars['String']['output'];
  mySignUpCheck: Array<SignUpCheck>;
  mySignup: Array<MySignUp>;
  onboardingData: Array<OnboardingData_Data>;
  onboardingProjects: Array<OnboardingProject>;
  poolxPrice: PoolxPrice;
  poolxTokenomics: PoolxTokenomics;
  signUp: Array<SignUp>;
  signUpAllocation?: Maybe<Array<SignUpAllocation>>;
  signUpCheck: Array<SignUpCheck>;
  signUpList: Array<SignUpList>;
  signUpsTimes: Array<SignUpsTimes>;
  simpleUrlShortener?: Maybe<SimpleUrlShortener>;
  splitDataEncoder: Scalars['String']['output'];
  status: Array<Status>;
  time: Scalars['Int']['output'];
  tokenInfo?: Maybe<TokenInfo>;
  tokenRefunds: Array<TokenRefunds>;
  uniqueUsers: UniqueUsers;
  unlocks: Array<Unlocks>;
  /** @deprecated This endpoint is deprecated. */
  vaultOut: Array<VaultOut>;
  vaults: Array<Vaults>;
};


export type QueryAdminAutoSignUpArgs = {
  note?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminKycProxyArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAdminNonEvmWalletArgs = {
  chainName: Scalars['String']['input'];
};


export type QueryAdminRpcWalletsArgs = {
  IDs: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type QueryAdminUsersArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApprovedContractsArgs = {
  onlyApproved: Scalars['Boolean']['input'];
};


export type QueryBoostProxyArgs = {
  campaignCodes: Array<Scalars['String']['input']>;
};


export type QueryDaoSenderHistoryArgs = {
  page: Scalars['Int']['input'];
};


export type QueryInvestedErc20Args = {
  id: Scalars['Int']['input'];
};


export type QueryKolInvestedErc20Args = {
  id: Scalars['Int']['input'];
};


export type QueryLeaderBoardArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyDataArgs = {
  chainNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryMyInvestSumArgs = {
  projectId: Scalars['Int']['input'];
};


export type QueryMySignUpCheckArgs = {
  poolIDs: Array<Scalars['Int']['input']>;
};


export type QueryOnboardingDataArgs = {
  chatId: Scalars['Long']['input'];
  dataOnAuth: DataOnAuth;
};


export type QueryOnboardingProjectsArgs = {
  dataOnAuth: DataOnAuth;
};


export type QuerySignUpArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySignUpAllocationArgs = {
  bot: Scalars['Float']['input'];
  minamount: Scalars['Int']['input'];
  signupid: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  top: Scalars['Float']['input'];
  totalallocation: Scalars['Int']['input'];
  winnersratio: Scalars['Float']['input'];
};


export type QuerySignUpCheckArgs = {
  poolIDs: Array<Scalars['Int']['input']>;
  userAddress: Scalars['String']['input'];
};


export type QuerySignUpListArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySimpleUrlShortenerArgs = {
  input: TxHashChainIdInput;
};


export type QuerySplitDataEncoderArgs = {
  address: Scalars['String']['input'];
  ratio: Scalars['Float']['input'];
};


export type QueryTokenInfoArgs = {
  hashKey: Scalars['String']['input'];
};


export type QueryTokenRefundsArgs = {
  chainId: Scalars['Int']['input'];
  fromBlock?: InputMaybe<Scalars['Int']['input']>;
  newOwner?: InputMaybe<Scalars['String']['input']>;
  toBlock?: InputMaybe<Scalars['Int']['input']>;
  tokenAddress: Scalars['String']['input'];
};


export type QueryUnlocksArgs = {
  address: Scalars['String']['input'];
};


export type QueryVaultOutArgs = {
  fromBlock?: InputMaybe<Scalars['Int']['input']>;
  toBlock?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVaultsArgs = {
  chainId?: InputMaybe<Scalars['Int']['input']>;
  fetchBalance?: InputMaybe<Scalars['Boolean']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  updateTotalSupply?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RpcWallet = {
  __typename?: 'RpcWallet';
  Id: Scalars['Int']['output'];
  Wallet: Scalars['String']['output'];
};

export type SignUp = {
  __typename?: 'SignUp';
  Address: Scalars['String']['output'];
  Amount: Scalars['Float']['output'];
};

export type SignUpAllocation = {
  __typename?: 'SignUpAllocation';
  Address: Scalars['String']['output'];
  Allocation: Scalars['Float']['output'];
  Poolx: Scalars['Float']['output'];
  Rank: Scalars['Int']['output'];
};

export type SignUpCheck = {
  __typename?: 'SignUpCheck';
  PoolId: Scalars['Int']['output'];
  SignUp?: Maybe<Scalars['Boolean']['output']>;
};

export type SignUpList = {
  __typename?: 'SignUpList';
  Address: Scalars['String']['output'];
};

export type SignUpsTimes = {
  __typename?: 'SignUpsTimes';
  Address: Scalars['String']['output'];
  EndBlock?: Maybe<Scalars['Int']['output']>;
  EndTime?: Maybe<Scalars['String']['output']>;
  PoolId: Scalars['Int']['output'];
  StartBlock: Scalars['Int']['output'];
  StartTime: Scalars['String']['output'];
};

export type SimpleUrlShortener = {
  __typename?: 'SimpleUrlShortener';
  ContainerText: Scalars['String']['output'];
  ShortUrl: Scalars['String']['output'];
  UrlToScan: Scalars['String']['output'];
  XPostText: Scalars['String']['output'];
};

export type Status = {
  __typename?: 'Status';
  BlockPerSecond: Scalars['Float']['output'];
  ChainId: Scalars['Int']['output'];
  ChainName: Scalars['String']['output'];
  CovalentLastBlock: Scalars['Int']['output'];
  Events: Array<StatusEvents>;
  RpcUrl: Scalars['String']['output'];
  SecondsToError: Scalars['Int']['output'];
  SecondsToWarning: Scalars['Int']['output'];
};

export type StatusEvents = {
  __typename?: 'StatusEvents';
  Active: Scalars['Boolean']['output'];
  EndingBlock: Scalars['Int']['output'];
  ResponseType: Scalars['String']['output'];
  StartingBlock: Scalars['Int']['output'];
};

export type TokenInfo = {
  __typename?: 'TokenInfo';
  Address: Scalars['String']['output'];
  ChainId: Scalars['Long']['output'];
  Decimals: Scalars['Int']['output'];
  Name: Scalars['String']['output'];
  Symbol: Scalars['String']['output'];
  TotalSupply: Scalars['Float']['output'];
};

export type TokenRefunds = {
  __typename?: 'TokenRefunds';
  BlockHeight: Scalars['Int']['output'];
  BlockSignedAt: Scalars['String']['output'];
  ChainId: Scalars['Int']['output'];
  NewAmount: Scalars['Float']['output'];
  NewOwner: Scalars['String']['output'];
  NewPoolId: Scalars['Int']['output'];
  OldOwner: Scalars['String']['output'];
  OldPoolId: Scalars['Int']['output'];
  OriginalLeftAmount: Scalars['Float']['output'];
  TxHash: Scalars['String']['output'];
};

export type TxHashChainIdInput = {
  ChainId: Scalars['Int']['input'];
  TxHash: Scalars['String']['input'];
};

export type UniqueUsers = {
  __typename?: 'UniqueUsers';
  LDv2NewPoolCreated: Scalars['Int']['output'];
  LDv2TransferOut: Scalars['Int']['output'];
  SignUpPool: Scalars['Int']['output'];
  ThePoolzNewInvestorEvents: Scalars['Int']['output'];
  TotalUniqueUsers: Scalars['Int']['output'];
  VaultValuesChanged: Scalars['Int']['output'];
};

export type Unlocks = {
  __typename?: 'Unlocks';
  Timespan: Scalars['Int']['output'];
  Total: Scalars['Float']['output'];
};

export type UpdateAction = {
  FinishRunningTime: Scalars['String']['input'];
  RepeatCount: Scalars['Int']['input'];
  SettingsId: Scalars['Int']['input'];
  StartingRunningTime: Scalars['String']['input'];
};

export type UserData = {
  __typename?: 'UserData';
  Agree: Scalars['Boolean']['output'];
  EvmWallet: Array<Scalars['String']['output']>;
  NonEvmWallet: Array<NonEvmWallet>;
};

export type VaultOut = {
  __typename?: 'VaultOut';
  Amount: Scalars['Float']['output'];
  LockUntil: Scalars['String']['output'];
  Owner: Scalars['String']['output'];
};

export type Vaults = {
  __typename?: 'Vaults';
  ChainId: Scalars['Int']['output'];
  Data: Array<VaultsData>;
};

export type VaultsData = {
  __typename?: 'VaultsData';
  Balance?: Maybe<VaultsDataBalance>;
  TokenAddress: Scalars['String']['output'];
  TokenDecimals: Scalars['Int']['output'];
  TokenName: Scalars['String']['output'];
  TokenSymbol: Scalars['String']['output'];
  TotalSupply: Scalars['Float']['output'];
  VaultAddress: Scalars['String']['output'];
  VaultCreationTx: Scalars['String']['output'];
  VaultId: Scalars['Int']['output'];
};

export type VaultsDataBalance = {
  __typename?: 'VaultsDataBalance';
  BalanceOfToken: Scalars['Float']['output'];
  FetchTime: Scalars['Int']['output'];
};

export type AdminCleanCacheMutationVariables = Exact<{ [key: string]: never; }>;


export type AdminCleanCacheMutation = { __typename?: 'Mutation', adminCleanCache: { __typename?: 'CleanCache', success: boolean, result: { __typename?: 'CleanCacheResult', id: string }, messages: Array<{ __typename?: 'CleanCacheMessage', code: number, message: string }>, errors: Array<{ __typename?: 'CleanCacheError', code: number, message: string }> } };

export type GetApprovedContractsQueryVariables = Exact<{
  onlyApproved: Scalars['Boolean']['input'];
}>;


export type GetApprovedContractsQuery = { __typename?: 'Query', approvedContracts: Array<{ __typename?: 'ApprovedContracts', ContractAddress: string, Status: boolean }> };

export type AdminAutoSignUpQueryVariables = Exact<{
  note?: InputMaybe<Scalars['String']['input']>;
}>;


export type AdminAutoSignUpQuery = { __typename?: 'Query', adminAutoSignUp: Array<{ __typename?: 'AdminAutoSignUp', Address: string, PoolzAmount: number, Note: string }> };

export type AdminAutoSignUpAllQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminAutoSignUpAllQuery = { __typename?: 'Query', adminAutoSignUp: Array<{ __typename?: 'AdminAutoSignUp', Address: string, PoolzAmount: number, Note: string }> };

export type AddAutoSignUpMutationVariables = Exact<{
  address: Scalars['String']['input'];
  poolzAmount: Scalars['Float']['input'];
  note: Scalars['String']['input'];
}>;


export type AddAutoSignUpMutation = { __typename?: 'Mutation', addAutoSignUp: { __typename?: 'AdminAutoSignUp', Address: string, PoolzAmount: number, Note: string } };

export type UpdateAutoSignUpMutationVariables = Exact<{
  address: Scalars['String']['input'];
  poolzAmount: Scalars['Float']['input'];
  note: Scalars['String']['input'];
}>;


export type UpdateAutoSignUpMutation = { __typename?: 'Mutation', updateAutoSignUp: { __typename?: 'AdminAutoSignUp', Address: string, PoolzAmount: number, Note: string } };

export type DeleteAutoSignUpMutationVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type DeleteAutoSignUpMutation = { __typename?: 'Mutation', deleteAutoSignUp: { __typename?: 'AdminAutoSignUp', Address: string, PoolzAmount: number, Note: string } };

export type BoostProxyDataQueryVariables = Exact<{
  campaignCodes: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BoostProxyDataQuery = { __typename?: 'Query', boostProxy: Array<{ __typename?: 'BoostProxy', Actions: number, Participants: number, TotalUsers: number, DataKey: string, CampaignName: string, TotalEntries: number, CampaignCode: string }> };

export type BoostProxyUsersQueryVariables = Exact<{
  campaignCodes: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BoostProxyUsersQuery = { __typename?: 'Query', boostProxy: Array<{ __typename?: 'BoostProxy', Actions: number, Participants: number, TotalUsers: number, CampaignName: string, TotalEntries: number, CampaignCode: string, DataKey: string, Users: Array<{ __typename?: 'BoostProxyUser', Address: string, Entries: number }> }> };

export type DaoSenderHistoryQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type DaoSenderHistoryQuery = { __typename?: 'Query', daoSenderHistory: { __typename?: 'DaoSenderHistoryPage', currentPage: number, totalPages: number, items?: Array<{ __typename?: 'DaoSenderHistory', ChainId: number, TxHash: string, Token: string, UserCount: number, TotalAmount: number }> | null } };

export type UpdateDownloaderEventMutationVariables = Exact<{
  chainId: Scalars['Int']['input'];
  eventData: DownloaderEventInput;
}>;


export type UpdateDownloaderEventMutation = { __typename?: 'Mutation', updateDownloaderEvent: boolean };

export type DeleteDownloaderEventMutationVariables = Exact<{
  chainId: Scalars['Int']['input'];
  contractAddress: Scalars['String']['input'];
  eventHash: Scalars['String']['input'];
}>;


export type DeleteDownloaderEventMutation = { __typename?: 'Mutation', deleteDownloaderEvent: boolean };

export type AddDownloaderEventMutationVariables = Exact<{
  chainId: Scalars['Int']['input'];
  eventData: DownloaderEventInput;
}>;


export type AddDownloaderEventMutation = { __typename?: 'Mutation', addDownloaderEvent: boolean };

export type UpdateMappingMutationVariables = Exact<{
  updateMapping: MappingInput;
  updateMappingId: Scalars['Int']['input'];
}>;


export type UpdateMappingMutation = { __typename?: 'Mutation', updateMapping: boolean };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', time: number };

export type DownloaderQueryVariables = Exact<{ [key: string]: never; }>;


export type DownloaderQuery = { __typename?: 'Query', downloader: Array<{ __typename?: 'Downloader', ChainId: number, ChainName: string, RpcUrl: string, CovalentLastBlock: number, SecondsToWarning: number, SecondsToError: number, BlockPerSecond: number, Events?: Array<{ __typename?: 'DownloaderEvents', ContractAddress: string, EventHash: string, Active: boolean, StartingBlock: number, EndingBlock?: number | null, MaxBatchSize: number, ResponseType: string, MaxPageNumber?: number | null, UrlSet: string, Mapping?: Array<{ __typename?: 'Mapping', Id: number, Path: string, Converter: string, Name: string }> | null }> | null }> };

export type GenerateTokenFromSignatureMutationVariables = Exact<{
  eip4361message: Scalars['String']['input'];
  signature: Scalars['String']['input'];
}>;


export type GenerateTokenFromSignatureMutation = { __typename?: 'Mutation', generateTokenFromSignature: { __typename?: 'GenerateTokenFromSignature', token: string, validUntil: number } };

export type InvestedErc20QueryVariables = Exact<{
  investedErc20Id: Scalars['Int']['input'];
}>;


export type InvestedErc20Query = { __typename?: 'Query', investedErc20: Array<{ __typename?: 'InvestedErc20', Wallet: string, AmountIn: number, TokenOut: number }> };

export type GetLeaderboardByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetLeaderboardByAddressQuery = { __typename?: 'Query', leaderBoard: Array<{ __typename?: 'LeaderBoard', Amount: number, Owner: string, Rank: number }> };

export type GetLeaderboardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaderboardQuery = { __typename?: 'Query', leaderBoard: Array<{ __typename?: 'LeaderBoard', Rank: number, Owner: string, Amount: number }> };

export type SetMyAgreeMutationVariables = Exact<{ [key: string]: never; }>;


export type SetMyAgreeMutation = { __typename?: 'Mutation', setMyAgree: boolean };

export type MyDataQueryVariables = Exact<{ [key: string]: never; }>;


export type MyDataQuery = { __typename?: 'Query', myData?: { __typename?: 'MyData', Agree: boolean, EvmWallets: Array<string>, NonEvmWallet: Array<{ __typename?: 'NonEvmWallet', ChainName: string, Wallet: string }> } | null };

export type AddEvmWalletMutationVariables = Exact<{
  wallet: Scalars['String']['input'];
}>;


export type AddEvmWalletMutation = { __typename?: 'Mutation', addEvmWallet: { __typename?: 'UserData', EvmWallet: Array<string> } };

export type DeleteEvmWalletMutationVariables = Exact<{
  wallet: Scalars['String']['input'];
}>;


export type DeleteEvmWalletMutation = { __typename?: 'Mutation', deleteEvmWallet: { __typename?: 'UserData', EvmWallet: Array<string> } };

export type AddNonEvmWalletMutationVariables = Exact<{
  chainName: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
}>;


export type AddNonEvmWalletMutation = { __typename?: 'Mutation', addNonEvmWallet: { __typename?: 'UserData', Agree: boolean, EvmWallet: Array<string>, NonEvmWallet: Array<{ __typename?: 'NonEvmWallet', ChainName: string, Wallet: string }> } };

export type DeleteNonEvmWalletMutationVariables = Exact<{
  chainName: Scalars['String']['input'];
}>;


export type DeleteNonEvmWalletMutation = { __typename?: 'Mutation', deleteNonEvmWallet: { __typename?: 'UserData', Agree: boolean, NonEvmWallet: Array<{ __typename?: 'NonEvmWallet', ChainName: string, Wallet: string }> } };

export type UpdateNonEvmWalletMutationVariables = Exact<{
  chainName: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
}>;


export type UpdateNonEvmWalletMutation = { __typename?: 'Mutation', updateNonEvmWallet: { __typename?: 'UserData', Agree: boolean, NonEvmWallet: Array<{ __typename?: 'NonEvmWallet', ChainName: string, Wallet: string }> } };

export type MyLinkTelegramMutationVariables = Exact<{
  dataOnAuth: DataOnAuth;
}>;


export type MyLinkTelegramMutation = { __typename?: 'Mutation', myLinkTelegram: number };

export type KycQueryVariables = Exact<{ [key: string]: never; }>;


export type KycQuery = { __typename?: 'Query', myProxyKYC: { __typename?: 'KycProxy', Proxy?: string | null, RequestStatus: string, Status?: string | null } };

export type MyRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type MyRoleQuery = { __typename?: 'Query', myRole: string };

export type SignUpCheckQueryVariables = Exact<{
  poolIDs: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type SignUpCheckQuery = { __typename?: 'Query', mySignUpCheck: Array<{ __typename?: 'SignUpCheck', PoolId: number, SignUp?: boolean | null }> };

export type OnboardingCheckTxMutationVariables = Exact<{
  chatId: Scalars['Long']['input'];
  dataOnAuth: DataOnAuth;
  tokenTransfer: OnboardingTokenTransfer;
}>;


export type OnboardingCheckTxMutation = { __typename?: 'Mutation', onboardingCheckTx: { __typename?: 'OnboardingMutationsResponse', Success: boolean, ErrorMessage?: string | null } };

export type OnboardingDataQueryVariables = Exact<{
  dataOnAuth: DataOnAuth;
  chatId: Scalars['Long']['input'];
}>;


export type OnboardingDataQuery = { __typename?: 'Query', onboardingData: Array<{ __typename?: 'OnboardingData_Data', TokenAddress: string, ChainId: any, TokenTransfers: Array<{ __typename?: 'OnboardingData_TokenTransfer', Amount: number, TxHash: string, Timestamp: any }>, TokenAllocations: Array<{ __typename?: 'OnboardingData_TokenAllocation', StartDate: string, FinishDate?: string | null, Ratio: number }> }> };

export type OnboardingProjectsQueryVariables = Exact<{
  dataOnAuth: DataOnAuth;
}>;


export type OnboardingProjectsQuery = { __typename?: 'Query', onboardingProjects: Array<{ __typename?: 'OnboardingProject', ChatId: any, ChatTitle?: string | null }> };

export type OnboardingSetAllocationMutationVariables = Exact<{
  dataOnAuth: DataOnAuth;
  chatId: Scalars['Long']['input'];
  tokenAllocation: Array<OnboardingTokenAllocation> | OnboardingTokenAllocation;
  chainId: Scalars['Long']['input'];
  tokenAddress: Scalars['String']['input'];
}>;


export type OnboardingSetAllocationMutation = { __typename?: 'Mutation', onboardingSetAllocation: { __typename?: 'OnboardingMutationsResponse', Success: boolean, ErrorMessage?: string | null } };

export type PoolxPriceQueryVariables = Exact<{ [key: string]: never; }>;


export type PoolxPriceQuery = { __typename?: 'Query', poolxPrice: { __typename?: 'PoolxPrice', Price: number, Timestamp: number } };

export type GetPoolxTokenomicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPoolxTokenomicsQuery = { __typename?: 'Query', poolxTokenomics: { __typename?: 'PoolxTokenomics', CirculatingSupply: number, Locked: number, Data: { __typename?: 'PoolxTokenomicsData', TotalSupply: number, BuyBack: number, LockedDealV2: number, DelayVault: number, DelayVaultV2: number, Reserved: number }, Trade: { __typename?: 'PoolxTokenomicsTrade', Sum: number, Huobi: number, GateIO: number, PancakeSwapV3_01: number, PancakeSwapV3: number, Mexc: number } } };

export type SignupQueryVariables = Exact<{
  signUpId: Scalars['Int']['input'];
}>;


export type SignupQuery = { __typename?: 'Query', signUp: Array<{ __typename?: 'SignUp', Address: string, Amount: number }> };

export type MySignupQueryVariables = Exact<{ [key: string]: never; }>;


export type MySignupQuery = { __typename?: 'Query', mySignup: Array<{ __typename?: 'MySignUp', SignupId: number }> };

export type SimpleUrlShortenerQueryVariables = Exact<{
  input: TxHashChainIdInput;
}>;


export type SimpleUrlShortenerQuery = { __typename?: 'Query', simpleUrlShortener?: { __typename?: 'SimpleUrlShortener', ShortUrl: string, ContainerText: string, UrlToScan: string, XPostText: string } | null };

export type StatusQueryVariables = Exact<{ [key: string]: never; }>;


export type StatusQuery = { __typename?: 'Query', status: Array<{ __typename?: 'Status', ChainId: number, ChainName: string, RpcUrl: string, CovalentLastBlock: number, SecondsToWarning: number, SecondsToError: number, BlockPerSecond: number, Events: Array<{ __typename?: 'StatusEvents', Active: boolean, StartingBlock: number, EndingBlock: number, ResponseType: string }> }> };

export type TokenInfoQueryVariables = Exact<{
  hashKey: Scalars['String']['input'];
}>;


export type TokenInfoQuery = { __typename?: 'Query', tokenInfo?: { __typename?: 'TokenInfo', Address: string, ChainId: any, Decimals: number, Name: string, Symbol: string, TotalSupply: number } | null };

export type DataQueryVariables = Exact<{
  chainId?: InputMaybe<Scalars['Int']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  fetchBalance?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type DataQuery = { __typename?: 'Query', vaults: Array<{ __typename?: 'Vaults', ChainId: number, Data: Array<{ __typename?: 'VaultsData', VaultId: number, VaultAddress: string, VaultCreationTx: string, TokenAddress: string, TokenName: string, TokenSymbol: string, TokenDecimals: number, Balance?: { __typename?: 'VaultsDataBalance', BalanceOfToken: number, FetchTime: number } | null }> }> };


export const AdminCleanCacheDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AdminCleanCache"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminCleanCache"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<AdminCleanCacheMutation, AdminCleanCacheMutationVariables>;
export const GetApprovedContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApprovedContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"onlyApproved"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approvedContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"onlyApproved"},"value":{"kind":"Variable","name":{"kind":"Name","value":"onlyApproved"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}}]}}]}}]} as unknown as DocumentNode<GetApprovedContractsQuery, GetApprovedContractsQueryVariables>;
export const AdminAutoSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminAutoSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminAutoSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"PoolzAmount"}},{"kind":"Field","name":{"kind":"Name","value":"Note"}}]}}]}}]} as unknown as DocumentNode<AdminAutoSignUpQuery, AdminAutoSignUpQueryVariables>;
export const AdminAutoSignUpAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AdminAutoSignUpAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adminAutoSignUp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"PoolzAmount"}},{"kind":"Field","name":{"kind":"Name","value":"Note"}}]}}]}}]} as unknown as DocumentNode<AdminAutoSignUpAllQuery, AdminAutoSignUpAllQueryVariables>;
export const AddAutoSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addAutoSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolzAmount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAutoSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"poolzAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolzAmount"}}},{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"PoolzAmount"}},{"kind":"Field","name":{"kind":"Name","value":"Note"}}]}}]}}]} as unknown as DocumentNode<AddAutoSignUpMutation, AddAutoSignUpMutationVariables>;
export const UpdateAutoSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAutoSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolzAmount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAutoSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"poolzAmount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolzAmount"}}},{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"PoolzAmount"}},{"kind":"Field","name":{"kind":"Name","value":"Note"}}]}}]}}]} as unknown as DocumentNode<UpdateAutoSignUpMutation, UpdateAutoSignUpMutationVariables>;
export const DeleteAutoSignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAutoSignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAutoSignUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"PoolzAmount"}},{"kind":"Field","name":{"kind":"Name","value":"Note"}}]}}]}}]} as unknown as DocumentNode<DeleteAutoSignUpMutation, DeleteAutoSignUpMutationVariables>;
export const BoostProxyDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BoostProxyData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignCodes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boostProxy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignCodes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignCodes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Actions"}},{"kind":"Field","name":{"kind":"Name","value":"Participants"}},{"kind":"Field","name":{"kind":"Name","value":"TotalUsers"}},{"kind":"Field","name":{"kind":"Name","value":"DataKey"}},{"kind":"Field","name":{"kind":"Name","value":"CampaignName"}},{"kind":"Field","name":{"kind":"Name","value":"TotalEntries"}},{"kind":"Field","name":{"kind":"Name","value":"CampaignCode"}}]}}]}}]} as unknown as DocumentNode<BoostProxyDataQuery, BoostProxyDataQueryVariables>;
export const BoostProxyUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BoostProxyUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignCodes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boostProxy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignCodes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignCodes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Actions"}},{"kind":"Field","name":{"kind":"Name","value":"Participants"}},{"kind":"Field","name":{"kind":"Name","value":"TotalUsers"}},{"kind":"Field","name":{"kind":"Name","value":"CampaignName"}},{"kind":"Field","name":{"kind":"Name","value":"TotalEntries"}},{"kind":"Field","name":{"kind":"Name","value":"CampaignCode"}},{"kind":"Field","name":{"kind":"Name","value":"DataKey"}},{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"Entries"}}]}}]}}]}}]} as unknown as DocumentNode<BoostProxyUsersQuery, BoostProxyUsersQueryVariables>;
export const DaoSenderHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DaoSenderHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daoSenderHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainId"}},{"kind":"Field","name":{"kind":"Name","value":"TxHash"}},{"kind":"Field","name":{"kind":"Name","value":"Token"}},{"kind":"Field","name":{"kind":"Name","value":"UserCount"}},{"kind":"Field","name":{"kind":"Name","value":"TotalAmount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<DaoSenderHistoryQuery, DaoSenderHistoryQueryVariables>;
export const UpdateDownloaderEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDownloaderEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DownloaderEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDownloaderEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}}},{"kind":"Argument","name":{"kind":"Name","value":"eventData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventData"}}}]}]}}]} as unknown as DocumentNode<UpdateDownloaderEventMutation, UpdateDownloaderEventMutationVariables>;
export const DeleteDownloaderEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDownloaderEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDownloaderEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contractAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contractAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"eventHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventHash"}}}]}]}}]} as unknown as DocumentNode<DeleteDownloaderEventMutation, DeleteDownloaderEventMutationVariables>;
export const AddDownloaderEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDownloaderEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DownloaderEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDownloaderEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}}},{"kind":"Argument","name":{"kind":"Name","value":"eventData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventData"}}}]}]}}]} as unknown as DocumentNode<AddDownloaderEventMutation, AddDownloaderEventMutationVariables>;
export const UpdateMappingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMapping"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMapping"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MappingInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateMappingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMapping"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateMapping"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMapping"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateMappingId"}}}]}]}}]} as unknown as DocumentNode<UpdateMappingMutation, UpdateMappingMutationVariables>;
export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"time"}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;
export const DownloaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Downloader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"downloader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainId"}},{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"RpcUrl"}},{"kind":"Field","name":{"kind":"Name","value":"CovalentLastBlock"}},{"kind":"Field","name":{"kind":"Name","value":"SecondsToWarning"}},{"kind":"Field","name":{"kind":"Name","value":"SecondsToError"}},{"kind":"Field","name":{"kind":"Name","value":"BlockPerSecond"}},{"kind":"Field","name":{"kind":"Name","value":"Events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"EventHash"}},{"kind":"Field","name":{"kind":"Name","value":"Active"}},{"kind":"Field","name":{"kind":"Name","value":"StartingBlock"}},{"kind":"Field","name":{"kind":"Name","value":"EndingBlock"}},{"kind":"Field","name":{"kind":"Name","value":"MaxBatchSize"}},{"kind":"Field","name":{"kind":"Name","value":"ResponseType"}},{"kind":"Field","name":{"kind":"Name","value":"MaxPageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"UrlSet"}},{"kind":"Field","name":{"kind":"Name","value":"Mapping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"Path"}},{"kind":"Field","name":{"kind":"Name","value":"Converter"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DownloaderQuery, DownloaderQueryVariables>;
export const GenerateTokenFromSignatureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateTokenFromSignature"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eip4361message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signature"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateTokenFromSignature"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"eip4361message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eip4361message"}}},{"kind":"Argument","name":{"kind":"Name","value":"signature"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signature"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]} as unknown as DocumentNode<GenerateTokenFromSignatureMutation, GenerateTokenFromSignatureMutationVariables>;
export const InvestedErc20Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InvestedErc20"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"investedErc20Id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"investedErc20"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"investedErc20Id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Wallet"}},{"kind":"Field","name":{"kind":"Name","value":"AmountIn"}},{"kind":"Field","name":{"kind":"Name","value":"TokenOut"}}]}}]}}]} as unknown as DocumentNode<InvestedErc20Query, InvestedErc20QueryVariables>;
export const GetLeaderboardByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLeaderboardByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Amount"}},{"kind":"Field","name":{"kind":"Name","value":"Owner"}},{"kind":"Field","name":{"kind":"Name","value":"Rank"}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardByAddressQuery, GetLeaderboardByAddressQueryVariables>;
export const GetLeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLeaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaderBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Rank"}},{"kind":"Field","name":{"kind":"Name","value":"Owner"}},{"kind":"Field","name":{"kind":"Name","value":"Amount"}}]}}]}}]} as unknown as DocumentNode<GetLeaderboardQuery, GetLeaderboardQueryVariables>;
export const SetMyAgreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setMyAgree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setMyAgree"}}]}}]} as unknown as DocumentNode<SetMyAgreeMutation, SetMyAgreeMutationVariables>;
export const MyDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Agree"}},{"kind":"Field","name":{"kind":"Name","value":"NonEvmWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"Wallet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EvmWallets"}}]}}]}}]} as unknown as DocumentNode<MyDataQuery, MyDataQueryVariables>;
export const AddEvmWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEvmWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEvmWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EvmWallet"}}]}}]}}]} as unknown as DocumentNode<AddEvmWalletMutation, AddEvmWalletMutationVariables>;
export const DeleteEvmWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEvmWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEvmWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"wallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EvmWallet"}}]}}]}}]} as unknown as DocumentNode<DeleteEvmWalletMutation, DeleteEvmWalletMutationVariables>;
export const AddNonEvmWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNonEvmWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNonEvmWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}}},{"kind":"Argument","name":{"kind":"Name","value":"wallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Agree"}},{"kind":"Field","name":{"kind":"Name","value":"NonEvmWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"Wallet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EvmWallet"}}]}}]}}]} as unknown as DocumentNode<AddNonEvmWalletMutation, AddNonEvmWalletMutationVariables>;
export const DeleteNonEvmWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteNonEvmWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNonEvmWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Agree"}},{"kind":"Field","name":{"kind":"Name","value":"NonEvmWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"Wallet"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteNonEvmWalletMutation, DeleteNonEvmWalletMutationVariables>;
export const UpdateNonEvmWalletDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNonEvmWallet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNonEvmWallet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainName"}}},{"kind":"Argument","name":{"kind":"Name","value":"wallet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wallet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Agree"}},{"kind":"Field","name":{"kind":"Name","value":"NonEvmWallet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"Wallet"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateNonEvmWalletMutation, UpdateNonEvmWalletMutationVariables>;
export const MyLinkTelegramDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MyLinkTelegram"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataOnAuth"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myLinkTelegram"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataOnAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}}}]}]}}]} as unknown as DocumentNode<MyLinkTelegramMutation, MyLinkTelegramMutationVariables>;
export const KycDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KYC"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myProxyKYC"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Proxy"}},{"kind":"Field","name":{"kind":"Name","value":"RequestStatus"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}}]}}]}}]} as unknown as DocumentNode<KycQuery, KycQueryVariables>;
export const MyRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myRole"}}]}}]} as unknown as DocumentNode<MyRoleQuery, MyRoleQueryVariables>;
export const SignUpCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SignUpCheck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poolIDs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mySignUpCheck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"poolIDs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poolIDs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PoolId"}},{"kind":"Field","name":{"kind":"Name","value":"SignUp"}}]}}]}}]} as unknown as DocumentNode<SignUpCheckQuery, SignUpCheckQueryVariables>;
export const OnboardingCheckTxDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnboardingCheckTx"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataOnAuth"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenTransfer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnboardingTokenTransfer"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardingCheckTx"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"dataOnAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenTransfer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenTransfer"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Success"}},{"kind":"Field","name":{"kind":"Name","value":"ErrorMessage"}}]}}]}}]} as unknown as DocumentNode<OnboardingCheckTxMutation, OnboardingCheckTxMutationVariables>;
export const OnboardingDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OnboardingData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataOnAuth"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardingData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataOnAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}}},{"kind":"Argument","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TokenAddress"}},{"kind":"Field","name":{"kind":"Name","value":"ChainId"}},{"kind":"Field","name":{"kind":"Name","value":"TokenTransfers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Amount"}},{"kind":"Field","name":{"kind":"Name","value":"TxHash"}},{"kind":"Field","name":{"kind":"Name","value":"Timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TokenAllocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StartDate"}},{"kind":"Field","name":{"kind":"Name","value":"FinishDate"}},{"kind":"Field","name":{"kind":"Name","value":"Ratio"}}]}}]}}]}}]} as unknown as DocumentNode<OnboardingDataQuery, OnboardingDataQueryVariables>;
export const OnboardingProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OnboardingProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataOnAuth"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardingProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataOnAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChatId"}},{"kind":"Field","name":{"kind":"Name","value":"ChatTitle"}}]}}]}}]} as unknown as DocumentNode<OnboardingProjectsQuery, OnboardingProjectsQueryVariables>;
export const OnboardingSetAllocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OnboardingSetAllocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DataOnAuth"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenAllocation"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OnboardingTokenAllocation"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardingSetAllocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dataOnAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dataOnAuth"}}},{"kind":"Argument","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"chainId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenAllocation"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenAllocation"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Success"}},{"kind":"Field","name":{"kind":"Name","value":"ErrorMessage"}}]}}]}}]} as unknown as DocumentNode<OnboardingSetAllocationMutation, OnboardingSetAllocationMutationVariables>;
export const PoolxPriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PoolxPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolxPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Price"}},{"kind":"Field","name":{"kind":"Name","value":"Timestamp"}}]}}]}}]} as unknown as DocumentNode<PoolxPriceQuery, PoolxPriceQueryVariables>;
export const GetPoolxTokenomicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolxTokenomics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poolxTokenomics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CirculatingSupply"}},{"kind":"Field","name":{"kind":"Name","value":"Locked"}},{"kind":"Field","name":{"kind":"Name","value":"Data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TotalSupply"}},{"kind":"Field","name":{"kind":"Name","value":"BuyBack"}},{"kind":"Field","name":{"kind":"Name","value":"LockedDealV2"}},{"kind":"Field","name":{"kind":"Name","value":"DelayVault"}},{"kind":"Field","name":{"kind":"Name","value":"DelayVaultV2"}},{"kind":"Field","name":{"kind":"Name","value":"Reserved"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Trade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Sum"}},{"kind":"Field","name":{"kind":"Name","value":"Huobi"}},{"kind":"Field","name":{"kind":"Name","value":"GateIO"}},{"kind":"Field","name":{"kind":"Name","value":"PancakeSwapV3_01"}},{"kind":"Field","name":{"kind":"Name","value":"PancakeSwapV3"}},{"kind":"Field","name":{"kind":"Name","value":"Mexc"}}]}}]}}]}}]} as unknown as DocumentNode<GetPoolxTokenomicsQuery, GetPoolxTokenomicsQueryVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"Amount"}}]}}]}}]} as unknown as DocumentNode<SignupQuery, SignupQueryVariables>;
export const MySignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MySignup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mySignup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SignupId"}}]}}]}}]} as unknown as DocumentNode<MySignupQuery, MySignupQueryVariables>;
export const SimpleUrlShortenerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SimpleUrlShortener"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TxHashChainIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simpleUrlShortener"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShortUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ContainerText"}},{"kind":"Field","name":{"kind":"Name","value":"UrlToScan"}},{"kind":"Field","name":{"kind":"Name","value":"XPostText"}}]}}]}}]} as unknown as DocumentNode<SimpleUrlShortenerQuery, SimpleUrlShortenerQueryVariables>;
export const StatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ChainId"}},{"kind":"Field","name":{"kind":"Name","value":"ChainName"}},{"kind":"Field","name":{"kind":"Name","value":"RpcUrl"}},{"kind":"Field","name":{"kind":"Name","value":"CovalentLastBlock"}},{"kind":"Field","name":{"kind":"Name","value":"SecondsToWarning"}},{"kind":"Field","name":{"kind":"Name","value":"SecondsToError"}},{"kind":"Field","name":{"kind":"Name","value":"BlockPerSecond"}},{"kind":"Field","name":{"kind":"Name","value":"Events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Active"}},{"kind":"Field","name":{"kind":"Name","value":"StartingBlock"}},{"kind":"Field","name":{"kind":"Name","value":"EndingBlock"}},{"kind":"Field","name":{"kind":"Name","value":"ResponseType"}}]}}]}}]}}]} as unknown as DocumentNode<StatusQuery, StatusQueryVariables>;
export const TokenInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TokenInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hashKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hashKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hashKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"ChainId"}},{"kind":"Field","name":{"kind":"Name","value":"Decimals"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Symbol"}},{"kind":"Field","name":{"kind":"Name","value":"TotalSupply"}}]}}]}}]} as unknown as DocumentNode<TokenInfoQuery, TokenInfoQueryVariables>;
export const DataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Data"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenAddress"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fetchBalance"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vaults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chainId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chainId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tokenAddress"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenAddress"}}},{"kind":"Argument","name":{"kind":"Name","value":"fetchBalance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fetchBalance"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"VaultId"}},{"kind":"Field","name":{"kind":"Name","value":"VaultAddress"}},{"kind":"Field","name":{"kind":"Name","value":"VaultCreationTx"}},{"kind":"Field","name":{"kind":"Name","value":"TokenAddress"}},{"kind":"Field","name":{"kind":"Name","value":"TokenName"}},{"kind":"Field","name":{"kind":"Name","value":"TokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"TokenDecimals"}},{"kind":"Field","name":{"kind":"Name","value":"Balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BalanceOfToken"}},{"kind":"Field","name":{"kind":"Name","value":"FetchTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ChainId"}}]}}]}}]} as unknown as DocumentNode<DataQuery, DataQueryVariables>;