const DefaultFooter = (): JSX.Element => {
    const currentYear = new Date().getFullYear();
    const yourName = 'Daniel Bogdan';

    return (
        <footer className="bg-transparent text-dark fst-italic fw-light border-top text-center py-3">
            <p>
                Homelike - GitIs &copy; {currentYear} {yourName}
            </p>
        </footer>
    );
};

export default DefaultFooter;
