import { Switch, Route } from "react-router-dom";

import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <p>Página não encontrada!</p>
      </Route>
    </Switch>
  );
};
