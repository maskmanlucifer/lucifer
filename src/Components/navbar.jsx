import { useState } from "react";

const NAVBAR_ITEMS = [
    { name: "Home", url: "/lucifer" },
    { name: "Books", url: "/lucifer/books" },
    { name: "Bookmarks", url: "/lucifer/bookmarks" }
];

const getPathIndex = (path) => {
    switch (path) {
        case "/lucifer":
            return 0;
        case "/lucifer/books":
            return 1;
        case "/lucifer/bookmarks":
            return 2;
        default:
            return 0;
    }
};

const Navbar = () => { 
    const [activeElement, setActiveElement] = useState(getPathIndex(window.location.pathname));

    return (
        <div className="navbar">
            {NAVBAR_ITEMS.map((item, index) => (
                <div className={`navbar-item ${activeElement === index ? "active" : ""}`} key={index}>
                <a
                    key={index}
                    href={item.url}
                    onClick={() => setActiveElement(index)}
                >
                    {item.name}
                </a>
                </div>
            ))}
        </div>
    )
};

export default Navbar;