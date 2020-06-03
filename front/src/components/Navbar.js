import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import Cookies from 'js-cookie';


function Navbar() {
  if(Cookies.get('token')){
    return (
      <div className="navbar" style={{backgroundColor: "#2D4F6C"}} >
      <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
      <Link to="/account/edit">Compte</Link>
      <Link to= "/logout">Logout</Link>
      </div>
      
      )
    }
    else if(Cookies.get('supplierToken')){
      return (
        <div className="navbar" style={{backgroundColor: "#2D4F6C"}} >
        <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
        <Link to="/accountsupplier/edit">Compte</Link>
        <Link to ="/logout">Logout</Link>
        </div>
      )
    }
    return (    
      <div className="navbar" style={{backgroundColor: "#2D4F6C"}}> 
        <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
        <Link to="/registeruser">Inscription</Link>
        <Link to="/loginUser">Connexion</Link>
      </div>
      );
    }

    export default Navbar;
