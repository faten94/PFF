import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";


class LoginUserPage extends Component {
  constructor(props){  
    super(props)
    console.log(props);
    this.state = {
      email: "",
      password: "",
    //  redirect: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
  }
  
  
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  loginUser = (e) => {
    
    console.log(this.state);
    axios.post('http://localhost:8080/login', {
    email: this.state.email,
    password: this.state.password
  })
  .then(function (response) {
    // Quand resulat OK => Redirige vers la bonne page
    Cookies.set('token', response.data['token'])
    window.location.reload(false)
    
    // window.location.href = '/'
    
  })
 // .then(() => this.setState({ redirect: true }))
  .catch(function (error) {
    
  });
  
}

render(){
  if (Cookies.get('token')) {
    return <Redirect to = "/"/>
}

  return (
    
    <div className="container">

    <td><Link to ="/loginUser">Connexion Utilisateur</Link></td>
    <td><Link to ="/loginSupplier">Connexion Fournisseur</Link></td>

    <h2>Connexion Utilisateur</h2>
        
    <div className="formLoginDiv">
    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
    <br></br>
    <input type="password" placeholder="Mot de passe" value={this.state.password}  onChange={this.handlePasswordChange} />
    <br></br>
    <button onClick={this.loginUser}>Se connecter</button>
    </div>
    </div>
    )}
  }


    export default LoginUserPage; 
