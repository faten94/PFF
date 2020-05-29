import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import RegisterUserPage from './Pages/RegisterUserPage';
import RegisterSupplierPage from './Pages/RegisterSupplierPage';
import ProfileUserPage from './Pages/ProfileUserPage';




function App() {




  return (
    <Router>

      <div className="container">
      <Navbar />

        <br/>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/registeruser" component={RegisterUserPage} />
        <Route path="/registersupplier" component={RegisterSupplierPage} />
        <Route path="/profiluser" component={ProfileUserPage} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
