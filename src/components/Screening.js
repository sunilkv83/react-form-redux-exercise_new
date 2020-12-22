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
import { addScreening, updateScreening } from "../actions/action";
import { bindActionCreators } from "redux";
class Screening extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentTemp: "",
    //   wakingTemp: "",
    //   temparatureMethod: "",
    //   temparatureUnit: "",
    //   fever: "",
    //   sob: "",
    //   difficultyBreathing: "",
    // };
  }
  state = {
    ...this.returnStateObject(),
    currentIndex: -1
  };
  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length) {
        this.setState({ ...this.returnStateObject() })
    }
}

  returnStateObject() {
    if (this.props.currentIndex === -1){
      return {
        currentTemp: "",
        wakingTemp: "",
        temparatureMethod: "",
        temparatureUnit: "",
        fever: "",
        sob: "",
        difficultyBreathing: "",
      };
    }
    else {
    return this.props.list.byIds[this.props.currentIndex].content;
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddTodo = () => {
    if (this.props.currentIndex === -1) {
      this.props.addScreening(this.state);
    } else {
      this.props.updateScreening(this.state,this.props.currentIndex);
    }
    this.setState({
      currentTemp: "",
      wakingTemp: "",
      temparatureMethod: "",
      temparatureUnit: "",
      fever: "",
    });
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
    var buttonLabel = "Add Screening";
    if (this.props.currentIndex !== -1) {
      buttonLabel = "Update Screening"
    } 

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
          </div>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <TextField
              name="wakingTemp"
              onChange={this.handleChange}
              placeholder="Waking Temparature"
              value={this.state.wakingTemp}
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <FormControl component="fieldset" style={{ width: 260 }}>
              <FormLabel component="legend">Temparature Unit</FormLabel>
              <RadioGroup
                aria-label="temparatureUnit"
                name="temparatureUnit"
                onChange={this.handleChange}
                row={true}
                value={this.state.temparatureUnit}
                placeholder="Temparature Unit"
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
              //  value={this.state.temparatureMethod}
                defaultValue=""
              >
                <option value="Oral">Oral</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
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
          <div>
            <button
              className="btn btn-outline-primary text-justify"
              onClick={this.handleAddTodo}
            >
            {buttonLabel}
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
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      list: state.screening
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addScreening,
    updateScreening
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Screening);
