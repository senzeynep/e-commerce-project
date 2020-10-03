import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className = "Navbar">
            <Link to = '/about.js'>About</Link>
        </div>
    );
};

export default Nav;