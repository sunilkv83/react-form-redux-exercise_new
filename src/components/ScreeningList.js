import React from "react";
import { connect } from "react-redux";
import { getAllScreening } from "../selectors";

const ScreeningList = ({ todos }) => (
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
     
    {todos && todos.length
      ? todos.map((todo, index) => {
        return  (
          <tr key={index}>
            <td>{todo.content.currentTemp}</td>
            <td>{todo.content.wakingTemp}</td>
            <td>{todo.content.temparatureMethod}</td>
            <td>{todo.content.temparatureUnit}</td>
            <td>{todo.content.fever}</td>
          </tr>
        );
      })
      : "No records"
    }
    </tbody>
  </table>
  </div>

);



const mapStateToProps = state => {
  const todos = getAllScreening(state);
  return { todos };

};
// export default TodoList;
export default connect(mapStateToProps)(ScreeningList);
