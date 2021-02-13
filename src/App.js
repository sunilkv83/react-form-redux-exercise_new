import { React, Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import { getLoggedInUser } from "./components/selectors/loginSelectors";
import { connect } from "react-redux";
import LoggedInContainer from "./containers/LoggedInContainer";
import Timer from "./components/Timer"
class App extends Component {
  render() {
    if (
      typeof this.props.loggedInUser.content !== "undefined" &&
      this.props.loggedInUser.content != null
    ) {
      return (
        <div className="App">
        
          <div id="wrapper">
            <LoggedInContainer
              user={this.props.loggedInUser.content}
            ></LoggedInContainer>
          </div>
        </div>
      );
    } else {
      <Redirect to="/" />;
      return (
        <div className="App">
          <div id="wrapper">
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
              </Switch>
            </Router>
          </div>
        </div>
      );
    }
  }
}

// start of code change
const mapStateToProps = (state) => {
  const loggedInUser = getLoggedInUser(state);
  return { loggedInUser };
};

export default connect(mapStateToProps)(App);
