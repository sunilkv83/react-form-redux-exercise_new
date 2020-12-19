import React from "react";
import Screening from "./components/Screening";
import ScreeningList from "./components/ScreeningList";
// import "./styles.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default function TodoApp() {
  return (
    <div className="todo-app">
      <MuiThemeProvider>
      <Screening />
      <ScreeningList/>
      </MuiThemeProvider>
    </div>
  );
}
