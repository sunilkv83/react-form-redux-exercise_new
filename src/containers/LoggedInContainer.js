import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Screening from "../containers/Screening";
import Location from "../containers/Location";
import Timer from "../components/Timer";
const LoggedInContainer = (props) => {
  return (
    <div>
      <Router>
        <table>
          <tr>
            <td colSpan="2">
              <Header></Header>
            </td>
          </tr>
          <tr>
            <td>
              <Sidebar></Sidebar>
            </td>
            <td>
              <div className="navbar-nav px-3 text-right">
                <br></br>
                <Timer></Timer>
              </div>

              <Switch>
                <Route path="/screening" component={Screening} />
                <Route path="/mylocations" component={Location} />
              </Switch>
            </td>
          </tr>
        </table>
      </Router>
    </div>
  );
};
export default LoggedInContainer;
