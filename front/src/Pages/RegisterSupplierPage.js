import React from 'react';
import axios from 'axios';
//import './RegisterForm.css';

class RegisterSupplierPage extends React.Component {
constructor(props) {
     super(props);
     this.state = {
       firstname: "",
       lastname: "",
       email: "",
       password: "",
       address: "",
       phone: "",
       typesupplier: "",
       siret: "",
       zipe: "",
       city: "",
       expertise: ""


     }
     this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
     this.handleLastnameChange = this.handleLastnameChange.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handlePasswordChange = this.handlePasswordChange.bind(this);
     this.handleAddressChange = this.handleAddressChange.bind(this);
     this.handlePhoneChange = this.handlePhoneChange.bind(this);
     this.handleTypesupplierChange = this.handleTypesupplierChange.bind(this);
     this.handleSiretChange = this.handleSiretChange.bind(this);
     this.handleZipeChange = this.handleZipeChange.bind(this);
     this.handleCityChange = this.handleCityChange.bind(this);
     this.handleExpertiseChange = this.handleExpertiseChange.bind(this);


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

handleTypesupplierChange = (e) => {
     this.setState({
       typesupplier: e.target.value
     })
   }

handleSiretChange = (e) => {
     this.setState({
       siret: e.target.value
     })
   }
handleZipeChange = (e) => {
     this.setState({
       zipe: e.target.value
     })
   }
handleCityChange = (e) => {
     this.setState({
       city: e.target.value
     })
   }
handleExpertiseChange = (e) => {
     this.setState({
       expertise: e.target.value
     })
   }

   registerSupplier = (e) => {

     console.log(this.state);
     axios.post('http://localhost:8080/supplierRegister', {
         firstname: this.state.firstname,
         lastname: this.state.lastname,
         email: this.state.email,
         password: this.state.password,
         address: this.state.address,
         phone: this.state.phone,
         typesupplier: this.state.typesupplier,
         siret: this.state.siret,
         zip: this.state.zip,
         city: this.state.city,
         expertise: this.state.expertise


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
    <input type="number" placeholder="Siret" value={this.state.siret} onChange={this.handleSiretChange}/>
    </div>
    <div className="formItem">
      <input type="text" placeholder="typesupplier" value={this.state.typesupplier} onChange={this.handleTypesupplierChange}/>
      </div>
      <div className="formItem">
    <input type="number" placeholder="Zipe" value={this.state.zipe} onChange={this.handleZipeChange}/>
    </div>
    <div className="formItem">
    <input type="text" placeholder="City" value={this.state.city} onChange={this.handleCityChange}/>
    </div>

    <div className="formItem">
    <input type="texte" placeholder="Expertise" value={this.state.expertise} onChange={this.handleExpertiseChange}/>
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
      <button type= "button" onClick={this.registerSupplier} >Register</button>
      </div>
    </div>
  );
  }
}

export default RegisterSupplierPage;
