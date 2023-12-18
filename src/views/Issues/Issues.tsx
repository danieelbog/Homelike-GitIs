import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loader from '@/components/layouts/loader/loader';
import IssueCard from '@/components/cards/issue-card';

const IssuesPage = (): JSX.Element => {
    const [selectedState, setSelectedState] = useState<'OPEN' | 'CLOSED' | 'ALL'>('OPEN');

    return (
        <div>
            <h2 className="text-center">Issues 🚀</h2>
            <div className="d-grid justify-content-center">
                <div className="mb-2">Filter issues based on state:</div>
                <div
                    id="issues-state-filter"
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                >
                    <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        checked={selectedState === 'OPEN'}
                        onChange={() => setSelectedState('OPEN')}
                    />
                    <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio1"
                    >
                        Open
                    </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                        checked={selectedState === 'CLOSED'}
                        onChange={() => setSelectedState('CLOSED')}
                    />
                    <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio2"
                    >
                        Closed
                    </label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                        checked={selectedState === 'ALL'}
                        onChange={() => setSelectedState('ALL')}
                    />
                    <label
                        className="btn btn-outline-primary"
                        htmlFor="btnradio3"
                    >
                        All
                    </label>
                </div>
            </div>

            <br />
            <DisplayIssues selectedState={selectedState} />
        </div>
    );
};

const GET_ISSUES = gql`
    query GetIssues($selectedState: [IssueState!]) {
        repository(owner: "reactjs", name: "react.dev") {
            issues(first: 10, states: $selectedState, orderBy: { field: CREATED_AT, direction: DESC }) {
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
                    }
                }
            }
        }
    }
`;

interface DisplayIssuesProps {
    selectedState: 'OPEN' | 'CLOSED' | 'ALL';
}

function DisplayIssues({ selectedState }: DisplayIssuesProps) {
    const { loading, error, data } = useQuery(GET_ISSUES, {
        variables: { selectedState: selectedState !== 'ALL' ? [selectedState] : ['OPEN', 'CLOSED'] }
    });

    if (loading) return <Loader></Loader>;
    if (error) return <p>Error: {error.message}</p>;

    const issues = data.repository.issues.edges;

    return (
        <div>
            {issues.map(({ node }) => (
                <div key={node.number}>
                    <IssueCard
                        state={node.state}
                        title={node.title}
                        number={node.number}
                    ></IssueCard>
                </div>
            ))}
        </div>
    );
}

export default IssuesPage;
