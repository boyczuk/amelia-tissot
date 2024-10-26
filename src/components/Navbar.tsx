import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <h2>Tissot Fitness</h2>

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li className="nav-link">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={toggleMenu}>
                        About
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={toggleMenu}>
                        Services
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={toggleMenu}>
                        Gallery
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={toggleMenu}>
                        Reserve
                    </NavLink>
                </li>
                <li className="nav-link">
                    <a href="https://www.instagram.com/ameliattissot/" className="ig-icon" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
