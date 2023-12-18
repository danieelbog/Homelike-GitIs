import { useLocation, useRouteLoaderData } from 'react-router-dom';
import { IRouterMeta } from './types/IRouterMeta';

import AppError from './App-Error';
import DefaultLayout from './components/layouts/default-layout';
import EmptyLayout from './components/layouts/empty-layout';

function App() {
    const location = useLocation();
    const meta = useRouteLoaderData(`${location.pathname == '/' ? '/issues' : location.pathname}`) as IRouterMeta;
    if (meta) document.title = meta.pageTitle;
    else return <AppError></AppError>;

    return meta && meta.noLayout ? <EmptyLayout /> : <DefaultLayout />;
}

export default App;
