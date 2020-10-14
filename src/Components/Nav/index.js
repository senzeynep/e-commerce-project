import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className = "navbar">
            <Link to ='/about'>About</Link>
            <Link to ='/products'>Products</Link>
            <Link to ='/signup'>Sign Up</Link>
            <Link to ='/signin'>Sign In</Link>
        </div>
    );
};

export default Nav;