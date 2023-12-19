import LoginTitle from '@/src/components/login/title/token-title';
import LoginForm from '@/src/components/login/form/login-form';

const LoginPage = (): JSX.Element => {
    return (
        <div
            id="login-page"
            className="mt-5"
        >
            <LoginTitle title="Login"></LoginTitle>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;
