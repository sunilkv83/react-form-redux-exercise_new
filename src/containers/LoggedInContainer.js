import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Screening from "../containers/Screening";
import Location from "../containers/Location";

export default class LoggedInContainer extends Component {
  render() {
    return (
      <Router>
        <Header user={this.props.user}></Header>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/screening" component={Screening} />
          <Route path="/mylocations" component={Location} />
        </Switch>
      </Router>
    );
  }
}
