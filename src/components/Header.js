import React from "react"
import {NavLink} from "react-router-dom"
import Logo from "../assets/logo/Logo.png"

const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>ACCUEIL</li>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <li>A PROPOS</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header
