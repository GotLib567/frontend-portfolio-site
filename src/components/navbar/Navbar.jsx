import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-row">
                    <a href="/" className="main-title">Shirokov</a>
                    <div className="link-row">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                        >
                            Обо мне
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                        >
                            Проекты
                        </NavLink>
                    </div>
                    <a className="nav__contact-btn" href="https://t.me/gotlibtg">Связаться</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
