import React from 'react';
import './Navbar.css';
import LoginForm from './loginform/LoginForm';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


function Navbar() {
  if(!Cookies.get('token')){
    return (
      <div className="navbar" style={{backgroundColor: "cornflowerblue"}} >
      <Link to="/registeruser">Inscription</Link>
      <Link to="/registersupplier">Envie de proposer vos services ?</Link>
      <LoginForm />
      
      
      </div>
      );
    }
    return (
      <div className="navbar" style={{backgroundColor: "cornflowerblue"}} >
      <Link to="/account">Compte</Link>
      </div>
      )
    }
    
    export default Navbar;
    