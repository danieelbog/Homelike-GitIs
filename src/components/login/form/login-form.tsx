import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { set } from '@/stores/api/api-slice';

import LoginErrorMessage from '../error-message/token-error-message';
import LoginInfo from '../info/token-info';

const LoginForm = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowError(false);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputValue.trim()) {
            setErrorMessage('Github Personal Access Token field is required!');
            setShowError(true);
            return;
        }

        dispatch(set(inputValue.trim()));
        setInputValue('');

        loginRedirect();
    };

    const loginRedirect = () => {
        const redirectTo = new URLSearchParams(window.location.search).get('redirectTo');
        navigate(redirectTo || '/');
    };

    return (
        <div className="d-flex justify-content-center mt-4">
            <form
                onSubmit={handleFormSubmit}
                className="login-form"
            >
                <label
                    htmlFor="access-token-input"
                    className="form-label"
                >
                    Git Personal Access Token
                    <span className="text-danger">*</span>
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="access-token-input"
                    aria-describedby="access-token-help"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <LoginErrorMessage
                    message={errorMessage}
                    showError={showError}
                ></LoginErrorMessage>
                <LoginInfo
                    info="We'll never store or use maliciously your Access Token."
                    tooltipInfo="This access token will be set as a header for the Authorization in our calls."
                ></LoginInfo>
                <div className="d-flex justify-content-end mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
