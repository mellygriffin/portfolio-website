import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav id="navbar">
            <ul id="navlist">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;