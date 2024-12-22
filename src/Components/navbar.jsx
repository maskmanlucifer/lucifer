import { Link, useLocation } from "react-router-dom";

const NAVBAR_ITEMS = [
    { name: "Home", url: "/" },
    { name: "Books", url: "/books" },
    { name: "Bookmarks", url: "/bookmarks" }
];

const Navbar = ({path}) => { 

    const location = useLocation();
    const lastPath = location.pathname.split("/").pop();


    return (
        <div className="navbar">
            {NAVBAR_ITEMS.map((item, index) => (
                <div className={`navbar-item ${`/${lastPath}` === item.url ? "active" : ""}`} key={index}>
                <Link to={item.url} className="navbar-link">
                    {item.name}
                </Link>
                </div>

            ))}
        </div>
    )
};

export default Navbar;