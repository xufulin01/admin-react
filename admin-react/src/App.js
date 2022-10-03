import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { Login } from "./views/login/index";
import { Layouts } from "./views/layout/index";
import { PerRoute } from "../src/perRouter/index";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Login />}></Route>
      <PerRoute component={Layouts} path="/home"></PerRoute>
    </Switch>
  );
};
export default App;
