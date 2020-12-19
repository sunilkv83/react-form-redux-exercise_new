import React, { Component } from "react";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
class MyLocationTable extends Component{
  render() {
    const { values } = this.props;

    return (
    <table className="table table-striped">
      <thead>
        <th>Location</th>
        <th>In Time</th>
        <th>Out Time</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr>
          <td>{values.location}</td>
          <td>{values.InTime}</td>
          <td>{values.OutTime}</td>
          <td>{values.Action}</td>
        </tr>
      </tbody>
    </table>
    );
  }
}
  

const mapStateToProps = state => ({
  values: getFormValues("MyLocationForm")(state) || {}
});

// 1. First thing you have to do is to connect `ComponentOne` with the Redux's Store,
// in order to have access to the Form's state, because it's kept in the Store.
export default connect(mapStateToProps)(MyLocationTable);
