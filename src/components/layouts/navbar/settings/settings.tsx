import { unset } from '@/stores/api/api-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavbarSettings = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(unset());
        logoutRedirect();
    };

    const logoutRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="nav-menu-dropdown-button btn-group">
            <button
                type="button"
                className="btn btn-outline-primary rounded"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
            >
                <span className="align-middle material-icons-round">settings</span>
            </button>
            <ul className="nav-menu-dropdown-item dropdown-menu dropdown-menu-end p-1">
                <li>
                    <button
                        onClick={logout}
                        className="dropdown-item btn btn-light"
                    >
                        <span className="align-middle material-icons-outlined text-danger">power_settings_new</span>
                        <span className="m-2 align-middle">Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavbarSettings;
