import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '@/stores/api/api-slice';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowError(false);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!inputValue) {
            setShowError(true);
            return;
        }

        dispatch(set(inputValue));
        setInputValue('');

        const redirectTo = new URLSearchParams(window.location.search).get('redirectTo');
        navigate(redirectTo || '/');
    };

    return (
        <div
            id="login-page"
            className="full-page d-flex justify-content-center align-items-center"
        >
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
                <ErrorMessage showError={showError} />
                <div
                    id="access-token-help"
                    className="form-text fst-italic"
                >
                    We'll never store or use maliciously your Access Token.
                </div>
                <div className="d-flex justify-content-end mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Authenticate
                    </button>
                </div>
            </form>
        </div>
    );
}

interface ErrorMessageProps {
    showError: boolean;
}
function ErrorMessage({ showError }: ErrorMessageProps) {
    if (showError) {
        return (
            <div>
                <p className="text-danger mb-1 mt-1">Github Personal Access Token field is required!</p>
            </div>
        );
    }
}
