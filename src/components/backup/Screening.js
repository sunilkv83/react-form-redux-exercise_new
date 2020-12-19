import ScreeningForm from "./ScreeningForm";
import SimpleTable from "./SimpleTable";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Component } from "react";
import showResults from "./showResults";

class Screening extends Component {
  render() {
    return (
        <div id="content-wrapper">
          <div className="card mx-auto">
            <div className="card-header text-center">
              COVID-19 Screening Data
            </div>
          </div>
          <div className="card-body md-2 text-justify">
            <MuiThemeProvider>
              <ScreeningForm onSubmit={showResults} />
              <br></br>
              <SimpleTable />
            </MuiThemeProvider>
          </div>
        </div>
    );
  }
}
export default Screening;
