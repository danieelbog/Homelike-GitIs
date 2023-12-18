import { createBrowserRouter } from 'react-router-dom';
import { routes } from '@/views/routes';

import App from '../App';
import AppError from '../App-Error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <AppError></AppError>,
        children: routes
    }
]);
