import React from "react";
import { connect } from "react-redux";
import { getAllLocations } from "../components/selectors/locationSelectors";

const LocationList = ({ locations }) => (
  <div>
    <table className="table table-striped">
      <thead>
        <th>Location</th>
        <th>In Time</th>
        <th>Out Time</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {locations && locations.length
          ? locations.map((location, index) => {
              return (
                <tr key={index}>
                  <td>{location.content.location}</td>
                  <td>{location.content.inTime}</td>
                  <td>{location.content.outTime}</td>
                  <td>{location.content.actions}</td>
                </tr>
              );
            })
          : "No records"}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  const locations = getAllLocations(state);
  return { locations };
};
export default connect(mapStateToProps)(LocationList);
