import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Questions from "./components/Questions";
import Match from "./components/Match";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default (
  <Switch>
    <Route path="/profile" component={Profile} />
    <Route path="/questions" component={Questions} />
    <Route path="/match" component={Match} />
    <Route path="/register" component={Register} />
    <Route path="/" exact component={Login} />
  </Switch>
);
