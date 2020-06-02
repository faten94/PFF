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
import AdminSuppliersPage from "./Pages/Admin/AdminSuppliersPage";
import AdminDevisPage from "./Pages/Admin/AdminDevisPage";
import AdminCommentsPage from "./Pages/Admin/AdminCommentsPage";
import AdminCRUDUserPage from "./Pages/Admin/AdminCRUDUserPage";
import AdminCRUDSupplierPage from "./Pages/Admin/AdminCRUDSupplierPage";
import AdminCRUDCommentsPage from "./Pages/Admin/AdminCRUDCommentsPage";
import AdminCRUDDevisPage from "./Pages/Admin/AdminCRUDDevisPage";
import AdminUsersCreate from "./Pages/Admin/AdminUsersCreate";
import AdminQuoteCreate from "./Pages/Admin/AdminQuoteCreate";

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
        <ProtectedRouteUser path="/registeruser" component={RegisterUserPage} />
        <ProtectedRouteUser path="/registersupplier" component={RegisterSupplierPage} />
        <Route path="/logout"><Logout /></Route>

        <Route exact path="/admin" component={AdminPage} />
        <Route path="/admin/users" component={AdminUsersPage} />
        <Route path="/admin/user/create" component={AdminUsersCreate} />
        <Route path="/admin/suppliers" component={AdminSuppliersPage} />
        <Route path="/admin/comments" component={AdminCommentsPage} />
        <Route path="/admin/quotes" component={AdminDevisPage} />
        <Route path="/admin/quote/create" component={AdminQuoteCreate} />
        <Route path="/admin/user/:_id" component={AdminCRUDUserPage} />
        <Route path="/admin/supplier/:id" component={AdminCRUDSupplierPage} />
        <Route path="/admin/comment/:id" component={AdminCRUDCommentsPage} />
        <Route path="/admin/quote/:id" component={AdminCRUDDevisPage} />
        <Route path="/404" component={Error404Page} />
        <Redirect to="/404" /> 
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
