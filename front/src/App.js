import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import ProfileSettingSupplierPage from "./Pages/ProfileSettingSupplierPage";
import AdminPage from "./Pages/AdminPage";
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Logout from './components/logout/Logout';
import RegisterUserPage from './Pages/RegisterUserPage';
import RegisterSupplierPage from './Pages/RegisterSupplierPage';
import ProfileUserPage from "./Pages/ProfileUserPage";
import ProfileSupplier from "./Pages/ProfileSupplier";
import AdminUsersPage from "./Pages/AdminUsersPage";
import AdminCRUDUserPage from "./Pages/AdminCRUDUserPage";
import AdminCRUDSupplierPage from "./Pages/AdminCRUDSupplierPage";
import AdminCRUDCommentsPage from "./Pages/AdminCRUDCommentsPage";
import AdminCRUDDevisPage from "./Pages/AdminCRUDDevisPage";
import Error404Page from "./Pages/Error404Page";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
  
      <Navbar />
        <Switch>
        <Route exact path="/account" component={ProfileUserPage} />
        <Route exact path="/accountsupplier" component={ProfileSupplier} />
        <Route exact path="/accountsupplier/edit" component={ProfileSettingSupplierPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/registeruser" component={RegisterUserPage} />
        <Route path="/registersupplier" component={RegisterSupplierPage} />
        <Route path="/logout"><Logout /></Route>
        <Route path="/admin/users" component={AdminUsersPage} />
        <Route path="/admin/cruduser" component={AdminCRUDUserPage} />
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
