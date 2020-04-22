import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../container/home';
import Dashboard from '../container/dashboard';
import Header from '../component/header/Header';

export default () => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </div>
)
