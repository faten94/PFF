import React from 'react';
import './Navbar.css';
import LoginForm from './loginform/LoginForm';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className="navbar" style={{backgroundColor: "cornflowerblue"}} >
      <Link to="/register">Inscription</Link>

    <LoginForm />


    </div>
  );
}

export default Navbar;
