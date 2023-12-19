interface LoginInfoProps {
    info: string;
    tooltipInfo: string;
}

const LoginInfo: React.FC<LoginInfoProps> = ({ info, tooltipInfo }): JSX.Element => {
    return (
        <div
            id="access-token-help"
            className="form-text fst-italic fw-light"
        >
            {info}
            <span
                className="material-icons-outlined p-1"
                style={{ fontSize: 15 }}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={tooltipInfo}
            >
                help_outline
            </span>
        </div>
    );
};

export default LoginInfo;
