import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/screeningActions";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

class Screening extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    return {
      currentTemp: "",
      wakingTemp: "",
      temparature:"",
      tempatureMethod:""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.insertScreening(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <br />
        <div>
          <TextField
            name="currentTemp"
            floatingLabelText="Current Temp"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <TextField
            name="wakingTemp"
            floatingLabelText="Waking Temp"
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <RadioButtonGroup
            aria-label="temparature"
            name="temparature"
            onChange={this.handleInputChange}
          >
            <RadioButton value="C" label="C" />
            <RadioButton value="F" label="F" />
          </RadioButtonGroup>
        </div>
        <div>
          <SelectField name="tempatureMethod" label="Tempature Method"   onChange={this.handleInputChange}>
            <MenuItem value="Oral" primaryText="Oral" />
            <MenuItem value="Other" primaryText="Other" />
          </SelectField>
        </div>
        <div>
          <Checkbox name="Fever" label="Fever" />
          <Checkbox name="SOB" label="SOB ( Shortness Of Breath" />
          <Checkbox name="BluishLips" label="Bluish Lips" />
          <Checkbox name="DifficultyBreathing" label="Difficulty Breathing" />
          <Checkbox name="InAbilityToWakeUp" label="InAbility To WakeUp" />
        </div>
        <div>
          <button type="submit" class="btn btn-outline-primary">
            Add Screening Data
          </button>{" "}
          &nbsp;
          <button type="button" class="btn btn-outline-primary">
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertScreening: actions.insert,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Screening);
