import API4Provider from "./components/API4Provider"
import { useGetCurrentTime } from "./endpoints/getCurrentTime"
import { useGetKYCStatus, useLazyKYCStatus } from "./endpoints/myProxyKYC"
import { useAPI4State } from "./context/API4Context"
import {
  useMyData,
  useSetMyAgree,
  useSetNonEvmWallet,
  useDeleteNonEvmWallet,
  useUpdateNonEvmWallet,
  useAddEvmWallet,
  useDeleteEvmWallet
} from "./endpoints/myData"
import { useLeaderboard, useLeaderboardByAddress } from "./endpoints/leaderboard"
import { useSignup, useMySignup } from "./endpoints/signup"
import { useMyRole, useLazyMyRole } from "./endpoints/myRole"
import { useBoostUsers, useBoostData, useLazyBoostUsers } from "./endpoints/boostProxy"
import { useSetMyTelegram } from "./endpoints/myLinkTelegram"
import { usePoolxTokenomics } from "./endpoints/poolxTokenomics"
import { useGetAutoSignUp, useGetAutoSignUpAll, useAddAutoSignUp, useUpdateAutoSignUp, useDeleteAutoSignUp } from "./endpoints/autoSignUp"
import { useVaults } from "./endpoints/vaults"
import { useApprovedContracts } from "endpoints/approvedContracts"
import { useMySignUpCheck } from "./endpoints/mySignUpCheck"
import { useStatus } from "./endpoints/status"
import { usePoolxPrice } from "./endpoints/poolxPrice"
import { useAdminCleanCache } from "./endpoints/adminCleanCache"
import { useOnBoardingProjects } from "./endpoints/onBoardingProjects"
import { useOnBoardingData } from "./endpoints/onBoardingData"
import { useOnBoardingCheckTx } from "./endpoints/onBoardingCheckTx"
import { useOnBoardingSetAllocation } from "./endpoints/onBoardingSetAllocation"
import { useTokenInfo, useTokenInfoByChainAndAddress } from "./endpoints/tokenInfo"
import { useSimpleUrlShortener } from "./endpoints/simpleUrlShortener"
import { useInvestedERC20 } from "endpoints/investedERC20"
import { useGetGeneratedToken } from "endpoints/getGeneratedToken"
import { useGetDownloader } from "endpoints/getDownloader"
import { useDaoSenderHistory } from "endpoints/daoSenderHistory"
import { useUpdateDownloaderEvent, useDeleteDownloaderEvent, useCreateDownloaderEvent } from "endpoints/editDownloaderEvent"
import { useUpdateMapping } from "endpoints/editMapping"

export {
  API4Provider,
  useGetCurrentTime,
  useGetKYCStatus,
  useLazyKYCStatus,
  useAPI4State,
  useMyData,
  useSetMyAgree,
  useSetNonEvmWallet,
  useLeaderboard,
  useDeleteNonEvmWallet,
  useUpdateNonEvmWallet,
  useLeaderboardByAddress,
  useMySignup,
  useSignup,
  useAddEvmWallet,
  useDeleteEvmWallet,
  useMyRole,
  useLazyMyRole,
  useBoostUsers,
  useBoostData,
  useLazyBoostUsers,
  useSetMyTelegram,
  usePoolxTokenomics,
  useGetAutoSignUp,
  useGetAutoSignUpAll,
  useAddAutoSignUp,
  useUpdateAutoSignUp,
  useDeleteAutoSignUp,
  useVaults,
  useApprovedContracts,
  useMySignUpCheck,
  useStatus,
  useOnBoardingProjects,
  useOnBoardingData,
  usePoolxPrice,
  useAdminCleanCache,
  useOnBoardingCheckTx,
  useOnBoardingSetAllocation,
  useTokenInfo,
  useTokenInfoByChainAndAddress,
  useSimpleUrlShortener,
  useInvestedERC20,
  useGetGeneratedToken,
  useGetDownloader,
  useDaoSenderHistory,
  useUpdateDownloaderEvent,
  useDeleteDownloaderEvent,
  useCreateDownloaderEvent,
  useUpdateMapping
}
