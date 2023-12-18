import { useRouteError } from 'react-router-dom';

export default function AppError() {
    const error = useRouteError();
    console.error(typeof error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error}</i>
            </p>
        </div>
    );
}
