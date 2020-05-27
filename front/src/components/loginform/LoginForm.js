import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="formLoginDiv">
          <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Connetion</button>
    </div>
  );
}

export default LoginForm;
