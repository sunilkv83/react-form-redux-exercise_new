import React from "react";
import { connect } from "react-redux";
import { addScreening } from "../actions/action";
import TextField from "material-ui/TextField";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme) => ({
  group: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
});

class Screening extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: "",
      wakingTemp: "",
      temparatureMethod: "",
      temparatureUnit: "",
      fever: "",
      sob: "",
      difficultyBreathing: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddTodo = () => {
    this.props.addScreening(this.state);
    this.setState({ currentTemp: "", wakingTemp: "" });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <TextField
            name="currentTemp"
            onChange={this.handleChange}
            placeholder="Current Temparature"
          />
        </div>
        <div>
          <TextField
            name="wakingTemp"
            onChange={this.handleChange}
            placeholder="Waking Temparature"
          />
        </div>
        <br></br>

        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Temparature Unit</FormLabel>
            <RadioGroup
              aria-label="temparatureUnit"
              name="temparatureUnit"
              onChange={this.handleChange}
              row={true}
            >
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="C" control={<Radio />} label="C" />
            </RadioGroup>
          </FormControl>
        </div>
        <br></br>

        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Temparature Method</FormLabel>
            <Select name="temparatureMethod" onChange={this.handleChange}>
              <option value="Oral">Oral</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
        </div>
        <br></br>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">SYMPTOPMS</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    value="Fever"
                    name="fever"
                  />
                }
                label="Fever"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    value="SOB"
                    name="sob"
                  />
                }
                label="Shortness of Breath"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    value="Difficulty Breathing"
                    name="difficultyBreathing"
                  />
                }
                label="Difficulty Breathing"
              />
            </FormGroup>
          </FormControl>
        </div>
        <button
          className="btn btn-outline-primary text-justify"
          onClick={this.handleAddTodo}
        >
          Add Screening
        </button>
        <br></br>
      </div>
    );
  }
}

export default connect(null, { addScreening })(Screening);
