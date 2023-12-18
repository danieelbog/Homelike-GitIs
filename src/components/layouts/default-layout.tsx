import { Outlet } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function DefaultLayout() {
    return (
        <div className="container-fluid g-0">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}
