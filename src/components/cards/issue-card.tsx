import React from 'react';

interface IssueCardProps {
    state: string;
    title: string;
    number: string;
}

const IssueCard: React.FC<IssueCardProps> = ({ state, title, number }: IssueCardProps): JSX.Element => {
    return (
        <div className="row justify-content-center w-100 g-0 p-3">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 text-center">
                <div className="card text-center">
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <p>
                            State:{' '}
                            {state === 'OPEN' ? (
                                <span className="badge rounded-pill bg-success">Open</span>
                            ) : (
                                <span className="badge rounded-pill bg-danger">Closed</span>
                            )}
                        </p>
                    </div>
                    <div className="card-footer text-muted">{number}</div>
                </div>
            </div>
        </div>
    );
};

export default IssueCard;
