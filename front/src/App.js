import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import RegisterUserPage from './Pages/RegisterUserPage';
import RegisterSupplierPage from './Pages/RegisterSupplierPage';



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />

        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/registeruser" component={RegisterUserPage} />
        <Route path="/registersupplier" component={RegisterSupplierPage} />


      </div>
    </Router>
  );
}

export default App;
