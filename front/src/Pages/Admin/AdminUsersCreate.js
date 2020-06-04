import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './RegisterForm.css';

class AdminUsersCreate extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
        <div className="container">
        <Link to="/admin">
        <button>
        Retour
        </button>
        </Link>
        <div className="registerFormDiv">
        <h1>Formulaire de création d'un utilisateur</h1>
        <div className="formItem">
        <input type="text" placeholder="First name" />
        </div>
        <div className="formItem">
        <input type="text" placeholder="Last name" />
        </div>
        <div className="formItem">
        <input type="email" placeholder="Email" />
        </div>
        <div className="formItem">
        <input type="password" placeholder="Password" />
        </div>
        <div className="formItem">
        <input type="password" placeholder="Confirm password" />
        </div>
        <div className="formItem">
        <button>Register</button>
        </div>
        </div>
        </div>
        )
    }
}

export default AdminUsersCreate;