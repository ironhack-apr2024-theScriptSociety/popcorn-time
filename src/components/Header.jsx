import { NavLink } from 'react-router-dom';

import "./Header.css";

function Header() {
    return (
        <header className="Header">

            <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <h1>Welcome to Popcorn-Time!</h1>
        </header>
    )
}

export default Header;