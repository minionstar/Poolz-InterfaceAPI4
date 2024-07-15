import { useQuery } from "@apollo/client"
import { gql } from "../types/graphql"
import { DEFAULT_TOKEN } from "../constants"

const GET_APPROVED_CONTRACTS = gql(`
    query GetApprovedContracts($onlyApproved: Boolean!) {
        approvedContracts(onlyApproved: $onlyApproved) {
        ContractAddress
        Status
        }
    }`)

export const useApprovedContracts = (onlyApproved: boolean) => {
    const skip = onlyApproved === null
    return useQuery(GET_APPROVED_CONTRACTS, {
        skip,
        context: {
            headers: {
                Authorization: DEFAULT_TOKEN
            }
        },
        variables: {
            onlyApproved
        }
    })
}