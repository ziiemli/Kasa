import React from "react"
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <ul>
            <NavLink to="/">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/apropos">
                <li>A Propos</li>
            </NavLink>
        </ul>
    )
}

export default Navigation
