import React from "react"
import './index.css'


const NavBar = () => {

    return (
        <nav className="navbar">
            <a href="/home" className="link-nav">Home</a>
            <a href="/about" className="link-nav">About</a>
            <a href="/skills" className="link-nav">Skills</a>
            <a href="/contact" className="link-nav">Contact</a>
        </nav>
    )
}

export default NavBar