import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ISSUES } from './issues-list.service';
import { State } from '@/src/types/StateType';

import IssuesList from './issues-list';
import Loader from '@/components/layouts/loader/loader';
import ObservableInfiniteScrollWrapper from '@/components/layouts/wrappers/observable-infinite-scroll-wrapper';
import IssuesErrorMessage from './issues-error-message';

interface IssuesListWrapperProps {
    selectedState: State;
}

const IssuesListWrapper: React.FC<IssuesListWrapperProps> = ({ selectedState }): JSX.Element => {
    const { loading, error, data, fetchMore } = useQuery(GET_ISSUES, {
        variables: { selectedState: selectedState !== 'ALL' ? [selectedState] : ['OPEN', 'CLOSED'] }
    });

    if (loading) return <Loader />;
    if (error) return <IssuesErrorMessage message={error.message}></IssuesErrorMessage>;

    let issues = data.repository.issues.edges;
    let pageInfo = data.repository.issues.pageInfo;

    const handleIntersect = () => {
        if (pageInfo.hasNextPage) {
            fetchMore({
                variables: {
                    cursor: pageInfo.endCursor
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevResult;

                    pageInfo = fetchMoreResult.repository.issues.pageInfo;
                    issues = [...issues, ...fetchMoreResult.repository.issues.edges];

                    return {
                        repository: {
                            __typename: prevResult.repository.__typename,
                            issues: {
                                __typename: prevResult.repository.issues.__typename,
                                totalCount: fetchMoreResult.repository.issues.totalCount,
                                pageInfo: pageInfo,
                                edges: [
                                    ...prevResult.repository.issues.edges,
                                    ...fetchMoreResult.repository.issues.edges
                                ]
                            }
                        }
                    };
                }
            });
        }
    };

    return (
        <div>
            <ObservableInfiniteScrollWrapper onIntersect={handleIntersect}>
                <IssuesList issues={issues} />
            </ObservableInfiniteScrollWrapper>
        </div>
    );
};

export default IssuesListWrapper;
