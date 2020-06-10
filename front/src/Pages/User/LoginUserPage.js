import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Button, Checkbox, Form, Menu, Segment } from 'semantic-ui-react'


class LoginUserPage extends Component {
  constructor(props){  
    super(props)
    console.log(props);
    this.state = {
      email: "",
      password: "",
      activeItem: 'userlogin'
    //  redirect: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
  const { activeItem } = this.state
  if (Cookies.get('token')) {
    return <Redirect to = "/"/>
}

  return (
    <Form>
      <Segment>
      <Menu  attached='top' tabular>
        <Link to ="/loginUser">
          <Menu.Item name='userlogin' active={activeItem === 'userlogin'} onClick={this.handleItemClick}>
            Connexion Utilisateur
          </Menu.Item>
        </Link>
        <Link to ="/loginSupplier">
          <Menu.Item name='supplierlogin' active={activeItem === 'supplierlogin'} onClick={this.handleItemClick}>
            Connexion Fournisseur
          </Menu.Item>
        </Link>
      </Menu>
    <Form.Field>
      <label>Email</label>
      <input label='Email' placeholder='Email' value={this.state.email} onChange={this.handleEmailChange}/>
    </Form.Field>
    <Form.Field>
      <label>Mot de passe</label>
      <input type="password"label='Mot de passe' placeholder='Mot de passe' value={this.state.password}  onChange={this.handlePasswordChange}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' onClick={this.loginUser}>Se connecter</Button>
    </Segment>
  </Form>

    
    // <div className="container">

    // <td><Link to ="/loginUser">Connexion Utilisateur</Link></td>
    // <td><Link to ="/loginSupplier">Connexion Fournisseur</Link></td>

    // <h2>Connexion Utilisateur</h2>
        
    // <div className="formLoginDiv">
    // <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
    // <br></br>
    // <input type="password" placeholder="Mot de passe" value={this.state.password}  onChange={this.handlePasswordChange} />
    // <br></br>
    // <button onClick={this.loginUser}>Se connecter</button>
    // </div>
    // </div>
    )}
  }


    export default LoginUserPage; 
