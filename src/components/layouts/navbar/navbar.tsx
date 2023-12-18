import NavbarSettings from './settings/settings';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom p-2 mb-5 shadow-sm sticky-top bg-white">
            <div className="w-100 d-sm-flex d-grid justify-content-sm-between justify-content-middle">
                <Link
                    className="navbar-brand text-center text-sm-start m-0"
                    to="/"
                >
                    GitIs
                </Link>
                <div className="d-sm-flex d-grid">
                    <NavbarSettings />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
