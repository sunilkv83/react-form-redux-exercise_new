import React from "react";
import ScreeningList from "../components/ScreeningList";
import Screening from "../components/Screening";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Timer from "../components/Timer"
class ScreeningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1,
    };
  }

  handleCallback = (index) => {
    this.setState({currentIndex: index})
      }

  render() {
    return (
      <div id="content-wrapper">
        <div className="card mx-auto"></div>
        <div className="card-body md-2 text-justify">
        
          <MuiThemeProvider>
            
            <Screening currentIndex={this.state.currentIndex}></Screening>
            <br></br>
            <ScreeningList parentCallback={this.handleCallback}></ScreeningList>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default ScreeningContainer;
