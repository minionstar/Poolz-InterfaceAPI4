import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_LEADERBOARD_BY_ADDRESS = gql(`
  query getLeaderboardByAddress($address: String) {
    leaderBoard(address: $address) {
      Amount
      Owner
      Rank
    }
}`)

const GET_LEADERBOARD = gql(`
  query getLeaderboard {
    leaderBoard {
      Rank
      Owner
      Amount
    }
}`)

export const useLeaderboardByAddress = (address?: string) => {
  const skip = !address
  return useQuery(GET_LEADERBOARD_BY_ADDRESS, {
    skip,
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      address
    }
  })
}

export const useLeaderboard = () => {
  return useQuery(GET_LEADERBOARD, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
