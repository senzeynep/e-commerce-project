import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className = "navbar">
            <Link to ='/about'>About</Link>
        </div>
    );
};

export default Nav;