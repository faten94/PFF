import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import Cookies from 'js-cookie';


function Navbar() {
  if(Cookies.get('token')){
    return (
      <div className="navbar" style={{backgroundColor: "#2D4F6C"}} >
      <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
      <Link to="/account/edit" className="butt">Compte</Link>
      <Link to= "/logout" className="butt" >Logout</Link>
      </div>

      )
    }
    else if(Cookies.get('supplierToken')){
      return (
        <div className="navbar" style={{backgroundColor: "#2D4F6C"}} >
        <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
        <Link to="/supplier/edit" className="butt">Compte</Link>
        <Link to ="/logout" className="butt">Logout</Link>
        </div>
      )
    }
    return (
      <div className="navbar" style={{backgroundColor: "#2D4F6C"}}>
        <Link to= "/"><img className ="logo" src={Logo} alt="logo"/></Link>
        <Link to="/registeruser" className="butt">Inscription</Link>
        <Link to="/loginUser" className="butt">Connexion</Link>
      </div>
      );
    }

    export default Navbar;
