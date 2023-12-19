interface LoginTitleProps {
    title: string;
}

const LoginTitle: React.FC<LoginTitleProps> = ({ title }): JSX.Element => {
    return <h2 className="text-center">{title}</h2>;
};

export default LoginTitle;
