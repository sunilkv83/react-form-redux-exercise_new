import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { refreshScreenings } from "../actions/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loggedInUser: "",
  };
  renderRedirect = () => {
    return <Redirect to="/" />;
  };

  updateRefreshStatus = () => {
      debugger;
    console.log(this.props);
    //  axios.get("https://localhost:44340/Screening").then((res) => {
    this.props.refreshScreenings();
    //});
  };

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-sm-1 col-md-2 mr-1 text-left">
          Welcome {this.props.user}
        </div>
        <div className="navbar-brand col-sm-3 col-md-2 mr-0"></div>

        <div>
          <button onClick={this.updateRefreshStatus}>Refresh</button>
        </div>
        <div>
          <button>Start</button>
        </div>
        <div className="navbar-nav px-3">
          <Link
            className="nav-item text-nowrap nav-link"
            to={""}
            onClick={this.renderRedirect}
          >
            Logout
          </Link>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
          refreshScreenings
      },
      dispatch
    );
  };
 export default connect(null, mapDispatchToProps)(Header);
//export default Header;
//abc
