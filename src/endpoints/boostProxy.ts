import { useQuery, useLazyQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_BOOST_CAMPAIGNS_DATA = gql(`
  query BoostProxyData($campaignCodes: [String!]!) {
    boostProxy(campaignCodes: $campaignCodes) {
      Actions
      Participants
      TotalUsers
      DataKey
      CampaignName
      TotalEntries
      CampaignCode
    }
}`)

const GET_BOOST_CAMPAIGN_USERS = gql(`
  query BoostProxyUsers($campaignCodes: [String!]!) {
    boostProxy(campaignCodes: $campaignCodes) {
      Actions
      Participants
      TotalUsers
      CampaignName
      TotalEntries
      CampaignCode
      DataKey
      Users {
        Address
        Entries
      }
    }
}`)

export const useBoostUsers = (campaignCodes?: string) => {
  const skip = !campaignCodes
  return useQuery(GET_BOOST_CAMPAIGN_USERS, {
    skip,
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      campaignCodes: campaignCodes ?? []
    }
  })
}

export const useBoostData = (campaignCodes?: string[]) => {
  const skip = campaignCodes === undefined || !campaignCodes.length
  return useQuery(GET_BOOST_CAMPAIGNS_DATA, {
    skip,
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
    variables: {
      campaignCodes: campaignCodes ?? []
    }
  })
}

export const useLazyBoostUsers = () => {
  return useLazyQuery(GET_BOOST_CAMPAIGN_USERS, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
}
