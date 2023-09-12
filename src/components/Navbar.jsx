import React from 'react'
import logo from "../assets/logo.svg"
import signin from "../assets/signin.svg"
import Search from './Search'
import "./navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <img src={logo} alt="" />
            <Search/>
            <div className="signin">
                Sign in <span><img className='signup-btn' src={signin} alt="" /></span>
            </div>
        </nav>
    </div>
  )
}
