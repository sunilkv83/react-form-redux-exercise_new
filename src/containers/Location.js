import React from "react";
import LocationList from "../components/LocationList";
import MyLocation from "../components/MyLocation";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class LocationContainer extends React.Component {
  render() {
    return (
      <div id="content-wrapper">
        <div className="card mx-auto">
        </div>
        <div className="card-body md-2 text-justify">
          <MuiThemeProvider>
            <MyLocation></MyLocation>
            <br></br>
            <LocationList></LocationList>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default LocationContainer;
