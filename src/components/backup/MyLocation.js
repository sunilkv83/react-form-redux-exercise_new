import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import Sidebar from "./sidebar";
import { Component } from "react";
import MyLocationForm from "./MyLocationForm";
import MyLocationTable from "./MyLocationTable";

class MyLocation extends Component {
  render() {
    return (
          <div id="content-wrapper">
            <div className="card mx-auto">
              <div className="card-header text-center">My Location</div>
            </div>
            <div className="card-body md-2 text-justify">
              <MuiThemeProvider>
                <MyLocationForm />
                <br></br>
                <MyLocationTable />
              </MuiThemeProvider>
            </div>
          </div>
    );
  }
}
export default MyLocation;
