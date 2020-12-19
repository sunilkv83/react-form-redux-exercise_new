import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";

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

const MyLocationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} style={{ minWidth: 120 }}>
      <div>
        <Field name="location" component={renderTextField} label="Location" />
      </div>
      <div>
        <Field
          component="input"
          type="datetime-local"
          name="InTime"
          label="In Time"
        ></Field>
      </div>
      <br>
      </br>
      <div>
        <Field
          component="input"
          type="datetime-local"
          name="OutTime"
          label="Out Time"
        ></Field>
      </div>
      <div>
        <Field name="Action" component={renderTextField} label="Action" />
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
};

const newLocal = "MyLocationForm";
export default reduxForm({
  form: newLocal,
  key: "Location", // a unique identifier for this form
})(MyLocationForm);
