import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Link to="/"></Link>
          <Switch>
            <Route exact path="/" component={Home} />
           
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
