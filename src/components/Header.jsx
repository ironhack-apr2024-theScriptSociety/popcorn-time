import { NavLink } from 'react-router-dom';

import "./Header.css";

function Header(props) {

    let title;
    if (props.numberOfMovies > 0) {
        title = <h1>Number of movies: {props.numberOfMovies}</h1>;
    } else {
        title = <h1>Sorry, no movies to display</h1>
    }

    return (
        <header className="Header">

            <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <h1>Welcome to Popcorn-Time!</h1>
            {title}
        </header>
    )
}

export default Header;