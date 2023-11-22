import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="App__header">
            <h1 className="App__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="App__menu">
                <ul>
                    <li>
                        <NavLink
                            end
                            style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                            to="/">Characters</NavLink>
                    </li>
                    /
                    <li>
                        <NavLink
                            style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                            to="/comics">Comics</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;