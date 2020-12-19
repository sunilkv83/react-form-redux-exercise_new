import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import Login from "./components/Login";

import Screening from "./containers/Screening";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default function App() {
  return (
    // <div className="todo-app">
    //   <MuiThemeProvider>
    //   <Screening />
    //   <ScreeningList/>
    //   </MuiThemeProvider>
    // </div>

    <div className="App">
    <div id="wrapper">
      <Router>
        <Header></Header>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/screening" component={Screening} />
        </Switch>
      </Router>
    </div>
  </div>

  );
}
