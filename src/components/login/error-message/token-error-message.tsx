interface LoginErrorMessageProps {
    message: string;
    showError: boolean;
}

const LoginErrorMessage: React.FC<LoginErrorMessageProps> = ({ message, showError }) => {
    if (showError) return <p className="text-danger mb-1 mt-1">{message}</p>;
};

export default LoginErrorMessage;
