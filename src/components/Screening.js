import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
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


const selectWidth = 150;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    width: selectWidth
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

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

  handleReset=()=>{
    this.setState({
      ...this.state,
      currentTemp: '',
      wakingTemp: '',
      temparatureMethod:'',
      temparatureUnit:''
  })
  }
  render() {

    //const { classes } = this.props;

    return (
      <div>
        <div>
          <TextField
            name="currentTemp"
            onChange={this.handleChange}
            placeholder="Current Temparature" value={this.state.currentTemp}
          />
        </div>
        <div>
          <TextField
            name="wakingTemp"
            onChange={this.handleChange}
            placeholder="Waking Temparature" value={this.state.wakingTemp}
          />
        </div>
        <br></br>

        <div>
          <FormControl component="fieldset"  style={{width:260}}>
            <FormLabel component="legend">Temparature Unit</FormLabel>
            <RadioGroup
              aria-label="temparatureUnit"
              name="temparatureUnit"
              onChange={this.handleChange}
              row={true} value={this.state.temparatureUnit}
            >
              <FormControlLabel value="F" control={<Radio />} label="F" />
              <FormControlLabel value="C" control={<Radio />} label="C" />
            </RadioGroup>
          </FormControl>
        </div>
        <br></br>

        <div>
          <FormControl component="fieldset" style={{width:260}}>
            <FormLabel component="legend">Temparature Method</FormLabel>
            <Select name="temparatureMethod" onChange={this.handleChange} value={this.state.temparatureMethod}>
              <option value="Oral">Oral</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>
        </div>
        <br></br>
        <div>
          <FormControl component="fieldset"  style={{width:260}}>
            <FormLabel component="legend">SYMPTOMS</FormLabel>
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
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className="btn btn-outline-primary text-justify"
          onClick={this.handleReset}
        >
         Reset
        </button>
        <br></br>
      </div>
    );
  }
}

export default connect(null, { addScreening })(Screening);
