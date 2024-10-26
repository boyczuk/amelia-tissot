import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h2>Tissot Fitness</h2>
            <ul className="nav-links">
                <li className="nav-link">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        About
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Services
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Gallery
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Reserve
                    </NavLink>
                </li>
                <li>
                    <a href="https://www.instagram.com/ameliattissot/" className='ig-icon' target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;