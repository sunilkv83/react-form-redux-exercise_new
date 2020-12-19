import React from "react";
import ScreeningList from "../components/ScreeningList";
import Screening from "../components/Screening";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ScreeningContainer extends React.Component {
  render() {
    return (
      <div id="content-wrapper">
        <div className="card mx-auto">
        </div>
        <div className="card-body md-2 text-justify">
          <MuiThemeProvider>
            <Screening></Screening>
            <br></br>
            <ScreeningList></ScreeningList>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default ScreeningContainer;
