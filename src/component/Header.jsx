import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => (
    <header>
        <nav>
            <Link to="/">
                <img src={logo} alt="Company Logo"></img>
            </Link>
            <ul>
                <li>
                    <NavLink to={'/'}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>A propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
