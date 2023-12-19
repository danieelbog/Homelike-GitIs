import { gql } from '@apollo/client';

export const GET_ISSUES = gql`
    query GetIssues($selectedState: [IssueState!], $cursor: String) {
        repository(owner: "reactjs", name: "react.dev") {
            issues(first: 10, states: $selectedState, after: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
                totalCount
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }
                edges {
                    node {
                        number
                        title
                        state
                        id
                    }
                }
            }
        }
    }
`;
