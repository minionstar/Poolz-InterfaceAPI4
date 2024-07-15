import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_CURRENT_TIME = gql(`
  query MyQuery {
    time
}`)

export const useGetCurrentTime = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_TIME, {
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    }
  })
  return { loading, error, data }
}
