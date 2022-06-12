import React from "react";
import NavItems from "../Navitems/Navitems";
import './Navbar.css'

const Navbar = (props) => {
    return (
        <header className="navbar">
        <nav>
        <NavItems/>
        </nav>
        </header>
    )
}

export default Navbar