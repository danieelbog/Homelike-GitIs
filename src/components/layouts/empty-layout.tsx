import { Outlet } from 'react-router-dom';

export default function EmptyLayout() {
    return (
        <div className="container-fluid g-0">
            <Outlet></Outlet>
        </div>
    );
}
