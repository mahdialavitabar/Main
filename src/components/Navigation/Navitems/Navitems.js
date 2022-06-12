import React from "react";
import NavItem from '../Navitem/Navitem'
import './Navitems.css'

const NavItems = () => {
    return (
        <ul className="nav-items">
            <NavItem link="/">Shopping</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    )
}

export default NavItems