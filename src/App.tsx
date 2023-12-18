import { useEffect } from 'react';
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom';
import { IRouterMeta } from './types/IRouterMeta';
import { useSelector } from 'react-redux';

import AppError from './App-Error';
import DefaultLayout from './components/layouts/default-layout';
import EmptyLayout from './components/layouts/empty-layout';
import { IRootState } from './types/IStoreState';

function setTitle(meta: IRouterMeta): void {
    if (meta) document.title = meta.pageTitle;
}

function App(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    const api = useSelector((state: IRootState) => state.api.value);
    const meta = useRouteLoaderData(`${location.pathname === '/' ? '/issues' : location.pathname}`) as IRouterMeta;

    useEffect(() => {
        const redirectTo = new URLSearchParams(location.search).get('redirectTo');
        const shouldRedirect = !api && !meta.allowAnonymous && !redirectTo;

        if (shouldRedirect) navigate(`/login?redirectTo=${window.location.pathname}`);
        else if (api && !meta.allowAnonymous && redirectTo) navigate(redirectTo);
    }, [api, meta.allowAnonymous, location.search, navigate]);

    if (!meta) return <AppError />;
    setTitle(meta);

    return meta.noLayout ? <EmptyLayout /> : <DefaultLayout />;
}

export default App;
