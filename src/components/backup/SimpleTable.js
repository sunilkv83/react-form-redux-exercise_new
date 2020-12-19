import React, { Component } from "react";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
class SimpleTable extends Component{
  render() {
    const { values } = this.props;

    return (
    <table className="table table-striped">
      <thead>
        <th>Current Temp</th>
        <th>Waking  Temp</th>
        <th>Temp Unit</th>
        <th>Temp Method</th>
        <th>Symptoms</th>
      </thead>
      <tbody>
        <tr> 
          <td>{values.currentTemp}</td>
          <td>{values.wakingTemp}</td>
          <td>{values.temparatureUnit}</td>
          <td>{values.tempatureMethod}</td>
          <td></td>

        </tr>
      </tbody>
    </table>
    );
  }
}
  

const mapStateToProps = state => ({
  // 2. Secondly, you can query the Store and get the `SimpleForm`'s field value.
  values: getFormValues("ScreeningForm")(state) || {}
});

// 1. First thing you have to do is to connect `ComponentOne` with the Redux's Store,
// in order to have access to the Form's state, because it's kept in the Store.
export default connect(mapStateToProps)(SimpleTable);
