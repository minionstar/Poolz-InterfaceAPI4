/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation AdminCleanCache {\n  adminCleanCache {\n    result {\n      id\n    }\n    messages {\n      code\n      message\n    }\n    errors {\n      code\n      message\n    }\n    success\n  }\n}": types.AdminCleanCacheDocument,
    "\n    query GetApprovedContracts($onlyApproved: Boolean!) {\n        approvedContracts(onlyApproved: $onlyApproved) {\n        ContractAddress\n        Status\n        }\n    }": types.GetApprovedContractsDocument,
    "\n  query AdminAutoSignUp($note: String) {\n    adminAutoSignUp(note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }": types.AdminAutoSignUpDocument,
    "\n  query AdminAutoSignUpAll{\n    adminAutoSignUp{\n      Address\n      PoolzAmount\n      Note\n    }\n  }": types.AdminAutoSignUpAllDocument,
    "\n  mutation addAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    addAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }": types.AddAutoSignUpDocument,
    "\n  mutation updateAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    updateAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }": types.UpdateAutoSignUpDocument,
    "\n  mutation deleteAutoSignUp($address: String!) {\n    deleteAutoSignUp(address: $address) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }": types.DeleteAutoSignUpDocument,
    "\n  query BoostProxyData($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      DataKey\n      CampaignName\n      TotalEntries\n      CampaignCode\n    }\n}": types.BoostProxyDataDocument,
    "\n  query BoostProxyUsers($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      CampaignName\n      TotalEntries\n      CampaignCode\n      DataKey\n      Users {\n        Address\n        Entries\n      }\n    }\n}": types.BoostProxyUsersDocument,
    "\n  query DaoSenderHistory($page: Int!) {\n    daoSenderHistory(page: $page) {\n      items {\n        ChainId\n        TxHash\n        Token\n        UserCount\n        TotalAmount\n      }\n      currentPage\n      totalPages\n    }\n  }\n": types.DaoSenderHistoryDocument,
    "\n  mutation UpdateDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  updateDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}": types.UpdateDownloaderEventDocument,
    "\n  mutation DeleteDownloaderEvent($chainId: Int!, $contractAddress: String!, $eventHash: String!) {\n  deleteDownloaderEvent(chainId: $chainId, contractAddress: $contractAddress, eventHash: $eventHash)\n}": types.DeleteDownloaderEventDocument,
    "\n  mutation AddDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  addDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}": types.AddDownloaderEventDocument,
    "\n  mutation UpdateMapping($updateMapping: MappingInput!, $updateMappingId: Int!) {\n  updateMapping(updateMapping: $updateMapping, id: $updateMappingId)\n}": types.UpdateMappingDocument,
    "\n  query MyQuery {\n    time\n}": types.MyQueryDocument,
    "\n  query Downloader {\n  downloader {\n    ChainId\n    ChainName\n    RpcUrl\n    CovalentLastBlock\n    SecondsToWarning\n    SecondsToError\n    BlockPerSecond\n    Events {\n      ContractAddress\n      EventHash\n      Active\n      StartingBlock\n      EndingBlock\n      MaxBatchSize\n      ResponseType\n      MaxPageNumber\n      UrlSet\n      Mapping {\n        Id\n        Path\n        Converter\n        Name\n      }\n    }\n  }\n}": types.DownloaderDocument,
    "\nmutation GenerateTokenFromSignature($eip4361message: String!, $signature: String!) {\n  generateTokenFromSignature(eip4361message: $eip4361message, signature: $signature){\n    token\n    validUntil\n  }\n}": types.GenerateTokenFromSignatureDocument,
    "\n  query InvestedErc20($investedErc20Id: Int!) {\n  investedErc20(id: $investedErc20Id) {\n    Wallet\n    AmountIn\n    TokenOut\n  }\n}": types.InvestedErc20Document,
    "\n  query getLeaderboardByAddress($address: String) {\n    leaderBoard(address: $address) {\n      Amount\n      Owner\n      Rank\n    }\n}": types.GetLeaderboardByAddressDocument,
    "\n  query getLeaderboard {\n    leaderBoard {\n      Rank\n      Owner\n      Amount\n    }\n}": types.GetLeaderboardDocument,
    "\n  mutation setMyAgree {\n    setMyAgree\n}": types.SetMyAgreeDocument,
    "\n  query MyData {\n    myData {\n        Agree\n        NonEvmWallet {\n            ChainName\n            Wallet\n        }\n        EvmWallets\n    }\n}": types.MyDataDocument,
    "\n  mutation AddEvmWallet($wallet: String!) {\n    addEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}": types.AddEvmWalletDocument,
    "\n  mutation DeleteEvmWallet($wallet: String!) {\n    deleteEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}": types.DeleteEvmWalletDocument,
    "\n  mutation AddNonEvmWallet($chainName: String!, $wallet: String!) {\n    addNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n        ChainName\n        Wallet\n      }\n      EvmWallet\n    }\n}": types.AddNonEvmWalletDocument,
    "\n  mutation DeleteNonEvmWallet($chainName: String!) {\n    deleteNonEvmWallet(chainName: $chainName) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}": types.DeleteNonEvmWalletDocument,
    "\n  mutation UpdateNonEvmWallet($chainName: String!, $wallet: String!) {\n    updateNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}": types.UpdateNonEvmWalletDocument,
    "\n  mutation MyLinkTelegram($dataOnAuth: DataOnAuth!) {\n    myLinkTelegram(dataOnAuth: $dataOnAuth)\n}": types.MyLinkTelegramDocument,
    "\n  query KYC {\n    myProxyKYC {\n      Proxy\n      RequestStatus\n      Status\n    }\n}": types.KycDocument,
    "\n  query MyRole {\n    myRole\n}": types.MyRoleDocument,
    "\n  query SignUpCheck($poolIDs: [Int!]!) {\n    mySignUpCheck(poolIDs: $poolIDs) {\n      PoolId\n      SignUp\n    }\n  }": types.SignUpCheckDocument,
    "\n  mutation OnboardingCheckTx($chatId:Long!, $dataOnAuth: DataOnAuth!, $tokenTransfer: OnboardingTokenTransfer!) {\n    onboardingCheckTx(chatId: $chatId, dataOnAuth: $dataOnAuth, tokenTransfer: $tokenTransfer) {\n      Success\n      ErrorMessage\n    }\n}": types.OnboardingCheckTxDocument,
    "\nquery OnboardingData($dataOnAuth: DataOnAuth!, $chatId:Long!) {\n    onboardingData(dataOnAuth: $dataOnAuth, chatId: $chatId) {\n      TokenAddress\n      ChainId\n      TokenTransfers {\n          Amount\n          TxHash\n          Timestamp\n      }\n      TokenAllocations {\n          StartDate\n          FinishDate\n          Ratio\n      }\n    }\n}": types.OnboardingDataDocument,
    "\nquery OnboardingProjects($dataOnAuth: DataOnAuth!) {\n  onboardingProjects(dataOnAuth: $dataOnAuth)\n  {\n    ChatId\n    ChatTitle\n  }\n}": types.OnboardingProjectsDocument,
    "\n  mutation OnboardingSetAllocation($dataOnAuth: DataOnAuth!, $chatId: Long!, $tokenAllocation: [OnboardingTokenAllocation!]!, $chainId: Long!, $tokenAddress: String!) {\n    onboardingSetAllocation(dataOnAuth: $dataOnAuth, chatId: $chatId, chainId: $chainId, tokenAddress: $tokenAddress, tokenAllocation: $tokenAllocation) {\n      Success\n      ErrorMessage\n    }\n}": types.OnboardingSetAllocationDocument,
    "\n  query PoolxPrice {\n    poolxPrice {\n        Price\n        Timestamp\n      }\n  }": types.PoolxPriceDocument,
    "\n  query GetPoolxTokenomics {\n    poolxTokenomics {\n      CirculatingSupply\n      Locked\n      Data {\n        TotalSupply\n        BuyBack\n        LockedDealV2\n        DelayVault\n        DelayVaultV2\n        Reserved\n      }\n      Trade {\n        Sum\n        Huobi\n        GateIO\n        PancakeSwapV3_01\n        PancakeSwapV3\n        Mexc\n      }\n    }\n  }\n": types.GetPoolxTokenomicsDocument,
    "\n  query Signup($signUpId: Int!) {\n    signUp(id: $signUpId) {\n      Address\n      Amount\n    }\n}": types.SignupDocument,
    "\n  query MySignup {\n    mySignup {\n      SignupId\n  }\n}": types.MySignupDocument,
    "\nquery SimpleUrlShortener($input: TxHashChainIdInput!) {\n  simpleUrlShortener(input: $input) {\n    ShortUrl\n    ContainerText\n    UrlToScan\n    XPostText\n  }\n}": types.SimpleUrlShortenerDocument,
    "\nquery Status {\n    status {\n      ChainId\n      ChainName\n      RpcUrl\n      CovalentLastBlock\n      SecondsToWarning\n      SecondsToError\n      BlockPerSecond\n      Events {\n        Active\n        StartingBlock\n        EndingBlock\n        ResponseType\n      }\n    }\n  }": types.StatusDocument,
    "\n  query TokenInfo($hashKey: String!) {\n    tokenInfo(hashKey: $hashKey) {\n      Address\n      ChainId\n      Decimals\n      Name\n      Symbol\n      TotalSupply\n    }\n  }\n": types.TokenInfoDocument,
    "\n    query Data($chainId: Int, $tokenAddress: String, $fetchBalance: Boolean) {\n    vaults(chainId: $chainId, tokenAddress: $tokenAddress, fetchBalance: $fetchBalance) {\n      Data {\n        VaultId\n        VaultAddress\n        VaultCreationTx\n        TokenAddress\n        TokenName\n        TokenSymbol\n        TokenDecimals\n        Balance {\n          BalanceOfToken\n          FetchTime\n        }\n      }\n      ChainId\n    }\n  }\n": types.DataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AdminCleanCache {\n  adminCleanCache {\n    result {\n      id\n    }\n    messages {\n      code\n      message\n    }\n    errors {\n      code\n      message\n    }\n    success\n  }\n}"): (typeof documents)["\nmutation AdminCleanCache {\n  adminCleanCache {\n    result {\n      id\n    }\n    messages {\n      code\n      message\n    }\n    errors {\n      code\n      message\n    }\n    success\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetApprovedContracts($onlyApproved: Boolean!) {\n        approvedContracts(onlyApproved: $onlyApproved) {\n        ContractAddress\n        Status\n        }\n    }"): (typeof documents)["\n    query GetApprovedContracts($onlyApproved: Boolean!) {\n        approvedContracts(onlyApproved: $onlyApproved) {\n        ContractAddress\n        Status\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminAutoSignUp($note: String) {\n    adminAutoSignUp(note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"): (typeof documents)["\n  query AdminAutoSignUp($note: String) {\n    adminAutoSignUp(note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AdminAutoSignUpAll{\n    adminAutoSignUp{\n      Address\n      PoolzAmount\n      Note\n    }\n  }"): (typeof documents)["\n  query AdminAutoSignUpAll{\n    adminAutoSignUp{\n      Address\n      PoolzAmount\n      Note\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    addAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"): (typeof documents)["\n  mutation addAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    addAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    updateAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"): (typeof documents)["\n  mutation updateAutoSignUp($address: String!, $poolzAmount: Float!, $note: String!) {\n    updateAutoSignUp(address: $address, poolzAmount: $poolzAmount, note: $note) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteAutoSignUp($address: String!) {\n    deleteAutoSignUp(address: $address) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"): (typeof documents)["\n  mutation deleteAutoSignUp($address: String!) {\n    deleteAutoSignUp(address: $address) {\n      Address\n      PoolzAmount\n      Note\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BoostProxyData($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      DataKey\n      CampaignName\n      TotalEntries\n      CampaignCode\n    }\n}"): (typeof documents)["\n  query BoostProxyData($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      DataKey\n      CampaignName\n      TotalEntries\n      CampaignCode\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BoostProxyUsers($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      CampaignName\n      TotalEntries\n      CampaignCode\n      DataKey\n      Users {\n        Address\n        Entries\n      }\n    }\n}"): (typeof documents)["\n  query BoostProxyUsers($campaignCodes: [String!]!) {\n    boostProxy(campaignCodes: $campaignCodes) {\n      Actions\n      Participants\n      TotalUsers\n      CampaignName\n      TotalEntries\n      CampaignCode\n      DataKey\n      Users {\n        Address\n        Entries\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query DaoSenderHistory($page: Int!) {\n    daoSenderHistory(page: $page) {\n      items {\n        ChainId\n        TxHash\n        Token\n        UserCount\n        TotalAmount\n      }\n      currentPage\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query DaoSenderHistory($page: Int!) {\n    daoSenderHistory(page: $page) {\n      items {\n        ChainId\n        TxHash\n        Token\n        UserCount\n        TotalAmount\n      }\n      currentPage\n      totalPages\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  updateDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}"): (typeof documents)["\n  mutation UpdateDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  updateDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteDownloaderEvent($chainId: Int!, $contractAddress: String!, $eventHash: String!) {\n  deleteDownloaderEvent(chainId: $chainId, contractAddress: $contractAddress, eventHash: $eventHash)\n}"): (typeof documents)["\n  mutation DeleteDownloaderEvent($chainId: Int!, $contractAddress: String!, $eventHash: String!) {\n  deleteDownloaderEvent(chainId: $chainId, contractAddress: $contractAddress, eventHash: $eventHash)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  addDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}"): (typeof documents)["\n  mutation AddDownloaderEvent($chainId: Int!, $eventData: DownloaderEventInput!) {\n  addDownloaderEvent(chainId: $chainId, eventData: $eventData)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateMapping($updateMapping: MappingInput!, $updateMappingId: Int!) {\n  updateMapping(updateMapping: $updateMapping, id: $updateMappingId)\n}"): (typeof documents)["\n  mutation UpdateMapping($updateMapping: MappingInput!, $updateMappingId: Int!) {\n  updateMapping(updateMapping: $updateMapping, id: $updateMappingId)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyQuery {\n    time\n}"): (typeof documents)["\n  query MyQuery {\n    time\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Downloader {\n  downloader {\n    ChainId\n    ChainName\n    RpcUrl\n    CovalentLastBlock\n    SecondsToWarning\n    SecondsToError\n    BlockPerSecond\n    Events {\n      ContractAddress\n      EventHash\n      Active\n      StartingBlock\n      EndingBlock\n      MaxBatchSize\n      ResponseType\n      MaxPageNumber\n      UrlSet\n      Mapping {\n        Id\n        Path\n        Converter\n        Name\n      }\n    }\n  }\n}"): (typeof documents)["\n  query Downloader {\n  downloader {\n    ChainId\n    ChainName\n    RpcUrl\n    CovalentLastBlock\n    SecondsToWarning\n    SecondsToError\n    BlockPerSecond\n    Events {\n      ContractAddress\n      EventHash\n      Active\n      StartingBlock\n      EndingBlock\n      MaxBatchSize\n      ResponseType\n      MaxPageNumber\n      UrlSet\n      Mapping {\n        Id\n        Path\n        Converter\n        Name\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation GenerateTokenFromSignature($eip4361message: String!, $signature: String!) {\n  generateTokenFromSignature(eip4361message: $eip4361message, signature: $signature){\n    token\n    validUntil\n  }\n}"): (typeof documents)["\nmutation GenerateTokenFromSignature($eip4361message: String!, $signature: String!) {\n  generateTokenFromSignature(eip4361message: $eip4361message, signature: $signature){\n    token\n    validUntil\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query InvestedErc20($investedErc20Id: Int!) {\n  investedErc20(id: $investedErc20Id) {\n    Wallet\n    AmountIn\n    TokenOut\n  }\n}"): (typeof documents)["\n  query InvestedErc20($investedErc20Id: Int!) {\n  investedErc20(id: $investedErc20Id) {\n    Wallet\n    AmountIn\n    TokenOut\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLeaderboardByAddress($address: String) {\n    leaderBoard(address: $address) {\n      Amount\n      Owner\n      Rank\n    }\n}"): (typeof documents)["\n  query getLeaderboardByAddress($address: String) {\n    leaderBoard(address: $address) {\n      Amount\n      Owner\n      Rank\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLeaderboard {\n    leaderBoard {\n      Rank\n      Owner\n      Amount\n    }\n}"): (typeof documents)["\n  query getLeaderboard {\n    leaderBoard {\n      Rank\n      Owner\n      Amount\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation setMyAgree {\n    setMyAgree\n}"): (typeof documents)["\n  mutation setMyAgree {\n    setMyAgree\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyData {\n    myData {\n        Agree\n        NonEvmWallet {\n            ChainName\n            Wallet\n        }\n        EvmWallets\n    }\n}"): (typeof documents)["\n  query MyData {\n    myData {\n        Agree\n        NonEvmWallet {\n            ChainName\n            Wallet\n        }\n        EvmWallets\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddEvmWallet($wallet: String!) {\n    addEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}"): (typeof documents)["\n  mutation AddEvmWallet($wallet: String!) {\n    addEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteEvmWallet($wallet: String!) {\n    deleteEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}"): (typeof documents)["\n  mutation DeleteEvmWallet($wallet: String!) {\n    deleteEvmWallet(wallet: $wallet) {\n      EvmWallet\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddNonEvmWallet($chainName: String!, $wallet: String!) {\n    addNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n        ChainName\n        Wallet\n      }\n      EvmWallet\n    }\n}"): (typeof documents)["\n  mutation AddNonEvmWallet($chainName: String!, $wallet: String!) {\n    addNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n        ChainName\n        Wallet\n      }\n      EvmWallet\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteNonEvmWallet($chainName: String!) {\n    deleteNonEvmWallet(chainName: $chainName) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}"): (typeof documents)["\n  mutation DeleteNonEvmWallet($chainName: String!) {\n    deleteNonEvmWallet(chainName: $chainName) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateNonEvmWallet($chainName: String!, $wallet: String!) {\n    updateNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}"): (typeof documents)["\n  mutation UpdateNonEvmWallet($chainName: String!, $wallet: String!) {\n    updateNonEvmWallet(chainName: $chainName, wallet: $wallet) {\n      Agree\n      NonEvmWallet {\n          ChainName\n          Wallet\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MyLinkTelegram($dataOnAuth: DataOnAuth!) {\n    myLinkTelegram(dataOnAuth: $dataOnAuth)\n}"): (typeof documents)["\n  mutation MyLinkTelegram($dataOnAuth: DataOnAuth!) {\n    myLinkTelegram(dataOnAuth: $dataOnAuth)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query KYC {\n    myProxyKYC {\n      Proxy\n      RequestStatus\n      Status\n    }\n}"): (typeof documents)["\n  query KYC {\n    myProxyKYC {\n      Proxy\n      RequestStatus\n      Status\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MyRole {\n    myRole\n}"): (typeof documents)["\n  query MyRole {\n    myRole\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SignUpCheck($poolIDs: [Int!]!) {\n    mySignUpCheck(poolIDs: $poolIDs) {\n      PoolId\n      SignUp\n    }\n  }"): (typeof documents)["\n  query SignUpCheck($poolIDs: [Int!]!) {\n    mySignUpCheck(poolIDs: $poolIDs) {\n      PoolId\n      SignUp\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation OnboardingCheckTx($chatId:Long!, $dataOnAuth: DataOnAuth!, $tokenTransfer: OnboardingTokenTransfer!) {\n    onboardingCheckTx(chatId: $chatId, dataOnAuth: $dataOnAuth, tokenTransfer: $tokenTransfer) {\n      Success\n      ErrorMessage\n    }\n}"): (typeof documents)["\n  mutation OnboardingCheckTx($chatId:Long!, $dataOnAuth: DataOnAuth!, $tokenTransfer: OnboardingTokenTransfer!) {\n    onboardingCheckTx(chatId: $chatId, dataOnAuth: $dataOnAuth, tokenTransfer: $tokenTransfer) {\n      Success\n      ErrorMessage\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery OnboardingData($dataOnAuth: DataOnAuth!, $chatId:Long!) {\n    onboardingData(dataOnAuth: $dataOnAuth, chatId: $chatId) {\n      TokenAddress\n      ChainId\n      TokenTransfers {\n          Amount\n          TxHash\n          Timestamp\n      }\n      TokenAllocations {\n          StartDate\n          FinishDate\n          Ratio\n      }\n    }\n}"): (typeof documents)["\nquery OnboardingData($dataOnAuth: DataOnAuth!, $chatId:Long!) {\n    onboardingData(dataOnAuth: $dataOnAuth, chatId: $chatId) {\n      TokenAddress\n      ChainId\n      TokenTransfers {\n          Amount\n          TxHash\n          Timestamp\n      }\n      TokenAllocations {\n          StartDate\n          FinishDate\n          Ratio\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery OnboardingProjects($dataOnAuth: DataOnAuth!) {\n  onboardingProjects(dataOnAuth: $dataOnAuth)\n  {\n    ChatId\n    ChatTitle\n  }\n}"): (typeof documents)["\nquery OnboardingProjects($dataOnAuth: DataOnAuth!) {\n  onboardingProjects(dataOnAuth: $dataOnAuth)\n  {\n    ChatId\n    ChatTitle\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation OnboardingSetAllocation($dataOnAuth: DataOnAuth!, $chatId: Long!, $tokenAllocation: [OnboardingTokenAllocation!]!, $chainId: Long!, $tokenAddress: String!) {\n    onboardingSetAllocation(dataOnAuth: $dataOnAuth, chatId: $chatId, chainId: $chainId, tokenAddress: $tokenAddress, tokenAllocation: $tokenAllocation) {\n      Success\n      ErrorMessage\n    }\n}"): (typeof documents)["\n  mutation OnboardingSetAllocation($dataOnAuth: DataOnAuth!, $chatId: Long!, $tokenAllocation: [OnboardingTokenAllocation!]!, $chainId: Long!, $tokenAddress: String!) {\n    onboardingSetAllocation(dataOnAuth: $dataOnAuth, chatId: $chatId, chainId: $chainId, tokenAddress: $tokenAddress, tokenAllocation: $tokenAllocation) {\n      Success\n      ErrorMessage\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PoolxPrice {\n    poolxPrice {\n        Price\n        Timestamp\n      }\n  }"): (typeof documents)["\n  query PoolxPrice {\n    poolxPrice {\n        Price\n        Timestamp\n      }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPoolxTokenomics {\n    poolxTokenomics {\n      CirculatingSupply\n      Locked\n      Data {\n        TotalSupply\n        BuyBack\n        LockedDealV2\n        DelayVault\n        DelayVaultV2\n        Reserved\n      }\n      Trade {\n        Sum\n        Huobi\n        GateIO\n        PancakeSwapV3_01\n        PancakeSwapV3\n        Mexc\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPoolxTokenomics {\n    poolxTokenomics {\n      CirculatingSupply\n      Locked\n      Data {\n        TotalSupply\n        BuyBack\n        LockedDealV2\n        DelayVault\n        DelayVaultV2\n        Reserved\n      }\n      Trade {\n        Sum\n        Huobi\n        GateIO\n        PancakeSwapV3_01\n        PancakeSwapV3\n        Mexc\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Signup($signUpId: Int!) {\n    signUp(id: $signUpId) {\n      Address\n      Amount\n    }\n}"): (typeof documents)["\n  query Signup($signUpId: Int!) {\n    signUp(id: $signUpId) {\n      Address\n      Amount\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MySignup {\n    mySignup {\n      SignupId\n  }\n}"): (typeof documents)["\n  query MySignup {\n    mySignup {\n      SignupId\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery SimpleUrlShortener($input: TxHashChainIdInput!) {\n  simpleUrlShortener(input: $input) {\n    ShortUrl\n    ContainerText\n    UrlToScan\n    XPostText\n  }\n}"): (typeof documents)["\nquery SimpleUrlShortener($input: TxHashChainIdInput!) {\n  simpleUrlShortener(input: $input) {\n    ShortUrl\n    ContainerText\n    UrlToScan\n    XPostText\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Status {\n    status {\n      ChainId\n      ChainName\n      RpcUrl\n      CovalentLastBlock\n      SecondsToWarning\n      SecondsToError\n      BlockPerSecond\n      Events {\n        Active\n        StartingBlock\n        EndingBlock\n        ResponseType\n      }\n    }\n  }"): (typeof documents)["\nquery Status {\n    status {\n      ChainId\n      ChainName\n      RpcUrl\n      CovalentLastBlock\n      SecondsToWarning\n      SecondsToError\n      BlockPerSecond\n      Events {\n        Active\n        StartingBlock\n        EndingBlock\n        ResponseType\n      }\n    }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query TokenInfo($hashKey: String!) {\n    tokenInfo(hashKey: $hashKey) {\n      Address\n      ChainId\n      Decimals\n      Name\n      Symbol\n      TotalSupply\n    }\n  }\n"): (typeof documents)["\n  query TokenInfo($hashKey: String!) {\n    tokenInfo(hashKey: $hashKey) {\n      Address\n      ChainId\n      Decimals\n      Name\n      Symbol\n      TotalSupply\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Data($chainId: Int, $tokenAddress: String, $fetchBalance: Boolean) {\n    vaults(chainId: $chainId, tokenAddress: $tokenAddress, fetchBalance: $fetchBalance) {\n      Data {\n        VaultId\n        VaultAddress\n        VaultCreationTx\n        TokenAddress\n        TokenName\n        TokenSymbol\n        TokenDecimals\n        Balance {\n          BalanceOfToken\n          FetchTime\n        }\n      }\n      ChainId\n    }\n  }\n"): (typeof documents)["\n    query Data($chainId: Int, $tokenAddress: String, $fetchBalance: Boolean) {\n    vaults(chainId: $chainId, tokenAddress: $tokenAddress, fetchBalance: $fetchBalance) {\n      Data {\n        VaultId\n        VaultAddress\n        VaultCreationTx\n        TokenAddress\n        TokenName\n        TokenSymbol\n        TokenDecimals\n        Balance {\n          BalanceOfToken\n          FetchTime\n        }\n      }\n      ChainId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;