import React from 'react';
import './LoginForm.css';
import axios from "axios"


class  LoginForm extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       email: "",
       password: ""
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
       })
       .catch(function (error) {
         alert(error.response.data.error);
       });


   }


  render() {
    return (
      <div className="formLoginDiv">
            <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        <input type="password" placeholder="Password" value={this.state.password}  onChange={this.handlePasswordChange} />
        <button onClick={this.loginUser}>Connetion</button>
      </div>
    );
  }
}













export default LoginForm;
