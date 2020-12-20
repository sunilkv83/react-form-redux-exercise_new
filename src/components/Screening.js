import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { addScreening } from "../actions/action";

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

  handleReset = () => {
    this.setState({
      ...this.state,
      currentTemp: "",
      wakingTemp: "",
      temparatureMethod: "",
      temparatureUnit: "",
      fever: "",
      sob: "",
      difficultyBreathing: "",
    });
  };
  render() {
    return (
      <div>
        <br></br>
        <div className="form-row">
        <div>
          <TextField
            name="currentTemp"
            onChange={this.handleChange}
            placeholder="Current Temparature"
            value={this.state.currentTemp}
          />
          </div> &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <TextField
              name="wakingTemp"
              onChange={this.handleChange}
              placeholder="Waking Temparature"
              value={this.state.wakingTemp}
            />
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <FormControl component="fieldset" style={{ width: 260 }}>
              <FormLabel component="legend">Temparature Unit</FormLabel>
              <RadioGroup
                aria-label="temparatureUnit"
                name="temparatureUnit"
                onChange={this.handleChange}
                row={true}
                value={this.state.temparatureUnit} placeholder="Temparature Unit"
              >
                <FormControlLabel value="F" control={<Radio />} label="F" />
                <FormControlLabel value="C" control={<Radio />} label="C" />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="form-row">
          <div>
          <FormControl component="fieldset" style={{ width: 260 }}>
            <FormLabel component="legend">Temparature Method</FormLabel>
            <Select
              name="temparatureMethod"
              onChange={this.handleChange}
              value={this.state.temparatureMethod}
            >
              <option value="Oral">Oral</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <FormControl component="fieldset" style={{ width: 260 }}>
              <FormLabel component="legend">Symptoms</FormLabel>
            </FormControl>

              <FormGroup row>
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
          </div>
        </div>
        <br></br>
        <div className="form-row text-right">
        <button
          className="btn btn-outline-primary text-justify"
          onClick={this.handleAddTodo}
        >
          Add Screening
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-outline-primary text-justify"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <br></br>
        </div>
      </div>
    );
  }
}

export default connect(null, { addScreening })(Screening);
