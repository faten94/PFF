import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import ProfileUserPage from "./Pages/ProfileUserPage";
import ProfileSettingUserPage from "./Pages/ProfileSettingUserPage";
import ProfileSettingSupplierPage from "./Pages/ProfileSettingSupplierPage";
import AdminPage from "./Pages/AdminPage";
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Logout from './components/logout/Logout';
import RegisterUserPage from './Pages/RegisterUserPage';
import RegisterSupplierPage from './Pages/RegisterSupplierPage';



function App() {
  return (
    <div className="container">
      <BrowserRouter>
  
      <Navbar />
        <Switch>
        <Route exact path="/account" component={ProfileUserPage} />
        <Route exact path="/accountsupplier/edit" component={ProfileSettingSupplierPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/registeruser" component={RegisterUserPage} />
        <Route path="/registersupplier" component={RegisterSupplierPage} />
        <Route path="/logout"><Logout /></Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
