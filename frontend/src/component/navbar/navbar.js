import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Logo here</h1>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link to="/patient">Add patients</Link></li>
                    <li><Link to="/addusers">Add users</Link></li>
                    <li><Link to="/patientrecord">Patient records</Link></li>
                    <button>Logout</button>
                    
                    

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
