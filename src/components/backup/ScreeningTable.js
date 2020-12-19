import React, { Component } from "react";
import { connect } from "react-redux";
import ScreeningForm from "../components/ScreeningForm"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class ScreeningTable extends Component {
  render() {

    return (
      <div>
      <MuiThemeProvider>
      <ScreeningForm/>
      </MuiThemeProvider>

      <table className="table table-striped">
        <thead>
          <th>Current Temp</th>
          <th>Waking Temp</th>
          <th>Temp Unit</th>
          <th>Temp Method</th>
          <th>Symptoms</th>
        </thead>
        <tbody>
         
          {this.props.list && this.props.list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.currentTemp}</td>
                <td>{item.wakingTemp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

// const mapStateToProps = state => ({
//   // 2. Secondly, you can query the Store and get the `SimpleForm`'s field value.
//   values: getFormValues("ScreeningForm")(state) || {}
// });

// 1. First thing you have to do is to connect `ComponentOne` with the Redux's Store,
// in order to have access to the Form's state, because it's kept in the Store.
export default connect(mapStateToProps, undefined)(ScreeningTable);
