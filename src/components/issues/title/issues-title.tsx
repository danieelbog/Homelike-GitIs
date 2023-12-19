interface IssuesTitleProps {
    title: string;
}

const IssuesTitle: React.FC<IssuesTitleProps> = ({ title }): JSX.Element => {
    return <h2 className="text-center">{title} 🚀</h2>;
};

export default IssuesTitle;
