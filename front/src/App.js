import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import RegisterUserPage from './Pages/RegisterUserPage';



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />

        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterUserPage} />


      </div>
    </Router>
  );
}

export default App;
