import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import * as actions from "../actions/screeningActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

class ScreeningForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit= (formValues) => { 
    this.props.insertScreening(formValues);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)} style={{ minWidth: 120 }}>
        <div>
          <Field
            name="currentTemp"
            component={renderTextField}
            label="Current Temparature"
          />
        </div>
        <div>
          <Field
            name="wakingTemp"
            component={renderTextField}
            label="Waking Temparature"
          />
        </div>

        <div>
          Temparature Unit
          <Field
            name="temparatureUnit"
            component={renderRadioGroup}
            label="Temparature Unit"
          >
            <RadioButton value="C" label="C" />
            <RadioButton value="F" label="F" />
          </Field>
        </div>

        <Field
          name="tempatureMethod"
          component={renderSelectField}
          label="Temparature Method"
        >
          <MenuItem value="Oral" primaryText="Oral" />
          <MenuItem value="Other" primaryText="Other" />
        </Field>

        <div>
          <Field name="Fever" component={renderCheckbox} label="Fever" />
          <Field
            name="SOB"
            component={renderCheckbox}
            label="SOB ( Shortness Of Breath"
          />
          <Field
            name="BluishLips"
            component={renderCheckbox}
            label="Bluish Lips"
          />
          <Field
            name="DifficultyBreathing"
            component={renderCheckbox}
            label="Difficulty Breathing"
          />
          <Field
            name="InAbilityToWakeUp"
            component={renderCheckbox}
            label="InAbility To WakeUp"
          />
        </div>

        <div>
          <button
            type="submit"
            class="btn btn-outline-primary"
            disabled={submitting}
          >
            Submit
          </button>{" "}
          &nbsp;
          <button
            type="button"
            class="btn btn-outline-primary"
            disabled={submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      insertScreening: actions.insert,
    },
    dispatch
  );
};

export default connect(undefined,mapDispatchToProps)(
  reduxForm({
    form: "ScreeningForm",
    key: "Screening", // a unique identifier for this form
  })(ScreeningForm)
);
