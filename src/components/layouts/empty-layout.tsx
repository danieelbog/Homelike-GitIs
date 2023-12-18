import { Outlet } from 'react-router-dom';

const EmptyLayout = (): JSX.Element => {
    return (
        <main>
            <Outlet></Outlet>
        </main>
    );
};

export default EmptyLayout;
