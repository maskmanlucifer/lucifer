import { Link, useLocation } from "react-router-dom";

const NAVBAR_ITEMS = [
    { name: "Home", url: "/" },
    { name: "Books", url: "/books" },
    { name: "Bookmarks", url: "/bookmarks" }
];

const SunIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.75V3m0 18v-1.75M7.03 7.03 5.78 5.78m12.44 12.44-1.25-1.25M4.75 12H3m18 0h-1.75M7.03 16.97 5.78 18.22m12.44-12.44 1.25-1.25M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
        />
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        />
    </svg>
);

const Navbar = ({ path, theme, onToggleTheme }) => { 

    const location = useLocation();
    const lastPath = location.pathname.split("/").pop();

    const toggleLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

    return (
        <div className="navbar">
            <div className="navbar-links">
                {NAVBAR_ITEMS.map((item, index) => (
                    <div className={`navbar-item ${`/${lastPath}` === item.url ? "active" : ""}`} key={index}>
                        <Link to={item.url} className="navbar-link">
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="theme-toggle"
                onClick={onToggleTheme}
                aria-pressed={theme === 'dark'}
                aria-label={toggleLabel}
            >
                <span className="sr-only">{toggleLabel}</span>
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
    )
};

export default Navbar;