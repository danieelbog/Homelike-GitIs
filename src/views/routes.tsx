import { RouteObject } from 'react-router-dom';
import { IRouterMeta } from '../types/IRouterMeta';

import Login from './Login/Login';
import Issues from './Issues/Issues';

export const routes: RouteObject[] = [
    {
        id: '/issues',
        path: '/',
        element: <Issues></Issues>,
        loader: () =>
            ({
                allowAnonymous: false,
                noLayout: false,
                pageTitle: 'GitIs | Issues',
                showInNavigation: true
            } as IRouterMeta)
    },
    {
        id: '/login',
        path: 'login',
        element: <Login></Login>,
        loader: () =>
            ({
                allowAnonymous: true,
                noLayout: true,
                pageTitle: 'GitIs | Login',
                showInNavigation: false
            } as IRouterMeta)
    }
];
