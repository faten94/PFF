import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRouteUser from "./protectedRoute";

import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Logout from './components/logout/Logout';
import Error404Page from "./Pages/Error404Page";

import RegisterSupplierPage from './Pages/Supplier/RegisterSupplierPage';
import ProfileSettingSupplierPage from './Pages/Supplier/ProfileSettingSupplierPage';
import ProfileSupplier from "./Pages/Supplier/ProfileSupplier";

import RegisterUserPage from './Pages/RegisterUserPage';
import ProfileUserPage from "./Pages/ProfileUserPage";

import AdminPage from "./Pages/Admin/AdminPage";
import AdminUsersPage from "./Pages/Admin/AdminUsersPage";
import AdminCRUDUserPage from "./Pages/Admin/AdminCRUDUserPage";
import AdminCRUDSupplierPage from "./Pages/Admin/AdminCRUDSupplierPage";
import AdminCRUDCommentsPage from "./Pages/Admin/AdminCRUDCommentsPage";
import AdminCRUDDevisPage from "./Pages/Admin/AdminCRUDDevisPage";



function App() {
  return (
    <div className="container">
      <BrowserRouter>
  
      <Navbar />
        <Switch>
        <Route exact path="/account" component={ProfileUserPage} />
        <Route exact path="/accountsupplier" component={ProfileSupplier} />
        <Route exact path="/accountsupplier/edit" component={ProfileSettingSupplierPage} />
        <Route path="/" exact component={HomePage} />
        <ProtectedRouteUser exact path="/account" component={ProfileUserPage} />
        <Route exact path="/admin" component={AdminPage} />
        <ProtectedRouteUser path="/registeruser" component={RegisterUserPage} />
        <ProtectedRouteUser path="/registersupplier" component={RegisterSupplierPage} />
        <Route path="/logout"><Logout /></Route>

        <Route path="/admin/users" component={AdminUsersPage} />
        <Route path="/admin/user/:_id" component={AdminCRUDUserPage} />
        <Route path="/admin/crudsupplier" component={AdminCRUDSupplierPage} />
        <Route path="/admin/crudcomments" component={AdminCRUDCommentsPage} />
        <Route path="/admin/cruddevis" component={AdminCRUDDevisPage} />
        <Route path="/404" component={Error404Page} />
        <Redirect to="/404" /> 
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
