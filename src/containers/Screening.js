import React from "react";
import ScreeningList from "../components/ScreeningList";
import Screening from "../components/Screening";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ScreeningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1,
    };
  }
  // handleCallback = (index) => {
  //   // this.setState({ currentIndex: e });
  //   // console.log(e);
  //   // this.setState({ currentIndex: e.target.value }, () => 
  //   // console.log(this.state.currentIndex));
  //   this.state.currentIndex = index;
  // };
  handleCallback = (e) => {
    this.setState({currentIndex: e})
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
