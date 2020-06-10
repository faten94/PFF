import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'
import Cookies from 'js-cookie';
import { Menu } from 'semantic-ui-react'


function Navbar() {
  if(Cookies.get('token')){
    return (
      <Menu inverted fluid style={{backgroundColor: "#2D4F6C"}}>
        <Menu.Item name='home' size="1em"> 
          <Link to= "/"><img className ="logo" src={Logo} alt="logo" width="20%"/></Link>
        </Menu.Item>
                  
          <Menu.Menu position='right'>
            <Menu.Item name='Inscription'>
              <Link to="/account/edit" className="butt">Compte</Link>
            </Menu.Item>
                
            <Menu.Item name='Connexion'>
              <Link to ="/logout" className="butt">Logout</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      )
    }
    else if(Cookies.get('supplierToken')){
      return (
        <Menu inverted fluid style={{backgroundColor: "#2D4F6C"}}>
          <Menu.Item name='home' size="1em"> 
            <Link to= "/"><img className ="logo" src={Logo} alt="logo" width="20%"/></Link>
          </Menu.Item>
              
          <Menu.Menu position='right'>
            <Menu.Item name='Inscription'>
              <Link to="/supplier/edit" className="butt">Compte</Link>
            </Menu.Item>
            
            <Menu.Item name='Connexion'>
              <Link to ="/logout" className="butt">Logout</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      )
    }
    return (
      <Menu inverted fluid style={{backgroundColor: "#2D4F6C"}}>
        <Menu.Item name='home' size="1em"> 
          <Link to= "/"><img className ="logo" src={Logo} alt="logo" width="20%"/></Link>
        </Menu.Item>
        <Menu.Menu position='right'>
        <Menu.Item name='Inscription'>
          <Link to="/registeruser" className="butt">Inscription</Link>
        </Menu.Item>
      
        <Menu.Item name='Connexion'>
          <Link to="/loginUser" className="butt">Connexion</Link>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
      );
    }

    export default Navbar;
