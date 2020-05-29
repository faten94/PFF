import React from 'react';
import axios from "axios"
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
       phone: ""


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

     console.log(this.state);
     axios.post('http://localhost:8080/register', {
         firstname: this.state.firstname,
         lastname: this.state.lastname,
         email: this.state.email,
         password: this.state.password,
         address: this.state.address,
         phone: this.state.phone


       })
       .then(function (response) {
         // Quand resulat OK => Redirige vers la bonne page
       })
       .catch(function (error) {
         alert(error.response.data.error);
       });


   }


  render() {
    return (
    <div className="registerFormDiv">
        <h1>Formulaire d'inscription</h1>
        <div className="formItem">
        <input type="text" placeholder="First name" value={this.state.firstname} onChange={this.handleFirstnameChange} />
        </div>
        <div className="formItem">
        <input type="text" placeholder="Last name" value={this.state.lastname} onChange={this.handleLastnameChange} />
        </div>
        <div className="formItem">
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
        </div>
        <div className="formItem">
      <input type="text" placeholder="Adresse" value={this.state.address} onChange={this.handleAddressChange}/>
      </div>
      <div className="formItem">
      <input type="texte" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange} />
      </div>
        <div className="formItem">
      <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
      </div>

      <div className="formItem">
      <input type="password" placeholder="Confirm password" />
      </div>

      <div className="formItem">
      <button type= "button" onClick={this.registerUser} >Register</button>
      </div>
    </div>
  );
  }
}


export default RegisterUserPage;
