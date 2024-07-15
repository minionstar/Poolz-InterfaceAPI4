import { useQuery } from "@apollo/client"
import { DataOnAuth } from "../types/graphql/graphql"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const ON_BOARDING_PROJECTS = gql(`
query OnboardingProjects($dataOnAuth: DataOnAuth!) {
  onboardingProjects(dataOnAuth: $dataOnAuth)
  {
    ChatId
    ChatTitle
  }
}`)

export const useOnBoardingProjects = (dataOnAuth: DataOnAuth) => {
  return useQuery(ON_BOARDING_PROJECTS, {
    variables: {dataOnAuth},
    context: {
      headers: {
        Authorization: DEFAULT_TOKEN
      }
    },
  })
}