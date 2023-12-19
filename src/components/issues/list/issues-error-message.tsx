import React from 'react';

interface IssuesErrorMessageProps {
    message: string;
}

const IssuesErrorMessage: React.FC<IssuesErrorMessageProps> = ({ message }): JSX.Element => {
    return (
        <div className="d-flex justify-content-center">
            <div>
                💥 Ooooooops! There was an error. Take a look:
                <p className="text-danger"> {message}</p>
            </div>
        </div>
    );
};

export default IssuesErrorMessage;
