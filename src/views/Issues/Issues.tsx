import { useQuery, gql } from '@apollo/client';

export default function IssuesPage() {
    return (
        <div>
            <h2>Issues 🚀</h2>
            <br />
            <DisplayIssues />
        </div>
    );
}

const GET_ISSUES = gql`
    query {
        repository(owner: "reactjs", name: "react.dev") {
            issues(first: 10, states: [OPEN, CLOSED], orderBy: { field: CREATED_AT, direction: DESC }) {
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
                    }
                }
            }
        }
    }
`;
function DisplayIssues() {
    const { loading, error, data } = useQuery(GET_ISSUES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log('how many times is this called?', data);

    return <div>This is issues</div>;
}
