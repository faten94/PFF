import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import ProfileUserPage from "./Pages/ProfileUserPage";
import ProfileSettingUserPage from "./Pages/ProfileSettingUserPage";
import ProfileSettingSupplierPage from "./Pages/ProfileSettingSupplierPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/account" component={ProfileUserPage} />
          <ProtectedRoute exact path="/account/edit" component={ProfileSettingUserPage} />
          <ProtectedRoute exact path="/accountsupplier/edit" component={ProfileSettingSupplierPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
