import React, { Component } from "react";
import Screening from "./Screening";
import { connect } from "react-redux";
import * as actions from "../../actions/screeningActions";
import { bindActionCreators } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ScreeningList extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <div className="card mx-auto">
          <div className="card-header text-center">COVID-19 Screening Data</div>
        </div>
        <div className="card-body md-2 text-justify">
          <div>
            <MuiThemeProvider>
              <Screening />
            </MuiThemeProvider>
            <br />
            <table className="table table-striped">
              <thead>
                <th>Current Temp</th>
                <th>Waking Temp</th>
                <th>Temp Unit</th>
                <th>Temp Method</th>
                <th>Symptoms</th>
              </thead>
              <tbody>
                {this.props.list &&
                  this.props.list.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.currentTemp}</td>
                        <td>{item.wakingTemp}</td>
                         <td>{item.temparature}</td>
                        <td>Oral</td> 
                        <td>...</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, undefined)(ScreeningList);
