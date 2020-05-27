import React from 'react';
//import './RegisterForm.css';

function RegisterUserPage() {
  return (
    <div className="registerFormDiv">
        <h1>Formulaire d'inscription</h1>
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
  );
}

export default RegisterUserPage;
