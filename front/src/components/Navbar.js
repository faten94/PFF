import React from 'react';
import './Navbar.css';
import LoginForm from './loginform/LoginForm';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div className="navbar" style={{backgroundColor: "cornflowerblue"}} >
      <Link to="/registeruser">Inscription</Link>
      <Link to="/registersupplier">Envie de proposer vos services ?</Link>

    <LoginForm />


    </div>
  );
}

export default Navbar;
