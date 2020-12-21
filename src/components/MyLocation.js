import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { addLocation } from "../actions/action";

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

class MyLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      inTime: "",
      outTime: "",
      actions: "",
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddLocation = () => {
    this.props.addLocation(this.state);
    this.setState({ location: "", inTime: "",outTime:"",actions:"" });
  };

  handleReset = () => {
    this.setState({
      ...this.state,
      location: "",
      inTime: "",
      outTime: "",
      actions: "",
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br></br>
        <div className="form-row">
          <div>
            <TextField
              name="location"
              onChange={this.handleChange}
              placeholder="My Location"
              value={this.state.location}
            />
          </div>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <TextField
              name="inTime"
              onChange={this.handleChange}
              label="In Time"
              value={this.state.inTime}
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />

          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <br></br>
        <div className="form-row">
          <div>
          <TextField
              name="outTime"
              onChange={this.handleChange}
              label="Out Time"
              value={this.state.outTime}
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
        
          </div>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>
          <TextField
              name="actions"
              onChange={this.handleChange}
              placeholder="Actions"
              value={this.state.actions}
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <br></br>
        <br></br>
        <div className="form-row text-right">
          <div>
            <button
              className="btn btn-outline-primary text-justify"
              onClick={this.handleAddLocation}
            >
              Add Locations
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

export default connect(null, { addLocation })(MyLocation);
