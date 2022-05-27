import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

class Navbar extends React.Component {
    
    render() {
        return (
           <nav>
                <div className="Navbar">
                    <div className="Link">
                        <NavLink className="Logo" to="/logo">XYZ.COM</NavLink>
                        <NavLink className="nav-item" exact to="/">Home</NavLink>
                        <NavLink className="nav-item" to = "/About">About</NavLink>
                    </div>
                </div>
           </nav> 
        )
    }
}

export default Navbar