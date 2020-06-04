import React from 'react';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
//import './RegisterForm.css';
class RegisterUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      redirect: false
      
    }
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    
  }
  
  
  handleFirstnameChange = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }
  
  handleLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value
    })
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
  
  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  
  
  
  
  registerUser = (e) => {
    
    axios.post('http://localhost:8080/register', {
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.email,
    password: this.state.password,
    address: this.state.address,
    phone: this.state.phone,
    
    
  })
  .then(function (response) {
    // Quand resulat OK => Redirige vers la bonne page
    // console.log('on est dans register baby', response)
  })
  .then(() => this.setState({ redirect: true })) 
  .catch(function (error) {
    alert(error.response.data.error);
  });
  
  
}


render() {

  if (this.state.redirect) {
      return (<Redirect to = "/loginUser"/>)
  }
  return (
<div className="container">
    <div className="registerFormDiv">
    <td><Link to ="/registerUser">Inscription Utilisateur</Link></td>
    <td><Link to ="/registerSupplier">Inscription Fournisseur</Link></td>
    <h1>Formulaire d'inscription Utilisateur</h1>
    <div className="formItem">
    <input type="text" placeholder="Prenom" value={this.state.firstname} onChange={this.handleFirstnameChange} />
    </div>
    <div className="formItem">
    <input type="text" placeholder="Nom" value={this.state.lastname} onChange={this.handleLastnameChange} />
    </div>
    <div className="formItem">
    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
    </div>
    <div className="formItem">
    <input type="text" placeholder="Adresse" value={this.state.address} onChange={this.handleAddressChange}/>
    </div>
    <div className="formItem">
    <input type="texte" placeholder="Telephone" value={this.state.phone} onChange={this.handlePhoneChange} />
    </div>
    <div className="formItem">
    <input type="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handlePasswordChange} />
    </div>
    
    <div className="formItem">
    <input type="password" placeholder="Confirmer le mot de passe" />
    </div>
    
    <div className="formItem">
    <button type= "button" onClick={this.registerUser} >S'inscrire</button>
    </div>
    </div>
</div>
    );
  }
}


export default RegisterUserPage;
