import React from "react";
import { connect } from "react-redux";
import { getAllScreening } from "./selectors/screeningSelectors";
//import { bindActionCreators } from 'redux'

class ScreeningList extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <th>Current Temp</th>
            <th>Waking Temp</th>
            <th>Temp Unit</th>
            <th>Temp Method</th>
            <th>Symptoms</th>
          </thead>
          <tbody>
            {this.props.screenings && this.props.screenings.length
              ? this.props.screenings.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <td>{todo.content.currentTemp}</td>
                      <td>{todo.content.wakingTemp}</td>
                      <td>{todo.content.temparatureMethod}</td>
                      <td>{todo.content.temparatureUnit}</td>
                      <td>{todo.content.fever}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary text-justify"
                          onClick={() => this.props.parentCallback(index + 1)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "No records"}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const screenings = getAllScreening(state);
  return { screenings };
};
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(DELETE_SCREENING, dispatch)
// })
// export default TodoList;
export default connect(mapStateToProps)(ScreeningList);
