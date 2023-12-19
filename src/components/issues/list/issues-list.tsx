import React from 'react';
import IssueCard from '@/components/cards/issue-card';

interface IssuesListProps {
    issues: Array<{ node: { id: string; state: string; title: string; number: string } }>;
}

const IssuesList: React.FC<IssuesListProps> = ({ issues }): JSX.Element => {
    return (
        <div>
            {issues.map(({ node }) => (
                <div key={node.id}>
                    <IssueCard
                        state={node.state}
                        title={node.title}
                        number={node.number}
                    />
                </div>
            ))}
        </div>
    );
};

export default IssuesList;
